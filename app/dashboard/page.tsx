"use client";
import Location from "./location/location"
import Model from "./model/model"
import Options from "./options/options"
import Summary from "./summary/summary"
import { useState } from "react"
import { ModelDef } from "@/types/model";
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
    const [community, setCommunity] = useState(0);
    const [modal, setModal] = useState(defaultModal);
    const [page, setPage] = useState("Location");

    const changePage = (newPage: string) => {
        setPage(newPage)
    }

    const handleCommunity = (locationData: number) => {
        setCommunity(locationData);
        setPage("Modal");
    }

    const handleModalSelect = (selectedModal: ModelDef) => {
        setModal(selectedModal);
        setPage("Options");
    };


    return (
        <div>
            {page}
            <NavBar page={page} change={changePage} />
            {page === "Location" ? <Location callBack={handleCommunity} /> : ""}
            {page === "Modal" ? <Model callBack={handleModalSelect} /> : ""}
            {page === "Options" ? <Options modal={modal}/> : ""}
            {page === "summary" ? <Summary /> : ""}
        </div>
    );
};