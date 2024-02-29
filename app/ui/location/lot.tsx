"use client";
import Image from "next/image"
import lots from "@/public/Lots.jpg"
import LotDetails from "./lotDetails"
import { useEffect, useState } from "react";
export default function Lot({handleLot}: {handleLot: Function}) {
    const [lot, setLot] = useState(0);
    
    return (
        <div>
            <div className="w-96 m-auto">
                <div className="w-6 h-6 ml-8 mt-20 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer" onClick={() => setLot(20)}>20</div>
                <div className="w-6 h-6 ml-16 mt-18 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer" onClick={() => setLot(19)}>19</div>
                <div className="w-6 h-6 ml-24 mt-16 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer" onClick={() => setLot(18)}>18</div>
                <div className="w-6 h-6 ml-32 mt-14 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer" onClick={() => setLot(17)}>17</div>
                <div className="w-6 h-6 ml-44 mt-14 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer" onClick={() => setLot(16)}>16</div>
                <div className="w-6 h-6 ml-56 mt-18 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer" onClick={() => setLot(15)}>15</div>
                <div className="w-6 h-6 ml-64 mt-28 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer" onClick={() => setLot(14)}>14</div>
                <div className="w-6 h-6 ml-70 mt-40 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer" onClick={() => setLot(13)}>13</div>
                <div className="w-6 h-6 ml-64 mt-52 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer" onClick={() => setLot(12)}>12</div>
                <div className="w-6 h-6 ml-56 mt-60 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer" onClick={() => setLot(11)}>11</div>
                <div className="w-6 h-6 ml-48 mt-64 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer" onClick={() => setLot(10)}>10</div>
                <div className="w-6 h-6 ml-40 mt-70 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer" onClick={() => setLot(9)}>9</div>
                <Image src={lots} alt="Lot IMG" className="rounded-2xl" />
            </div>
            <LotDetails lotNum={lot} handleLot={handleLot}/>
        </div>
    )
}