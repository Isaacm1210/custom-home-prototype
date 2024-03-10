import { ModelDef } from "@/types/model"
import Image from "next/image"
export default function ModalDisplay({ modal}: { modal: ModelDef}) {
    return (
        <div className="border border-gray-600 rounded-lg border-opacity-15 w-full m-auto relative p-5">
            <div >
            <div className="w-full h-96 relative overflow-hidden rounded-lg p-4" >
                <Image src={modal.URL} alt={modal.name} fill objectFit="cover" sizes="(max-width:600px) 90vw" />
            </div>
            <h1 className="font-semibold text-2xl">{modal.name}</h1>
            <div className="text-gray-950 text-opacity-70">
                <h2 className="text-xl font-medium text-gray-950 text-opacity-70">From {"$" + modal.price.toString().slice(0,3) + "," + modal.price.toString().slice(3,6)}</h2>
                <div className="w-full flex justify-start font-semibold mt-2 gap-9">
                    <div className="w-11 h-5 flex justify-evenly">
                        <span>{modal.bed}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                            {/* <--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                        </svg>
                    </div>
                    <div className="w-14 h-5 flex justify-evenly">
                        <span>{modal.bath}</span>
                        <div className="w-5 h-6 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                <path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-max h-5">
                        {modal.sqft + " sqft"}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}