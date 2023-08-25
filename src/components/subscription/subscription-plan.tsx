import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import { AiOutlineVideoCameraAdd, AiOutlineHourglass, AiOutlineLogout } from 'react-icons/ai'
import { RiVipCrown2Line } from 'react-icons/ri'
import { VscAzureDevops } from 'react-icons/vsc'
import { SubscriptionPlanProps } from "./subscription-plan-props";
import PlanCard from "../plan-card/plan-card";

const SubscriptionPlan = ({ products }: SubscriptionPlanProps) => {
        const {logout} = useAuth();

	return (
                <div className='min-h-screen bg-[#014E56]'>
			<div className='border-b-2 border-gray-300/20 h-[10vh] flex justify-between items-center px-4 md:px-10'>
				<Image src={'/logo.svg'} alt={'logo'} width={56} height={56} className={'cursor-pointer object-contain'} />
				<div onClick={logout} className='cursor-pointer hover:underline'>
					<div className=" flex justify-center items-center ">
						LogOut <AiOutlineLogout className="pl-1 w-8 h-8"/>
					</div>
				</div>
			</div>
			<div className='flex flex-col space-y-4 text-center pt-5'>
				<h1 className='text-2xl md:text-5xl text-shadow-sm'>Flexible pricing for teams of any size.</h1>
				<p className='text-xl text-shadow'>Relaxing with watchin your favourite movies and tv.</p>
			</div>
			<div className='flex justify-center items-center py-10'>
                                <div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>
                                        {/* CartPlan */}
					{products.map(product => <PlanCard key={product.id}  product={product} />).reverse()}
                                </div>
                                </div>
                                </div>
        );
};

export default SubscriptionPlan;