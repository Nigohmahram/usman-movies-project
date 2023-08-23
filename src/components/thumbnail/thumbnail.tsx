import Image from "next/image"
import { ThumbnailProps } from "./thumbnail.props"
import { image_base } from "src/components/helpers/constants"
import ReactStars from "react-stars"

const Thumbnail = ({movie, isBig = false}: ThumbnailProps) => {
  return (
    <div className={`relative
    ${isBig ? 'h-[450px] md:h-[450px] min-w[350px] md:min-w-[500px] pb-[50px]' : 'h-[330px] md:h-[270px] min-w-[100px] md:min-w-[380px]' }
     cursor-pointer transition duration-500 ease-out  md:hover:scale-110`}>
      <Image
	src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`} alt={movie.title} fill className='rounded-sm md:rounded object-cover'/>

  <div className='absolute left-0 right-0 bottom-0 top-0 bg-black/25 w-full h-full'></div>

  <div className="absolute bottom-2 min-h-[180px] left-2 right-2">


			<div className='flex items-center space-x-2 mt-10'>
				<ReactStars edit={false} count={10} value={movie.vote_average} size={25}/>
				<p className='font-bold'>({movie.vote_count})</p>
			</div>
        <h1 className='text-xl font-bold md:text-2xl'>{movie?.title || movie?.name || movie?.original_name}</h1>

  </div>
    </div>
  )
}

export default Thumbnail