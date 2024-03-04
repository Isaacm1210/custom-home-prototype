"use client";
import Location from "./location/location"
import Model from "./model/model"
import Options from "./options/options"
import Summary from "./summary/summary"
import { useState } from "react"
import { ModelDef } from "@/types/model";
import { lot } from "@/types/community";
import d from "@/public/homemodels/model1.png"
import NavBar from "../ui/dashboard/navbar"
import { options } from "@/types/options";
import { garageTypes, drivewayTypes } from "@/models/options";
const defaultModal: ModelDef = {
    name: "",
    URL: d,
    bed: 1,
    bath: 1,
    sqft: 1,
    price: 0
}

export default function Page() {
    const [lot, setLot] = useState<lot>({
        lotNum: "N/A",
        price: "N/A",
        status: "N/A",
        community: "N/A",
        frontage: "N/A",
        maxSqFt: "N/A",
        address: "N/A"
    });
    const [modal, setModal] = useState<ModelDef>(defaultModal);
    const [page, setPage] = useState("Location");
    const [ options, setOptions ] = useState<options>({garage: 2, driveway: 2})
    const changePage = (newPage: string) => {
        setPage(newPage);
    };

    const handleLot = (lotNum: lot) => {
        setLot(lotNum);
        setPage("Modal");
    };

    const handleModalSelect = (selectedModal: ModelDef) => {
        setModal(selectedModal);
        setPage("Options");
    };

    const handleOptionSave = (garage: number, driveway: number) => {
        setOptions({garage, driveway});
        setPage("Summary");
    }


    return (
        <div className="min-w-[720px]">
            <NavBar page={page} change={changePage} />
            {page === "Location" ? <Location callBack={handleLot} /> : ""}
            {page === "Modal" ? <Model callBack={handleModalSelect} lot={lot}/> : ""}
            {page === "Options" ? <Options modal={modal} lot={lot} handleSave={handleOptionSave}/> : ""}
            {page === "Summary" ? <Summary lot={lot} modal={modal} options={options} /> : ""}
        </div>
    );
};