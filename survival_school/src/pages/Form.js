import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";

const UserForm = () => {
    const { formData, setFormData } = useContext(FormContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const fieldQuestions = {
        reasons: "Назови причину, почему ты решил подать анкету на Школу Выживания?",
        expectations: "Как ты представляешь себе этот проект? Какие есть ожидания от него?",
        team_experience: "Опиши свой опыт работы в команде:",
        teamwork: "Что для тебя важно при работе в команде и что недопустимо?",
        physical_training: "Оцени свою физическую подготовку (от 1 до 10)",
        health_problems: "Есть ли у тебя какие-либо проблемы со здоровьем?",
        hike_experience: "Есть ли у тебя походный опыт? Если да, опиши его.",
        priorities: "Представь, что ты стал/а участником проекта, расставь по приоритетам всю свою активность (учеба, хобби, проекты, работа и т. д.)",
        curation: "Проходишь ли ты сейчас отбор на кураторство? Если да, то напиши, как будешь совмещать его с ШВ.",
        rejection: "Что тебя может заставить отказаться от участия в Школе Выживания?",
        team_qualities: "Опиши 3 своих качества, которые могут помочь команде, и 3 качества, которые, наоборот, могут ей помешать",
        unusual_dish: "Какое необычное блюдо ты бы хотел приготовить на ШВ?",
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleBack = () => {
        navigate("/apply");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emptyFields = Object.keys(fieldQuestions).filter(
            key => !formData[key]?.toString().trim()
        );

        if (emptyFields.length > 0) {
            setError("Заполните все поля");
            return;
        }
        setError("");

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (value !== null && value !== undefined) {
                    formDataToSend.append(key, value);
                }
            });

            const response = await fetch("https://shv-back.itc-hub.ru/api/v1/form", {
                method: "POST",
                body: formDataToSend,
            });

            const responseData = await response.json();

            if (!response.ok) {
                // Проверяем наличие ошибок о существующей анкете
                if (responseData.vk || responseData.phone_number) {
                    let errorMessage = "Ошибка при создании анкеты:\n";

                    if (responseData.vk) {
                        errorMessage += `- ${responseData.vk[0]}\n`;
                    }
                    if (responseData.phone_number) {
                        errorMessage += `- ${responseData.phone_number[0]}\n`;
                    }

                    alert(errorMessage);
                    throw new Error("Анкета с такими данными уже существует");
                }
                throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
            }

            setSuccess("Данные успешно отправлены!");
            alert("Данные успешно отправлены!");
        } catch (err) {
            console.error("Ошибка при отправке данных:", err);

            // Не показываем дублирующее сообщение, если уже был alert
            if (!err.message.includes("Анкета с такими данными уже существует")) {
                setError("Ошибка отправки данных. Попробуйте ещё раз.");
                alert("Ошибка отправки данных. Попробуйте ещё раз.");
            }
        }
    };

    return (
        <div className="relative min-h-screen bg-black">
            <div className="fixed inset-0">
                <img
                    src="back.svg"
                    alt="background"
                    className="w-full h-full object-cover opacity-25 pointer-events-none"
                />
            </div>
            <div className="relative z-10">
                <div className="max-w-3xl mx-auto px-6 py-10">
                    <h2 className="text-4xl font-bold text-white mb-6 text-center">
                        Ответьте на вопросы ниже
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {Object.keys(fieldQuestions).map((key, index) => (
                            <div key={index}>
                                <label htmlFor={key} className="block text-lg font-semibold text-white">
                                    {index + 1}. {fieldQuestions[key]}
                                </label>
                                {key === "physical_training" ? (
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="range"
                                            id={key}
                                            name={key}
                                            min="1"
                                            max="10"
                                            value={formData[key] || "5"}
                                            onChange={handleChange}
                                            className="w-full"
                                        />
                                        <span className="text-white font-semibold">{formData[key] || "5"}</span>
                                    </div>
                                ) : (
                                    <textarea
                                        id={key}
                                        name={key}
                                        value={formData[key] || ""}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 border rounded-lg bg-white text-black resize-none"
                                    />
                                )}
                            </div>
                        ))}
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        {success && <p className="text-green-500 text-sm">{success}</p>}
                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="px-6 py-3 bg-transparent border border-white text-white text-lg font-semibold rounded-lg shadow-md hover:bg-white hover:text-black focus:outline-none"
                            >
                                Назад
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-transparent border border-white text-white text-lg font-semibold rounded-lg shadow-md hover:bg-white hover:text-black focus:outline-none"
                            >
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserForm;