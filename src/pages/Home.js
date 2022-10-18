import Number from 'components/Number';

export default function Home() {
	return (
		<div className='p-4'>
			<div>
				<div>
					<h1 className='text-2xl font-bold'>tailwindcss notebook</h1>
					<p className='text-gray-600'>
						My personal tailwind playground, because designing with tailwind is{' '}
						<span className='text-red-600'>&hearts;</span>
					</p>
				</div>
			</div>
			<div className='mt-8'>
				<Number>1</Number>
				<div className='space-x-8 flex mt-4'>
					<div className='w-72 h-24 rounded-xl border border-indigo-600 bg-indigo-100'>
						<div className='w-full h-full flex justify-center items-center text-sm p-4 text-indigo-900'>
							A dark border and light background monochrome looks so cool!
						</div>
					</div>
					<div className='w-72 h-24 rounded-xl border-2 border-indigo-600 border-dashed bg-indigo-100'>
						<div className='w-full h-full flex justify-center items-center text-sm p-4 text-indigo-900'>
							A dark border and light background monochrome looks so cool!
						</div>
					</div>
					<div className='w-72 h-24 rounded-xl border-2 border-indigo-600 border-dotted bg-indigo-100'>
						<div className='w-full h-full flex justify-center items-center text-sm p-4 text-indigo-900'>
							A dark border and light background monochrome looks so cool!
						</div>
					</div>
				</div>
				<div className='mt-8 space-x-8 flex'>
					<div className='w-72 h-24 rounded-xl border border-fuchsia-600 bg-fuchsia-100'>
						<div className='w-full h-full flex justify-center items-center text-sm p-4 text-fuchsia-900'>
							A dark border and light background monochrome looks so cool!
						</div>
					</div>
					<div className='w-72 h-24 rounded-xl border-2 border-fuchsia-600 border-dashed bg-fuchsia-100'>
						<div className='w-full h-full flex justify-center items-center text-sm p-4 text-fuchsia-900'>
							A dark border and light background monochrome looks so cool!
						</div>
					</div>
					<div className='w-72 h-24 rounded-xl border-2 border-fuchsia-600 border-dotted bg-fuchsia-100'>
						<div className='w-full h-full flex justify-center items-center text-sm p-4 text-fuchsia-900'>
							A dark border and light background monochrome looks so cool!
						</div>
					</div>
				</div>
				<div className='mt-8 space-x-8 flex'>
					<div className='w-72 h-24 rounded-xl border border-emerald-600 bg-emerald-100'>
						<div className='w-full h-full flex justify-center items-center text-sm p-4 text-emerald-900'>
							A dark border and light background monochrome looks so cool!
						</div>
					</div>
					<div className='w-72 h-24 rounded-xl border-2 border-emerald-600 border-dashed bg-emerald-100'>
						<div className='w-full h-full flex justify-center items-center text-sm p-4 text-emerald-900'>
							A dark border and light background monochrome looks so cool!
						</div>
					</div>
					<div className='w-72 h-24 rounded-xl border-2 border-emerald-600 border-dotted bg-emerald-100'>
						<div className='w-full h-full flex justify-center items-center text-sm p-4 text-emerald-900'>
							A dark border and light background monochrome looks so cool!
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
