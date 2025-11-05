import React, { useState } from "react";
import { locations } from "../utils/utils.js"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Combobox from "@/components/combobox.js";



export const AddPerson = () => {
    const nameFields = [
        { id: "firstname", label: "First Name", required: true },
        { id: "middlename", label: "Middle Name" },
        { id: "lastname", label: "Last Name" },
    ];

    const [governorate, setGov] = useState("")
    const [district, setDistrict] = useState("")



    return (
        <div className="flex items-center justify-center w-full flex-col">

            {/* ---------------- NAMES ---------------- */}
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
            {/* ------------- BIRTHPLACE IN LEBANON ------------  */}

            {/* ------------- GOVERNORATES ------------  */}
            <div className="flex flex-row justify-between gap-6">
                <Combobox list={locations.governorates} listType="Governorate" setValue={setGov} />

                {/* ------------- DISTRICTS ------------  */}
                <Combobox list={locations.districts[governorate] || []} listType="District" setValue={setDistrict} disabled={!governorate} />

            </div>
        </div>
    );
};
