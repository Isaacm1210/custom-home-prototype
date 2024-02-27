import Location from "./location/location"
import Model from "./model/model"
import Options from "./options/options"
import Summary from "./summary/summary"
export default function Page(){
    
    return (
    <div>
        <Location />
        <Model />
        <Options />
        <Summary />
    </div>
    )
}