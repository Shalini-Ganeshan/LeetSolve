import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import useHasMounted from "@/hooks/useHasMounted";

import { useState } from "react";

export default function Home() {
	const [loadingProblems, setLoadingProblems] = useState(true);
	const hasMounted = useHasMounted();

	if (!hasMounted) return null;

	return (
		<>
			<main className='bg-dark-layer-2 min-h-screen'>
				<Topbar />
				
				<div className="flex justify-center mt-2">
					
				<img width="70%" className="" src="https://res.cloudinary.com/dkr75ykb4/image/upload/v1688377662/leetcodelitehero.png" alt="hero"/>
				</div>
				<div className=" text-center text-gray-700 dark:text-gray-400 mt-10 mb-5 ">
					<div className="flex mx-auto px-36 justify-between">
						<div className="text-sm font-semibold  px-5 py-3  bg-dark-layer-1 text-white rounded-3xl flex items-center gap-2  cursor-pointer ">
							<img src="https://static.vecteezy.com/system/resources/previews/010/063/519/original/todo-list-icon-notepad-with-completed-todo-list-3d-render-png.png" alt="Logo" width="20" height="20" />
							<p>All Topics</p></div><div className="text-sm  px-5 py-3 bg-dark-layer-1 text-white hover:bg-dark-fill-3  rounded-3xl flex items-center gap-2 cursor-pointer "><img src="https://png.pngtree.com/png-vector/20220927/ourmid/pngtree-algorithm-vector-png-image_6219401.png" alt="Logo" width="20" height="20" /><p>Algorithm</p></div>
							<div className="text-sm  px-5 py-3 bg-dark-layer-1 text-white hover:bg-dark-fill-3  rounded-3xl flex items-center gap-2 cursor-pointer ">
								<img src="https://cdn-icons-png.flaticon.com/512/1104/1104982.png" alt="Logo" width="20" height="20"/><p>Database</p></div><div className=" px-5 py-3 bg-dark-layer-1 text-white hover:bg-dark-fill-3 text-sm rounded-3xl flex items-center gap-2 cursor-pointer "><img src="https://logosdownload.com/logo/javascript-logo-big.png" alt="Logo" width="20" height="20"/>
								<p>JavaScript</p></div><div className="text-sm px-5 py-3 bg-dark-layer-1 text-white hover:bg-dark-fill-3  rounded-3xl flex items-center gap-2 cursor-pointer "><img src="https://www.pngkey.com/png/full/140-1409984_python-logo-bash-shell-logo-shell-script-logo.png" alt="Logo" width="20" height="20"/><p>Shell</p></div>
							<div className="text-sm px-5 py-3 bg-dark-layer-1 text-white hover:bg-dark-fill-3  rounded-3xl flex items-center gap-2 cursor-pointer ">
								<img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/concurrency-5363813-4477608.png?f=webp" alt="Logo" width="20" height="20"/><p>Concurrency</p></div></div></div>
				<div className='relative overflow-x-auto mx-auto px-6 pb-10'>
					{loadingProblems && (
						<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
							{[...Array(10)].map((_, idx) => (
								<LoadingSkeleton key={idx} />
							))}
						</div>
					)}
					<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
						{!loadingProblems && (
							<thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
								<tr>
									<th scope='col' className='px-1 py-3 w-0 font-medium'>
										Status
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Title
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Difficulty
									</th>

									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Category
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Solution
									</th>
								</tr>
							</thead>
						)}
						<ProblemsTable setLoadingProblems={setLoadingProblems} />
					</table>
				</div>
			</main>
		</>
	);
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};
