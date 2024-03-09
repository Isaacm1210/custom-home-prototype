'use client';
import clsx from 'clsx';

export default function Navlinks({ page, change }: { page: string, change: Function }) {

    return (
        <div className="flex justify-evenly">
            <div className={clsx("hover:cursor-pointer", { "text-green-700": page === "Location" })} key={"Location"} onClick={() => { change("Location") }}>
                <div className="w-7 h-7 m-auto border rounded border-gray-700 flex justify-center border-opacity-30" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt-fill m-auto" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>
                </div>
                <p>{"Location"}</p>
            </div>
            <div className={clsx("hover:cursor-pointer", { "text-green-700": page === "Modal" })} key={"Modal"} onClick={() => { change("Modal") }}>
                <div className="w-7 h-7 m-auto border rounded border-gray-700 flex justify-center border-opacity-30" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door m-auto" viewBox="0 0 16 16">
                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                    </svg>
                </div>
                <p>{"Modal"}</p>
            </div>
            <div className={clsx("hover:cursor-pointer", { "text-green-700": page === "Options" })} key={"Options"} onClick={() => { change("Options") }}>
                <div className="w-7 h-7 m-auto border rounded border-gray-700 flex justify-center border-opacity-30" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square m-auto" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg>
                </div>
                <p>{"Options"}</p>
            </div>
            <div className={clsx("hover:cursor-pointer", { "text-green-700": page === "Summary" })} key={"Summary"} onClick={() => { change("Summary") }}>
                <div className="w-7 h-7 m-auto border rounded border-gray-700 flex justify-center border-opacity-30" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check2-square m-auto" viewBox="0 0 16 16">
                        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                    </svg>
                </div>
                <p>{"Summary"}</p>
            </div>
        </div>
    )
}