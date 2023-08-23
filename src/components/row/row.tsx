import Thumbnail from "../thumbnail/thumbnail";
import { RowProps } from "./row.props";
import {BsFillCaretLeftFill, BsFillCaretRightFill} from 'react-icons/bs';
import { useRef, useState } from 'react'


const Row = ({title, movies, isBig = false}: RowProps) => {
	const [moved, setMoved] = useState<boolean>(false);
	const carouselRef = useRef<HTMLDivElement>(null)

        const handleClick = (direction: 'left' | 'right') => {
		setMoved(true);

		if(carouselRef.current) {
			const {scrollLeft, clientWidth} = carouselRef.current

			const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

			carouselRef.current.scrollTo({left: scrollTo, behavior: 'smooth'});

			if(direction === 'left' && scrollTo === 0) {
				setMoved(false)
			}
		}
	}

	return (<div className='h-[400px] space-y-1 md:space-y-2 mt-[-30px]'>
		<h2 className='w-56 cursor-pointer text-sm md:text-2xl font-bold tracking-[1px] text-white hover:text-[#c3bbbb] transition duration-200'>{title}</h2>
		{/* Carousel */}
		<div className='group relative md:ml-2'>
			<BsFillCaretLeftFill className='absolute top-0 bottom-0 left-2 z-40 m-auto h-8 w-8 cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:scale-125'

			onClick={() => handleClick('left')}
			/>

			<div ref={carouselRef} className={`flex scrollbar-hide ${!isBig && 'space-x-1 md:space-x-4 '}  items-center overflow-hidden overflow-x-scroll`}>
				{movies.map(movie => (
					<Thumbnail key={movie.id} movie={movie} isBig={isBig}/>
					))}
			</div>
			<BsFillCaretRightFill className='absolute top-0 bottom-0 right-2 z-40 m-auto h-8 w-8 cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:scale-125'
			onClick={() => handleClick('right')}
			/>
		</div>
	</div>
	);
};

export default Row;