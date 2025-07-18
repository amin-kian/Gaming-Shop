import {PiStarFourLight} from "react-icons/pi";

export default function AdItem({text}) {
    return (
        <div className='flex items-center justify-center gap-2 md:gap-4 font-bold text-xl md:text-2xl'>
            <PiStarFourLight/>
            <span>{text}</span>
        </div>
    )
}