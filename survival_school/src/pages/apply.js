import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Questions = () => {
    const [answers, setAnswers] = useState({
        name: "",
        university: "",
        high_school: "",
        passport_series: "",
        passport_number: "",
        group_number: "",
        vk: "",
        phone_number: "",
        icon: null,
    });
    const [showRHEUFields, setShowRHEUFields] = useState(false);
    const [errors, setErrors] = useState({});
    const passportNumberRef = useRef(null);
    const navigate = useNavigate();

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setAnswers((prev) => ({ ...prev, icon: file }));
    };

    const handleAnswerChange = (e) => {
        const { name, value } = e.target;
        setAnswers((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));

        if (name === "passport_series" && value.length === 4) {
            passportNumberRef.current?.focus();
        }
    };

    const handleUniversityChange = (e) => {
        const value = e.target.value;
        setAnswers((prev) => ({ ...prev, university: value, high_school: "" }));
        setShowRHEUFields(value === "РЭУ");
    };

    const validateVKLink = (link) => {
        return (
            link.startsWith("https://vk.com/") ||
            link.startsWith("http://vk.com/") ||
            link.startsWith("vk.com/") ||
            link.startsWith("https://m.vk.com/") ||
            link.startsWith("m.vk.com/")
        );
    };

    const validatePhoneNumber = (number) => {
        return /^\+7\d{10}$/.test(number);
    };

    const handleSubmit = () => {
        const newErrors = {};
        if (answers.name.trim() === "") newErrors.name = "Заполните ФИО";
        if (answers.university.trim() === "") newErrors.university = "Выберите ВУЗ";
        if (answers.group_number.trim() === "")
            newErrors.group_number = "Заполните номер группы";
        if (showRHEUFields && answers.high_school.trim() === "")
            newErrors.high_school = "Выберите Высшую Школу";

        if (answers.university.trim() !== "РЭУ") {
            if (
                answers.passport_series.trim().length !== 4 ||
                answers.passport_number.trim().length !== 6
            ) {
                newErrors.passport = "Проверьте паспортные данные";
            }
        }

        if (!validateVKLink(answers.vk))
            newErrors.vk = "Введите корректную ссылку на ВК";
        if (!validatePhoneNumber(answers.phone_number))
            newErrors.phone_number =
                "Введите корректный номер телефона (+7XXXXXXXXXX)";
        if (!answers.icon) newErrors.icon = "Загрузите фотографию";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Сохраненные данные:", JSON.stringify(answers, null, 2));
            // Редирект на /form, если ошибок нет:
            navigate("/form");
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
                        АНКЕТА УЧАСТНИКА
                    </h2>
                    <div className="space-y-6">
                        {/* ФИО */}
                        <div className="space-y-2">
                            <label className="block text-lg font-semibold text-white">ФИО:</label>
                            <input
                                type="text"
                                name="name"
                                value={answers.name}
                                onChange={handleAnswerChange}
                                className={`w-full px-4 py-2 border rounded-lg bg-white text-black ${
                                    errors.name ? "border-red-500" : ""
                                }`}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        {/* ВУЗ */}
                        <div className="space-y-2">
                            <label className="block text-lg font-semibold text-white">ВУЗ:</label>
                            <select
                                name="university"
                                value={answers.university}
                                onChange={handleUniversityChange}
                                className={`w-full px-4 py-2 border rounded-lg bg-white text-black ${
                                    errors.university ? "border-red-500" : ""
                                }`}
                            >
                                <option value="">Выберите ВУЗ</option>
                                <option value="РЭУ">РЭУ</option>
                                <option value="РАНХиГС">РАНХиГС</option>
                                <option value="ГУУ">ГУУ</option>
                                <option value="РГУ им. Косыгина">РГУ им. Косыгина</option>
                                <option value="Финансовый Университет">Финансовый Университет</option>
                            </select>
                            {errors.university && (
                                <p className="text-red-500 text-sm">{errors.university}</p>
                            )}
                        </div>
                        {/* Высшая школа */}
                        {showRHEUFields && (
                            <div className="space-y-2">
                                <label className="block text-lg font-semibold text-white">
                                    Выберите Высшую Школу:
                                </label>
                                <select
                                    name="high_school"
                                    value={answers.high_school}
                                    onChange={handleAnswerChange}
                                    className={`w-full px-4 py-2 border rounded-lg bg-white text-black ${
                                        errors.high_school ? "border-red-500" : ""
                                    }`}
                                >
                                    <option value="">Выберите Высшую Школу</option>
                                    <option value="ВШКМиС">ВШКМиС</option>
                                    <option value="ВШЭиБ">ВШЭиБ</option>
                                    <option value="ВШКИ">ВШКИ</option>
                                    <option value="ВШП">ВШП</option>
                                    <option value="ВШМ">ВШМ</option>
                                    <option value="ИПАМ">ИПАМ</option>
                                    <option value="ФБ “Капитаны”">ФБ “Капитаны”</option>
                                    <option value="СФТМ “ВШ Форсайт”">СФТМ “ВШ Форсайт”</option>
                                    <option value="ВШСГН">ВШСГН</option>
                                    <option value="ФПШБ “Интеграл”">ФПШБ “Интеграл”</option>
                                    <option value="ВИШ “НМиТ”">ВИШ “НМиТ”</option>
                                </select>
                                {errors.high_school && (
                                    <p className="text-red-500 text-sm">{errors.high_school}</p>
                                )}
                            </div>
                        )}
                        {/* Паспортные данные */}
                        {!showRHEUFields && (
                            <div className="space-y-2">
                                <label className="block text-lg font-semibold text-white">
                                    Паспортные данные:
                                </label>
                                <div className="flex space-x-4">
                                    <input
                                        type="text"
                                        name="passport_series"
                                        value={answers.passport_series}
                                        onChange={handleAnswerChange}
                                        className={`w-full px-4 py-2 border rounded-lg bg-white text-black ${
                                            errors.passport ? "border-red-500" : ""
                                        }`}
                                        maxLength="4"
                                        placeholder="Серия"
                                    />
                                    <input
                                        ref={passportNumberRef}
                                        type="text"
                                        name="passport_number"
                                        value={answers.passport_number}
                                        onChange={handleAnswerChange}
                                        className={`w-full px-4 py-2 border rounded-lg bg-white text-black ${
                                            errors.passport ? "border-red-500" : ""
                                        }`}
                                        maxLength="6"
                                        placeholder="Номер"
                                    />
                                </div>
                                {errors.passport && (
                                    <p className="text-red-500 text-sm">{errors.passport}</p>
                                )}
                            </div>
                        )}
                        {/* Номер группы */}
                        <div className="space-y-2">
                            <label className="block text-lg font-semibold text-white">
                                Номер группы:
                            </label>
                            <input
                                type="text"
                                name="group_number"
                                value={answers.group_number}
                                onChange={handleAnswerChange}
                                className={`w-full px-4 py-2 border rounded-lg bg-white text-black ${
                                    errors.group_number ? "border-red-500" : ""
                                }`}
                            />
                            {errors.group_number && (
                                <p className="text-red-500 text-sm">{errors.group_number}</p>
                            )}
                        </div>
                        {/* Ссылка на VK */}
                        <div className="space-y-2">
                            <label className="block text-lg font-semibold text-white">
                                Ссылка на VK:
                            </label>
                            <input
                                type="text"
                                name="vk"
                                value={answers.vk}
                                onChange={handleAnswerChange}
                                className={`w-full px-4 py-2 border rounded-lg bg-white text-black ${
                                    errors.vk ? "border-red-500" : ""
                                }`}
                            />
                            {errors.vk && <p className="text-red-500 text-sm">{errors.vk}</p>}
                        </div>
                        {/* Номер телефона */}
                        <div className="space-y-2">
                            <label className="block text-lg font-semibold text-white">
                                Номер телефона:
                            </label>
                            <input
                                type="tel"
                                name="phone_number"
                                value={answers.phone_number}
                                onChange={handleAnswerChange}
                                className={`w-full px-4 py-2 border rounded-lg bg-white text-black ${
                                    errors.phone_number ? "border-red-500" : ""
                                }`}
                                placeholder="+7XXXXXXXXXX"
                            />
                            {errors.phone_number && (
                                <p className="text-red-500 text-sm">{errors.phone_number}</p>
                            )}
                        </div>
                        {/* Фото */}
                        <div className="space-y-2">
                            <label className="block text-lg font-semibold text-white">Фото:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoChange}
                                className={`w-full px-4 py-2 border rounded-lg bg-white text-black ${
                                    errors.icon ? "border-red-500" : ""
                                }`}
                            />
                            {errors.icon && (
                                <p className="text-red-500 text-sm">{errors.icon}</p>
                            )}
                        </div>
                        {/* Кнопка "Далее" */}
                        <button
                            onClick={handleSubmit}
                            className="w-full px-6 py-3 bg-transparent border border-white text-white text-lg font-semibold rounded-lg shadow-md hover:bg-white hover:text-black focus:outline-none"
                        >
                            Далее
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
