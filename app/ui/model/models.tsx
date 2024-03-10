import { models } from "@/models/homeModels"
import { ModelDef } from "@/types/model"
import ModalDisplay from "./modalDisplay"
import { lot } from "@/types/community"
import Image from "next/image"
export default function Models({ callBack, lot }: { callBack: Function, lot: lot }) {
    const handleSelection = (selection: ModelDef) => {
        callBack(selection)
    }
    return (
        <div className="mx-20">
            <div className="m-auto w-7/8 h-full grid grid-cols-3 gap-10 ">
                {models.map((model) => {
                    if (model.sqft > (lot.maxSqFt as number) && lot.lotNum != 0) {
                        return null;
                    }
                    return (
                        <div key={model.name} onClick={() => handleSelection(model)} className="w-full m-auto">
                            <div className="border-4 border-gray-600 rounded-lg border-opacity-0 w-full hover:cursor-pointer hover:border-opacity-50 hover:transition hover:duration-300 duration-300">
                                <ModalDisplay modal={model} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}