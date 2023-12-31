import Image from 'next/image';
import { useEffect, useState } from 'react';
import { image_base } from '../helpers/constants';
import { IMovie } from 'src/interfaces/app.interface';
import { HeroProps } from './hero.props';
import { TbPlayerPlay } from 'react-icons/tb';
import ReactStars from 'react-stars';
import { useInfoStore } from '@/store';

const Hero = ({ trending }: HeroProps): JSX.Element => {
	const { setModal, setCurrentMovie } = useInfoStore();
	const [movie, setMovie] = useState<IMovie>({} as IMovie);

	useEffect(() => {
		const randomMovie = trending[Math.floor(Math.random() * trending.length)];
		setMovie(randomMovie);
	}, [trending]);

	const handleCurrentMovie = () => {
		setModal(true);
		 setCurrentMovie(movie);
	}

	return (
		<div className='flex flex-col space-y-2 py-20 md:space-y-4 lg:h-[75vh] lg:pb-12 lg:justify-end '>
			<div className='absolute top-0 left-0 -z-10 h-[95vh] w-full'>
				<Image
					src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
					alt={movie.title}
					fill
					className='object-cover'
				/>
			</div>

				<div className='py-[4px] px-[8px] text-center rounded-bl-[8px] rounded-tr-[8px] bg-[#0000]/50 w-[111px] uppercase font-bold'>
					{movie.media_type}
				</div>

			<div className='flex items-center space-x-2 mt-10'>
				<ReactStars edit={false} count={10} value={movie.vote_average} size={25}/>
				<p className='font-bold'>({movie.vote_count})</p>
			</div>

			<h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>{movie?.title || movie?.name || movie?.original_name}</h1>

			<p className=' md:max-w-lg lg:max-w-2xl text-xs text-shadow-md md:text-lg lg:text-2xl font-bold'>
				{movie?.overview?.slice(0, 200)}
				</p>
			<div>
				<button
				onClick={handleCurrentMovie}
				className='flex justify-center items-center space-x-2 bg-white/50
				hover:bg-gray-400 transition-all font-bold text-black w-[200px] h-[56px] rounded-full'>
					<TbPlayerPlay className='h-5 w-5 md:h8 md:w-8' /> Watch now
				</button>
			</div>
		</div>
	);
};

export default Hero;