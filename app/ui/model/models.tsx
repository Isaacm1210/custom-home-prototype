import { models } from "@/models/homeModels"
import { ModelDef } from "@/types/model"
import ModalDisplay from "./modalDisplay"
import { lot } from "@/types/community"
import Image from "next/image"
export default function Models({callBack, lot}: {callBack: Function, lot: lot}) {
    const handleSelection = (selection: ModelDef) => {
        callBack(selection)
    }
    return (
        <div className="w-full h-full grid grid-cols-2 gap-3">
            {models.map((model, index) => {
                if(model.sqft > (lot.maxSqFt as number) && lot.lotNum != 0){
                    return null;
                }
                return (
                    <div key={model.name} onClick={() => handleSelection(model)} className="w-4/5 m-auto">
                        <ModalDisplay modal={model}/>
                    </div>
                )
            })}
        </div>
    )
}