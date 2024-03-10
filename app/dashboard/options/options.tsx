import { ModelDef } from "@/types/model"
import ModalDisplay from "@/app/ui/model/modalDisplay"
import InteriorOptions from "@/app/ui/options/interiorOptions"
import ExteriorOptions from "@/app/ui/options/exteriorOptions"
import { lot } from "@/types/community"
import { useState } from "react"
import Save from "@/app/ui/options/save"

export default function Options({ modal, lot, handleSave }: { modal: ModelDef, lot: lot, handleSave: Function }) {
    const [ garage, setGarage ] = useState(2)
    const [driveway, setDriveway ] = useState(2)

    return (
        <div className="mb-40">
            <h1 className="w-72 mx-auto my-5 text-3xl text-center font-semibold">
                Build Options
            </h1>
            <div className="w-2/4 m-auto">
                <ModalDisplay modal={modal} />
            </div>
            {/* <InteriorOptions /> */}
            <ExteriorOptions lot={lot} setGarage={setGarage} setDriveway={setDriveway} />
            <Save modal={modal} garage={garage} driveway={driveway} handleSave={handleSave}/>
        </div>
    )
}