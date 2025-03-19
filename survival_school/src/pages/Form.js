import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = ({ sendDataToBackend }) => {
    const navigate = useNavigate();

    // Состояние для данных предыдущей формы (Questions)
    const [previousAnswers, setPreviousAnswers] = useState({});

    // Состояние для текущей формы
    const [answersForm, setAnswersForm] = useState({
        reasons: "",
        expectations: "",
        team_experience: "",
        teamwork: "",
        physical_training: "1",
        health_problems: "",
        hike_experience: "",
        priorities: "",
        curation: "",
        rejection: "",
        organization: "",
    });

    const [error, setError] = useState("");

    // Считываем данные предыдущей формы из localStorage
    useEffect(() => {
        const data = localStorage.getItem("answers");
        if (data) {
            setPreviousAnswers(JSON.parse(data));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswersForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleBack = () => {
        navigate("/apply");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Проверяем, что все поля заполнены
        const emptyFields = Object.keys(answersForm).filter(
            (key) => answersForm[key].trim() === ""
        );
        if (emptyFields.length > 0) {
            setError("Заполните все поля");
            return;
        }
        setError("");
        // Объединяем данные предыдущей формы с данными текущей
        const fullData = { ...previousAnswers, ...answersForm };
        console.log("Объединенные данные:", JSON.stringify(fullData, null, 2));
        if (sendDataToBackend) {
            sendDataToBackend(fullData);
        }
        // Можно перейти на другую страницу или выполнить другой редирект:
        // navigate("/some-route");
    };

    return (
        <div className="relative min-h-screen bg-black">
            {/* Фиксированный задний фон */}
            <div className="fixed inset-0">
                <img
                    src={"back.svg"}
                    alt="background"
                    className="w-full h-full object-cover opacity-25 pointer-events-none"
                />
            </div>
            {/* Прокручиваемое содержимое */}
            <div className="relative z-10">
                <div className="max-w-3xl mx-auto px-6 py-10">
                    <h2 className="text-4xl font-bold text-white mb-6 text-center">
                        Ответь на вопросы ниже
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="reasons" className="block text-lg font-semibold text-white">
                                1. Назови причину, почему ты решил подать анкету на Школу Выживания?
                            </label>
                            <textarea
                                id="reasons"
                                name="reasons"
                                value={answersForm.reasons}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg bg-white text-black resize-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="expectations" className="block text-lg font-semibold text-white">
                                2. Как ты представляешь себе этот проект? Какие есть ожидания от него?
                            </label>
                            <textarea
                                id="expectations"
                                name="expectations"
                                value={answersForm.expectations}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg bg-white text-black resize-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="team_experience" className="block text-lg font-semibold text-white">
                                3. Опиши свой опыт работы в команде
                            </label>
                            <textarea
                                id="team_experience"
                                name="team_experience"
                                value={answersForm.team_experience}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg bg-white text-black resize-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="teamwork" className="block text-lg font-semibold text-white">
                                4. Что для тебя важно при работе в команде и что недопустимо?
                            </label>
                            <textarea
                                id="teamwork"
                                name="teamwork"
                                value={answersForm.teamwork}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg bg-white text-black resize-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="physical_training" className="block text-lg font-semibold text-white">
                                5. Оцени свою физическую подготовку (от 1 до 10)
                            </label>
                            <input
                                type="range"
                                id="physical_training"
                                name="physical_training"
                                min="1"
                                max="10"
                                value={answersForm.physical_training}
                                onChange={handleChange}
                                className="slider"
                            />
                            <output className="text-white">{answersForm.physical_training}</output>
                        </div>
                        <div>
                            <label htmlFor="health_problems" className="block text-lg font-semibold text-white">
                                6. Есть ли у тебя какие-либо проблемы со здоровьем?
                            </label>
                            <textarea
                                id="health_problems"
                                name="health_problems"
                                value={answersForm.health_problems}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg bg-white text-black resize-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="hike_experience" className="block text-lg font-semibold text-white">
                                7. Есть ли у тебя походный опыт? Если да, опиши его.
                            </label>
                            <textarea
                                id="hike_experience"
                                name="hike_experience"
                                value={answersForm.hike_experience}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg bg-white text-black resize-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="priorities" className="block text-lg font-semibold text-white">
                                8. Представь, что ты стал/а участником проекта, расставь по приоритетам всю свою
                                активность (учеба, хобби, проекты, работа и т.д.)
                            </label>
                            <textarea
                                id="priorities"
                                name="priorities"
                                value={answersForm.priorities}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg bg-white text-black resize-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="curation" className="block text-lg font-semibold text-white">
                                9. Проходишь ли ты сейчас отбор на кураторство?
                            </label>
                            <textarea
                                id="curation"
                                name="curation"
                                value={answersForm.curation}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg bg-white text-black resize-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="rejection" className="block text-lg font-semibold text-white">
                                10. Что тебя может заставить отказаться от участия в Школе Выживания?
                            </label>
                            <textarea
                                id="rejection"
                                name="rejection"
                                value={answersForm.rejection}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg bg-white text-black resize-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="organization" className="block text-lg font-semibold text-white">
                                11. Если бы ты организовывал/а свою собственную Школу Выживания, что бы там было?
                            </label>
                            <textarea
                                id="organization"
                                name="organization"
                                value={answersForm.organization}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg bg-white text-black resize-none"
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <div className="flex justify-between">
                            <button type="button" onClick={handleBack} className="text-white">
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
