import Image from 'next/image';
import {getPaymentIcons} from '@/app/_lib/staticData';
import {IoShieldCheckmarkOutline} from 'react-icons/io5';

export default function SafeCheckout() {
    const paymentIcons = getPaymentIcons();

    return (
        <div className='flex flex-wrap items-center md:justify-start justify-center gap-5'>
            <h3 className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-800">
                <IoShieldCheckmarkOutline className="text-xl"/>
                Guaranteed Safe Checkout
            </h3>
            <div className="flex items-center gap-2">
                {paymentIcons.map((icon) => (
                    <div key={icon.id} className="bg-gray-100 p-1 rounded-sm">
                        <Image src={icon.src} alt={icon.alt} width={38} height={24}/>
                    </div>
                ))}
            </div>
        </div>
    );
}