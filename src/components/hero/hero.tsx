import {useState} from 'react'
import { IMovie } from "@/interfaces/app.interface"
import { HomeProps } from "./hero.props"
import Image from 'next/image'
import { image_base } from '../helpers/constansts'

const Hero = ({trending}: HomeProps): JSX.Element => {
      const [movie, setMovie] = useState<IMovie>({} as IMovie)

      useEffect(() => {
            const randomMovie = trending[Math.floor(Math.random() * trending.length)]
            setMovie(randomMovie)
      }, [trending])
  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-end'>

      <div className='absolute top-0 left-0 h-[95vh] -z-10 w-full'>
            <Image src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`} alt={movie?.title} fill/>
      </div>

      <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>{movie?.title || movie?.name || movie?.original_name}</h1>
      <p className='max-w-xs md:max-w-lg lg:max-w-2xl text-xs md:text-lg lg:text-2xl'>{movie?.overview}</p>

    </div>
  )
}

export default Hero