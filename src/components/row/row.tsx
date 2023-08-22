import Thumbnail from "../thumbnail/thumbnail";
import { RowProps } from "./row.props";
import {BsFillCaretLeftFill, BsFillCaretRightFill} from 'react-icons/bs'


const Row = ({title, movies}: RowProps) => {
	return (<div className='h-[800px] space-y-1 md:space-y-2 mt-[-30px]'>
		<h2 className='w-56 cursor-pointer text-sm md:text-2xl font-bold tracking-[1px] text-white hover:text-[#c3bbbb] transition duration-200'>{title}</h2>
		{/* Carousel */}
		<div className='group relative md:ml-2'>
			<BsFillCaretLeftFill className='absolute top-0 bottom-0 left-2 z-40 m-auto h-7 w-7 cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:scale-125'/>
			<div className='flex items-center space-x-0.5 overflow-x-scroll md:space-x-4'>
				{movies.map(movie => (
					<Thumbnail key={movie.id} movie={movie}/>
					))}
			</div>
			<BsFillCaretRightFill className='absolute top-0 bottom-0 right-2 z-40 m-auto h-7 w-7 cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:scale-125'/>
		</div>
	</div>
	);
};

export default Row;