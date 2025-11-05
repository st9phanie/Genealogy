import React, { useState } from "react";
import { locations } from "../utils/utils.js"

import Combobox from "@/components/combobox.js";



export const AddPerson = () => {
    const nameFields = [
        { id: "firstname", label: "First Name", required: true },
        { id: "middlename", label: "Middle Name" },
        { id: "lastname", label: "Last Name" },
    ];

    const [governorate, setGov] = useState("")
    const [district, setDistrict] = useState("")
    const [area, setArea] = useState("")

    return (
        <div className="flex items-center justify-center w-full flex-col">

            {/* ---------------------------------- NAMES ------------------------------------------------ */}
            <div className="flex flex-row justify-between gap-6">
                {nameFields.map((field) => (
                    <div key={field.id} className="flex flex-col">
                        <label htmlFor={field.id}>{field.label}</label>
                        <input
                            id={field.id}
                            name={field.id}
                            type="text"
                            required={field.required}
                            className="border border-black rounded px-2 py-1"
                        />
                    </div>
                ))}
            </div>


            {/* ---------------------------------- BIRTHPLACE IN LEBANON ----------------------------------  */}
            {/* ------------- GOVERNORATES ------------  */}
            <div className="flex flex-row justify-between gap-6">
                <div className="flex flex-col justify-between items-start">
                    <p className="text-md font-medium mb-1 ml-1">Governorate</p>
                    <Combobox list={locations.governorates} listType="Governorate" setValue={setGov} />
                </div>


                {/* ------------- DISTRICTS ------------  */}
                <div className="flex flex-col justify-between items-start">
                    <p className="text-md font-medium mb-1 ml-1">District</p>
                    <Combobox list={locations.districts[governorate] || []} listType="District" setValue={setDistrict} disabled={!governorate} />
                </div>

                {/* ------------- AREAS ------------  */}
                <div className="flex flex-col justify-between items-start">
                    <p className="text-md font-medium mb-1 ml-1">Area</p>
                    <Combobox list={locations.areas[district] || []} listType="Area" setValue={setArea} disabled={!district} />
                </div>
            </div>
        </div>
    );
};
