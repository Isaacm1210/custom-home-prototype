'use client';

import Image from "next/image";
import local from '@/public/icon/geo-alt-fill.svg'
import house from '@/public/icon/house-door.svg'
import pencil from '@/public/icon/pencil-square.svg'
import check from '@/public/icon/check2-square.svg'
import clsx from 'clsx';

const links = [
    { name: "Location", icon: local },
    { name: "Modal", icon: house },
    { name: "Options", icon: pencil },
    { name: "Summary", icon: check }
]

export default function Navlinks({ page, change}: {page: string, change: any}) {
    
    return (
        <div className="flex justify-evenly">
            {links.map((link) => {
                return (
                    <div className={clsx("hover:cursor-pointer",{"text-blue-800" : page === link.name})} key={link.name} onClick={() => {change(link.name)}}>
                        <div className="w-7 h-7 m-auto border rounded border-gray-700 flex justify-center border-opacity-30" >
                            <Image src={link.icon} alt="icon" width={22} height={22} />
                        </div>
                        <p>{link.name}</p>
                    </div>
                );
            })}
        </div>
    )
}