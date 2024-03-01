import { lot } from "@/types/community";
import { ModelDef } from "@/types/model";
import { options } from "@/types/options";

export default function Summary({lot, modal, options}: {lot: lot, modal: ModelDef, options: options}){
    return(
        <div>
            <p>
                On the Summary Page
                {modal.name}
                {lot.address}
                {options.driveway}
            </p>
        </div>
    )
}