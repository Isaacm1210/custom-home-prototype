import Community from "@/app/ui/location/community"
export default function Location({callBack}: any){
    return(
        <div >
            <h1 className="w-72 mx-auto text-2xl text-center font-medium">
                Choose your Community
            </h1>
            <Community callBack={callBack}/>
        </div>
    )
}