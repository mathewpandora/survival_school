// src/context/FormContext.js
import { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        // Основные данные (из Questions)
        name: "",
        university: "",
        high_school: "",
        passport_series: "",
        passport_number: "",
        group_number: "",
        vk: "",
        telegram: "@",
        google_email: "",
        phone_number: "",
        icon: null,
        // Данные формы (из UserForm)
        reasons: "",
        expectations: "",
        team_experience: "",
        teamwork: "",
        physical_training: "5",
        health_problems: "",
        hike_experience: "",
        priorities: "",
        curation: "",
        rejection: "",
        team_qualities: "",
        unusual_dish: "",
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};