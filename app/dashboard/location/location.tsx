import Community from "@/app/ui/location/community"
import Lot from "@/app/ui/location/lot"
export default function Location({callBack}: {callBack: Function}){
    return(
        <div >
            <h1 className="w-72 mx-auto text-2xl text-center font-medium">
                Choose Your Lot
            </h1>
            <Lot handleLot={callBack}/>
            {/* <Community callBack={callBack}/> */}
        </div>
    )
}