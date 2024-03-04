import BottomBar from "@/app/ui/summary/bottomBar";
import { lot } from "@/types/community";
import { ModelDef } from "@/types/model";
import { options } from "@/types/options";
import { getGarage, getDriveWay, getTotal } from "@/app/lib/actions";
export default function Summary({ lot, modal, options }: { lot: lot, modal: ModelDef, options: options }) {
    const garage = getGarage(options.garage);
    const driveway = getDriveWay(options.driveway);
    const total = getTotal((lot.price as number), modal.price, garage?.cost, driveway?.cost);
    return (
        <div>
            <h1 className="text-3xl font-semibold w-fit m-auto">Build Summary</h1>
            <div className="w-1/3 border border-gray-700 rounded-md border-opacity-65 shadow-1 my-5 m-auto min-w-[500px] ">
                <div className="px-4 pt-4">
                    <div>
                        <h3 className="text-xl font-medium">Lot</h3>
                        <div className="ml-2 text-left">
                            <p className="w-2/3 flex justify-between">
                                <span className="w-1/2">Address:</span>
                                <span className="w-1/2 text-left">{lot.address}</span>
                            </p>
                            <p className="w-2/3 flex justify-between">
                                <span className="w-1/2">Lot #:</span>
                                <span className="w-1/2 text-left">{lot.lotNum}</span>
                            </p>
                            <p className="w-2/3 flex justify-between">
                                <span className="w-1/2">Frontage:</span>
                                <span className="w-1/2 text-left">{lot.frontage}</span></p>
                            <p className="w-2/3 flex justify-between">
                                <span className="w-1/2">Community:</span>
                                <span className="w-1/2 text-left">{lot.community}</span>
                            </p>
                            <p className="w-2/3 flex justify-between">
                                <span className="w-1/2">Price:</span>
                                <span className="w-1/2 text-left">{"$" + lot.price.toString().slice(0,3) + "," + lot.price.toString().slice(3,6)}</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Modal</h3>
                        <div className="ml-2">
                            <p className="w-2/3 flex justify-between"><span className="w-1/2">Modal #:</span> <span className="w-1/2 text-left">{modal.name}</span></p>
                            <p className="w-2/3 flex justify-between"><span className="w-1/2">Bed:</span> <span className="w-1/2 text-left">{modal.bed}</span></p>
                            <p className="w-2/3 flex justify-between"><span className="w-1/2">Bath:</span> <span className="w-1/2 text-left">{modal.bed}</span></p>
                            <p className="w-2/3 flex justify-between"><span className="w-1/2">SQ ft:</span> <span className="w-1/2 text-left">{modal.sqft}</span></p>
                            <p className="w-2/3 flex justify-between"><span className="w-1/2">Price:</span> <span className="w-1/2 text-left">{"$" + modal.price.toString().slice(0,3) + "," + modal.price.toString().slice(3,6)}</span></p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Options</h3>
                        <div className="ml-2">
                            <p className="w-2/3 flex justify-between"><span className="w-1/2">Garage: </span> <span className="w-1/2 text-left">{garage?.name} {garage?.cost === 0 ? "" : garage?.cost > 0 ? "+$" + garage.cost : "$" + garage.cost}</span></p>
                            <p className="w-2/3 flex justify-between"><span className="w-1/2">Drivew-Way: </span><span className="w-1/2 text-left">{driveway?.name} {driveway?.cost === 0 ? "" : "+$" + driveway?.cost}</span></p>
                            <p className="w-2/3 flex justify-between"><span className="w-1/2">...</span> </p>
                            <p className="w-2/3 flex justify-between"><span className="w-1/2">...</span> </p>
                            <p className="w-2/3 flex justify-between"><span className="w-1/2">...</span> </p>
                        </div>
                    </div>
                </div>
                <BottomBar total={total}/>
            </div>
        </div>
    )
}