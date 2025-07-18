import React from "react";
import {getShopInfo} from "@/app/_lib/staticData";

export default function ShopInfo() {
    const shopInfo = getShopInfo()
    return (
        <div className="pt-6 pb-20">
            <h3 className="font-semibold text-gray-600 text-xs  mb-3 underline underline-offset-5">Need
                help?</h3>
            <p className="text-sm text-gray-600">Address: {shopInfo.address}</p>
            <p className="text-sm text-gray-600 mt-2">Email: {shopInfo.email}</p>
            <p className="text-sm text-gray-600 mt-2">Phone: {shopInfo.phone}</p>
        </div>
    )
}