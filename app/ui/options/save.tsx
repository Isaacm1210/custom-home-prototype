import { ModelDef } from "@/types/model";

export default function Save({modal, garage, driveway, handleSave}: {modal: ModelDef, garage: number, driveway: number, handleSave: Function}){
    return (
        <div className="w-full fixed bottom-0  h-18 bg-white flex justify-between items-center shadow-1">
            {garage}
            {driveway}
            <p className="ml-20 text-xl font font-medium text-gray-800">Starting From {modal.price}</p>
            <button className="mr-20 h-14 border border-orange-400 px-3 rounded-md bg-orange-400 font-medium" onClick={() => handleSave(garage, driveway)}>Save and View Summary</button>
        </div>
    )
}