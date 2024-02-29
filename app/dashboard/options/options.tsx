import { ModelDef } from "@/types/model"
import SelectedModal from "@/app/ui/options/selectedModal"
import ModalDisplay from "@/app/ui/model/modalDisplay"
export default function Options({modal} : {modal: ModelDef}){
    return(
        <div className="w-2/4 m-auto">
            <ModalDisplay modal={modal} />
        </div>
    )
}