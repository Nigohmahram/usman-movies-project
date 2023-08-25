import { AiOutlineHourglass, AiOutlineVideoCameraAdd } from "react-icons/ai"
import { PlanCardProps } from "./plan-card.props"
import { RiVipCrown2Line } from "react-icons/ri"

const PlanCard = ( { product }: PlanCardProps) => {
  return (
                  <div  className='max-w-sm !w-[300px] !h-[450px] cursor-pointer bg-white/95 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500'>
						<h3 className='mb-3 text-xl font-bold text-[#6e728e]'>{product.name}</h3>
						<div className='relative'>
							{/* eslint-disable-next-line */}
							<img
								src={product.images[0]}
								alt='Colors'
								className='rounded-xl w-full'
							/>
							<p className='absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg'>${product.default_price.unit_amount}</p>
							<div className='absolute rounded-xl left-0 right-0 bottom-0 top-0 bg-black/20 w-full h-full' />
						</div>
						<div className='border-[1px] border-black/20 mt-4' />
						<button className='buyButton uppercase tracking-[1px] mt-4 w-full text-white border-[1px] border-[#6d72de] bg-[#6D72DE] py-4 rounded hover:bg-[#fff] hover:text-[#6d72de] font-bold'>Buy Plan</button>
						<div className='my-4  flex-col space-y-2'>
							{product.metadata.adv.split(', ').map((c, id) => (
							<div key={id} className='flex space-x-2 items-center'>
								{id == 0 && <AiOutlineHourglass className='w-6 h-6 text-black' />}
								{id == 1 && <AiOutlineVideoCameraAdd className='w-6 h-6 text-black' />}
								{id == 2 && <RiVipCrown2Line className='w-6 h-6 text-black'/>}
								<p className="text-[#6e728e] font-semibold">{c}</p>
							</div>
							))}
						</div>
					</div>
  )
}

export default PlanCard