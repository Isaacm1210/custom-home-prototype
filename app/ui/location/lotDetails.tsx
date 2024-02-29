export default function LotDetails({lotNum}:{lotNum: number}){

    if(lotNum === 0){
        return(
            <div>Please Select a lot</div>
        )
    }
    return(
        <div className="w-96 m-auto mt-6">
            <h1 className="text-2xl font-semibold border border-gray-700 text-center ">Details</h1>
            <p>lot #</p>
            <p>Price</p>
            <p>Status</p>
            <p>Community</p>
        </div>
    )
}