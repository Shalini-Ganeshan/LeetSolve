import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { toast } from "react-toastify";
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalState);
	const handleClick = (type: "login" | "register" | "forgotPassword") => {
		setAuthModalState((prev) => ({ ...prev, type }));
	};
	const [inputs, setInputs] = useState({ email: "", password: "" });
	const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
	const router = useRouter();
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!inputs.email || !inputs.password) return  toast.error("Please fill all fields", { position: "top-center" });
		try {
			const newUser = await signInWithEmailAndPassword(inputs.email, inputs.password);
			if (!newUser) return;
			router.push("/");
		} catch (error: any) {
			toast.error("Invalid Credentials", { position: "top-center", autoClose: 3000, theme: "dark" });
		}
	};

	useEffect(() => {
		if (error) toast.error("Invalid Credentials", { position: "top-center", autoClose: 3000, theme: "dark" });
	}, [error]);
	return (
		<form className='space-y-6 px-6 pb-4' onSubmit={handleLogin}>
			<Image src='/leetcode-icon.png' alt='Logo' height={90} width={90} className="mx-auto"  />
			<h3 className='text-xl font-medium text-gray-700 ml-28'>Sign in to LeetSolve</h3>
			<div>
				<label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
				
				</label>
				<input
					onChange={handleInputChange}
					type='email'
					name='email'
					id='email'
					className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
           border-gray-400 placeholder-gray-400 text-gray-700
        '
					placeholder='Username or E-mail'
				/>
			</div>
			<div>
				<label htmlFor='password' className='text-sm font-medium block mb-2 '>
			
				</label>
				<input
					onChange={handleInputChange}
					type='password'
					name='password'
					id='password'
					className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
             border-gray-400 placeholder-gray-400  text-gray-700
        '
					placeholder='Password'
				/>
			</div>

			<button
				type='submit'
				className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
            '
			>
				{loading ? "Loading..." : "Log In"}
			</button>
			<button className='flex w-full justify-end' onClick={() => handleClick("forgotPassword")}>
				<a href='#' className='text-sm block text-brand-orange hover:underline w-full text-right'>
					Forgot Password?
				</a>
			</button>
			<div className='text-sm font-medium text-gray-700'>
				Not Registered?{" "}
				<a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick("register")}>
					Create account
				</a>
			</div>
		</form>
	);
};
export default Login;
