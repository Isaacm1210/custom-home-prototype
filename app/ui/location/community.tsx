import Image from "next/image"
import legacy from "@/public/legacy.jpg";
export default function Community(){
    return (
        <div>
            <div className="w-1/4 h-80 relative overflow-hidden rounded-lg">
                <Image src={legacy} alt="legacy" fill objectFit="cover"/>
                
            </div>
            
        </div>
    )
}