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
            <div>Please Select a Lot to View Details</div>
        )
    }
    return (
        <div className="w-96 m-auto mt-6">
            <SelectedLot selectedLot={selectedLot} />
            <input
                type="button"
                value={"Select This Lot"}
                onClick={() => handleLot(selectedLot)}
                className="hover:cursor-pointer w-1/2 bg-yellow-600"
            />
        </div>
    )
}