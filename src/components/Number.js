export default function Number({ children }) {
	return (
		<div className='h-12 w-12 border-4 border-dotted border-slate-400 rounded-full flex justify-center items-center'>
			<span className='text-2xl text-slate-900'>{children}</span>
		</div>
	);
}
