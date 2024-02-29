import Community from "@/app/ui/location/community"
import Lot from "@/app/ui/location/lot"
export default function Location({callBack}: any){
    return(
        <div >
            <h1 className="w-72 mx-auto text-2xl text-center font-medium">
                Choose Your Lot
            </h1>
            <Lot />
            {/* <Community callBack={callBack}/> */}
        </div>
    )
}