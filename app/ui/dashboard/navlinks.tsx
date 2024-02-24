'use client';

import Image from "next/image";
import Link from "next/link"
import local from '@/public/icon/geo-alt-fill.svg'
import house from '@/public/icon/house-door.svg'
import pencil from '@/public/icon/pencil-square.svg'
import check from '@/public/icon/check2-square.svg'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
const links = [
    {name: 'Location', href: '/dashboard', icon: local},
    {name: 'Model', href: '/dashboard/model', icon: house},
    {name: 'Options', href: '/dashboard/options', icon: pencil},
    {name: 'Summary', href: '/dashboard/summary', icon: check}
]

export default function Navlinks(){
    const pathname = usePathname();
    return (
        <div className="flex justify-evenly">
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link href={link.href} key={link.name} className={clsx({'text-blue-800' : pathname == link.href})}>
                        <div className="w-7 h-7 m-auto border rounded border-gray-700 flex justify-center border-opacity-30">
                            <Image src={link.icon} alt="icon" width={22} height={22} color={clsx({"green" : pathname == link.href})} />
                        </div>
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </div>
    )
}