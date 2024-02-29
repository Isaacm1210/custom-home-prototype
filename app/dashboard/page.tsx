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
const defaultModal: ModelDef = {
    name: "",
    URL: d,
    bed: 1,
    bath: 1,
    sqft: 1,
    price: ""
}

export default function Page() {
    const [lot, setLot] = useState<lot>({
        lotNum: 0,
        price: 0,
        status: "Available",
        community: "",
        frontage: 0,
        maxSqFt: 0,
        address: ""
    });
    const [modal, setModal] = useState<ModelDef>(defaultModal);
    const [page, setPage] = useState("Location");

    const changePage = (newPage: string) => {
        setPage(newPage);
    };

    const handleLot = (lotNum: lot) => {
        setLot(lotNum);
        setPage("Modal");
    };
    const handleCommunity = (locationData: number) => {
        // setCommunity(locationData);
        
    };

    const handleModalSelect = (selectedModal: ModelDef) => {
        setModal(selectedModal);
        setPage("Options");
    };


    return (
        <div>
            {lot?.lotNum}
            <NavBar page={page} change={changePage} />
            {page === "Location" ? <Location callBack={handleLot} /> : ""}
            {page === "Modal" ? <Model callBack={handleModalSelect} lot={lot}/> : ""}
            {page === "Options" ? <Options modal={modal}/> : ""}
            {page === "Summary" ? <Summary /> : ""}
        </div>
    );
};