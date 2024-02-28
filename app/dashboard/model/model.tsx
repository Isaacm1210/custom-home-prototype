import Models from "@/app/ui/model/models"
export default function Model({callBack}: any){
    return(
        <div className="w-full h-full pb-5">
            <h2>Select Your Model</h2>
            <Models callBack={callBack} />
        </div>
    )
}