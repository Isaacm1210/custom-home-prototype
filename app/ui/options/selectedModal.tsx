import Image from "next/image"
import { ModelDef } from "@/types/model"
export default function SelectedModal({modal}: {modal: ModelDef}) {
    return (
        <div>
            <div className="w-2/5 m-auto">
                <div className="absolute text-4xl font-semibold my-4 ml-4 text-opacity-0">{modal.name}</div>
                <Image src={modal.URL} alt="Modal IMG" className="rounded-lg"/>
            </div>
            <div className="flex items-center text-lg font-medium gap-5 w-2/5 m-auto">
                <p>Bed: {modal.bed}</p>
                <p>Bath: {modal.bath}</p>
                <p>sqft: {modal.sqft}</p>
            </div>
        </div>
    )
}