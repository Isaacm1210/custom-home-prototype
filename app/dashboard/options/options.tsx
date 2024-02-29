import { ModelDef } from "@/types/model"
import SelectedModal from "@/app/ui/options/selectedModal"
export default function Options({modal} : {modal: ModelDef}){
    return(
        <div>
            <SelectedModal modal={modal}/>
        </div>
    )
}