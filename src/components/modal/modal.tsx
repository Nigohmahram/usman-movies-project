import { useInfoStore } from '@/store';
import MuiModal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import {LiaTimesSolid} from 'react-icons/lia';
import {FaPlay} from 'react-icons/fa';
import {AiOutlineLike} from 'react-icons/ai';
import {FaPause} from 'react-icons/fa';
import {BiPlus, BiSolidVolumeMute, BiSolidVolumeFull} from 'react-icons/bi';
import ReactPlayer from 'react-player';
const Modal = () => {
        const { modal, setModal, currentMovie } = useInfoStore();
        const [trailer, setTrailer] = useState<string>('');
        const [muted, setMuted] = useState<boolean>(true);
        const [playing, setPlaying] = useState<boolean>(true);
        const Play = 'Play';
        const Pause = 'Pause';

const base_url = process.env.NEXT_PUBLIC_API_DOMAIN as string;
const api_key = process.env.NEXT_PUBLIC_API_KEY as string;
//eslint-disable-next-line
const api = `${base_url}/${currentMovie?.media_type === 'tv' ? 'tv' : 'movie'}/${currentMovie.id}/videos?api_key=${api_key}&language=en-US`;


        const handleClose = () => {
                setModal(false);
        };
        useEffect(() => {
                const fetchVidioData = async () => {
                        const data = await fetch (api).then(res => res.json());

                        if(data?.results) {
                                const index = data.results.findIndex((el: Element) => el.type === 'Trailer');
                                setTrailer(data?.results[index]?.key);
                        }
                };
                console.log(trailer);

                fetchVidioData();
                //eslint-disable-next-line
        }, [currentMovie]);


  return <MuiModal
  open={modal}
  onClose={handleClose}
  className={'fixed !top-[-50px] left-0 right-0 z-50 mx-auto w-full max-w-6xl overflow-hidden overflow-y-scroll scrollbar-hide'}>
        <>
        <button onClick={() => setModal(false)} className='modalButton absolute right-[20px] top-[100px] !z-40 h-[60px] w-[60px] border-none bg-[#181818]'>
                <LiaTimesSolid className='w-9 h-9'/>
        </button>

        <div className='relative pt-[55%] pb-[71.7px] mt-[-20px]'>
                <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer}`} width={'100%'}
                height={'90%'}
                playing={playing}
                style={{position: 'absolute', top: 0, left: 0}}
                muted={muted}
                />
                <div
                className='absolute top-[500px] bottom-0 left-[-39px] flex w-full items-center justify-between px-10'>
                        <div className='flex space-x-2 '>
                                <button className='flex items-center gap-x-2 rounded bg-white px-6 py-2  text-xl font-bold text-black transition-all hover:bg-[#e6e6e6]'
                                onClick={() => setPlaying(prev => !prev)}>
                                        {playing ? (
                                                <>
                                                <FaPause className='h-7 w-7 text-black'/>
                                                Pause
                                                </>
                                        ) : (
                                                <>
                                                <FaPlay  className='h-7 w-7 text-black' />
                                                Play
                                                </>
                                        )}
                                </button>
                                <button className='modalButton'>
                                        <BiPlus className='w-7 h-7'/>
                                </button>
                                <button className='modalButton'>
                                        <AiOutlineLike className='w-7 h-7'/>
                                </button>
                                <button className='modalButton' onClick={() => setMuted(prev => !prev)}>{muted ? <BiSolidVolumeMute className='w-6 h-6'/> : <BiSolidVolumeFull className='w-6 h-6'/>}</button>
                        </div>
                </div>
        </div>


        <div className='flex space-x-16 rounded-b-md bg-[#181818] mt-[-80px] px-10 py-3'>
					<div className='space-y-2 text-lg'>
						<div className='flex items-center space-x-2 text-sm'>
							<p className='font-semibold text-green-400'>{currentMovie!.vote_average * 10}% Match</p>
							<p className='font-light'>{currentMovie?.release_date}</p>
							<div className='flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs'>HD</div>
						</div>

						<div className='flex flex-col gap-x-10 gap-y-4 font-light md:flex-row'>
							<p className='w-5/6'>{currentMovie?.overview}</p>
							<div className='flex flex-col space-y-3 text-sm'>
								<div>
									<span className='text-[gray]'>Original language:</span> {currentMovie?.original_language}
								</div>

								<div>
									<span className='text-[gray]'>Total votes:</span> {currentMovie?.vote_count}
								</div>
							</div>
						</div>
					</div>
				</div>
        </>
        </MuiModal>
};

export default Modal
