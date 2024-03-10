import SelectedLot from "@/app/ui/location/selectedLot"
import Models from "@/app/ui/model/models"
import { lot } from "@/types/community"
export default function Model({ callBack, lot }: { callBack: Function, lot: lot }) {
    return (
        <div className="w-full h-full pb-5">
            <div className="">
                <h2 className="text-center w-62 text-3xl m-auto my-5 font-semibold">Select Your Model</h2>
                <div className="bg-green-200 w-min m-auto mb-4 p-5 rounded-lg">
                    <SelectedLot selectedLot={lot} />
                </div>
                
                <Models callBack={callBack} lot={lot} />
            </div>
        </div>
    )
}