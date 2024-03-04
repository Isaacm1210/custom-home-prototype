import { ModelDef } from "@/types/model";
import Models from "../ui/model/models";
import { Community } from "@/types/community";

export const getGarage = (garageNum: number) => {
    switch(garageNum){
        case 1 :
            return  {
                    cost: -15000,
                    name: "Single Car"
                    };
        case 2 :
            return {
                cost: 0,
                name: "Standard (Double Car)"
                };
        case 3:
            return {
                cost: 15000,
                name: "Triple Car"
                };
    }
    return {
        cost: 0,
        name: "Standard (Double Car)"
        };
}

export const getDriveWay = (drivewayNum: number) => {
    switch(drivewayNum){
        case 1 :
            return  {
                    cost: 5000,
                    name: "Brick"
                    };
        case 2 :
            return {
                cost: 0,
                name: "Concrete (Standard)"
                };
        case 3:
            return {
                cost: 4500,
                name: "Asphalt"
                };
    }
    return {
        cost: 0,
        name: "Concrete (Standard)"
        };
}

export const getTotal = (lotCost: number, modalCost: number, garageCost: number, drivewayCost: number) => {

    return lotCost + modalCost + garageCost + drivewayCost;
}