import Image from "next/image";
import brick from "@/public/options/external/brick.jpg"
import asphalt from "@/public/options/external/asphalt.jpg"
import concrete from "@/public/options/external/concrete.jpg"
import { lot } from "@/types/community";
import { useState } from "react";
export default function ExteriorOptions({lot, setGarage, setDriveway}: {lot: lot, setGarage: Function, setDriveway: Function}) {
    const [smallLot, setSmallLot ] = useState(false);
    
    const checkLot = () => {
        if(lot.frontage < 29){
            setSmallLot(true);
           let standard = document.getElementById("standard");
           if(standard)
            standard.checked = true;
        }else{
             setGarage(3);
        }
       
    }


    return (
        <div className="w-8/12 m-auto my-8">
            <h1 className="text-2xl font-semibold">Exterior Options</h1>
            <div className="my-3 mx-5">
                <h2 className="text-xl font-medium">Garage</h2>
                <div className="ml-5">
                    <div className="flex items-center">
                        <input type="radio" id="single" name="garage" value={1} className="w-4 h-4 accent-zinc-950" onClick={() => setGarage(1)}/>
                        <label htmlFor="single">Single Car (-$15,000)</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="standard" name="garage" value={2} className="w-4 h-4 accent-zinc-950" defaultChecked onClick={() => setGarage(2)}/>
                        <label htmlFor="standard">Standard (Double Car)</label>
                    </div>
                    {smallLot ? (
                        <div>
                            <p className="text-red-500">Lot Too Small, Please Choose a Larger lot</p>
                        </div>
                    ) : ""}
                    <div className="flex items-center">
                        <input type="radio" id="triple" name="garage" value={3} className="w-4 h-4 accent-zinc-950" onClick={() => checkLot()}/>
                        <label htmlFor="triple">Triple Car (+$15,000)</label>
                    </div>
                </div>
            </div>
            <div className="m-5">
                <h2 className="text-xl font-medium">Drive-Way</h2>
                <div>
                    <h3>Material</h3>
                    <div className="ml-5 flex justify-evenly">
                        <div className="flex flex-col my-3">
                            <div className="flex items-center">
                                <input type="radio" id="stone" name="driveway" value={1} className="w-4 h-4 accent-zinc-950" onClick={() => setDriveway(1)}/>
                                <label htmlFor="stone">Brick (+$5,000)</label>
                            </div>
                            <div className="w-28 h-28 rounded-2xl overflow-hidden relative">
                                <Image src={brick} alt="Brick Sample" fill objectFit="cover"/>
                            </div>
                        </div>
                        <div className="flex flex-col my-3">
                            <div className="flex items-center">
                                <input type="radio" id="concrete" name="driveway" value={2} className="w-4 h-4 accent-zinc-950" defaultChecked onClick={() => setDriveway(2)}/>
                                <label htmlFor="concrete">Concreate (Standard)</label>
                            </div>
                            <div className="w-28 h-28 relative rounded-2xl overflow-hidden">
                                <Image src={concrete} alt="concrete sample" fill objectFit="cover"/>
                            </div>
                        </div>
                        <div className="flex flex-col my-3">
                            <div className="flex items-center">
                                <input type="radio" id="rock" name="driveway" value={3} className="w-4 h-4 accent-zinc-950" onClick={() => setDriveway(3)}/>
                                <label htmlFor="rock">Asphalt (+$4,500)</label>
                            </div>
                            <div className="w-28 h-28 relative rounded-2xl overflow-hidden">
                                <Image src={asphalt} alt="asphalt sample" fill objectFit="cover"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}