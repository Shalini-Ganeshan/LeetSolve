import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
	const authModal = useRecoilValue(authModalState);
	const [user, loading, error] = useAuthState(auth);
	const [pageLoading, setPageLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (user) router.push("/");
		if (!loading && !user) setPageLoading(false);
	}, [user, router, loading]);

	if (pageLoading) return null;

	return (
		<div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
			<div className='max-w-7xl mx-auto'>
				<Navbar />
				<div className="font-poppins text-gray-200 text-2xl ml-80 animate-slideInFromLeft flex">
 The best platform to prepare for your  <p className="text-brand-orange ml-2"> dream job</p>.
</div>
				<div className="font-poppins text-gray-200 text-2xl ml-96 mt-4 animate-slideInFromLeft flex">
 Start your<p className="text-brand-orange ml-2 mr-2">    &lt; coding &gt;</p>journey today! 
</div>
				<div className='flex items-center justify-center h-[calc(100vh-15rem)] pointer-events-none select-none'>
					<Image src='/hero.png' alt='Hero img' width={600} height={600} className="opacity-75 rounded animate-slideInFromLeft"/>
				</div>
				{authModal.isOpen && <AuthModal />}
			</div>
		</div>
	);
};
export default AuthPage;
