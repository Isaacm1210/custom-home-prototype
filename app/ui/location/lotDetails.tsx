import { useEffect, useState } from "react"
import { lots } from "@/models/lots"
import { lot } from "@/types/community";
import SelectedLot from "./selectedLot";
export default function LotDetails({ lotNum = 0, handleLot }: { lotNum: number, handleLot: Function }) {
    const [selectedLot, setSelectedLot] = useState<lot>()
    useEffect(() => {
        const temp = lots.filter((element) => element.lotNum == lotNum)
        if (temp !== null)
            setSelectedLot(temp[0]);
    }, [lotNum])

    if (selectedLot === undefined) {
        return (
            <div className="w-max mx-auto my-6 text-xl font-medium">Please Select a Lot to View Details</div>
        )
    }
    return (
        <div className=" m-auto mt-3">
            <div className="bg-green-200 w-min m-auto p-5 rounded-lg">
                <SelectedLot selectedLot={selectedLot} />
            </div>
            <div className="w-36 m-auto mt-2">
                <input
                    type="button"
                    value={"Select This Lot"}
                    onClick={() => handleLot(selectedLot)}
                    className="hover:cursor-pointer w-full bg-yellow-600 rounded-lg text-lg hover:bg-opacity-75" 
                />
            </div>
        </div>
    )
}