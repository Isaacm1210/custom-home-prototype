export default function BottomBar({total}: {total:number}){
    const format = (total: number) => {
        if(total.toString().length === 7){
           return "$" + total.toString().slice(0,1) + "," + total.toString().slice(1,4) +  "," + total.toString().slice(4,7) + ".00"
        }
         return "$" + total.toString().slice(0,3) + "," + total.toString().slice(3,6) + ".00"
    }
    return (
        <div className="w-full h-16 flex items-center border-t border-gray-700 border-opacity-60 mt-5 p-4">
            <p className="text-xl font-semibold">Estimated Total Price: {format(total)}</p>
        </div>
    )
}