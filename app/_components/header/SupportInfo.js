import {TfiHeadphoneAlt} from "react-icons/tfi";

export default function SupportInfo() {
    return (
        <div className="flex items-center gap-4">
            <TfiHeadphoneAlt size='30'/>
            <div>
                <p className="text-2xl font-extrabold text-purple-500 tracking-wider">
                    1900100888
                </p>
                <p className="text-sm text-gray-300">
                    Support Center
                </p>
            </div>
        </div>
    );
}