import Navlinks from "./navlinks"
export default function NavBar({ page, change}: {page: string, change: any}){
    return(
        <div className="w-1/2 mx-auto my-10">
            <Navlinks page={page} change={change}/>
        </div>
    )
}