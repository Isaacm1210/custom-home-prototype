"use client";
import Image from "next/image"
import lots from "@/public/Lots.jpg"
import LotDetails from "./lotDetails"
import { useState } from "react";
export default function Lot(){
    const [ lot, setLot ] = useState(1);
    return (
        <div>
            <div className="w-96 m-auto">
                <div className="w-6 h-6 ml-8 mt-20 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer">20</div>
                <div className="w-6 h-6 ml-16 mt-18 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer">19</div>
                <div className="w-6 h-6 ml-24 mt-16 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer">18</div>
                <div className="w-6 h-6 ml-32 mt-14 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer">17</div>
                <div className="w-6 h-6 ml-44 mt-14 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer">16</div>
                <div className="w-6 h-6 ml-56 mt-18 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer">15</div>
                <div className="w-6 h-6 ml-64 mt-28 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer">14</div>
                <div className="w-6 h-6 ml-70 mt-40 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer">13</div>
                <div className="w-6 h-6 ml-64 mt-52 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer">12</div>
                <div className="w-6 h-6 ml-56 mt-60 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer">11</div>
                <div className="w-6 h-6 ml-48 mt-64 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer">10</div>
                <div className="w-6 h-6 ml-40 mt-70 bg-green-800 absolute rounded-xl justify-center items-center flex font-semibold hover:cursor-pointer">9</div>
                <Image src={lots} alt="Lot IMG" className="rounded-2xl"/>
            </div>
            <LotDetails lotNum={lot}/>
        </div>
    )
}