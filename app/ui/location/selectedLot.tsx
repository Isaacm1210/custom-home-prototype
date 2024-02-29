import { lot } from "@/types/community";

export default function SelectedLot({selectedLot}: {selectedLot: lot}){
    return (
        <div className="w-96 m-auto">
            <h1 className="text-xl font-semibold border border-gray-700 border-opacity-60 rounded-md text-center ">Selected lot details:</h1>
            <p><span className="font-semibold">Location: </span>{selectedLot.address}</p>
            <p><span className="font-semibold">lot #: </span>{selectedLot.lotNum}</p>
            <p><span className="font-semibold">Price: </span>${selectedLot.price.toString().slice(0,3) + "," + selectedLot.price.toString().slice(3,6)}</p>
            <p><span className="font-semibold">Status: </span>{selectedLot.status}</p>
            <p><span className="font-semibold">Community: </span>{selectedLot.community}</p>
        </div>
    )
}