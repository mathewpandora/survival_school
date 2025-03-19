import React from 'react';

const OverlayText = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: "50%",  // Позиционируем текст в нужном месте между блоками
                right: "2%",  // Сдвигаем текст к правой части
                transform: "translateY(-50%) rotate(-20deg)",  // Центрируем по вертикали и наклоняем на -20 градусов
                fontFamily: "Mr. Lonely",
                fontWeight: "400",
                fontSize: "20px",  // Начальный размер текста
                lineHeight: "120%",  // Меньше интервал между строками
                textAlign: "center",
                color: "#C9C9C9",  // Цвет текста
                zIndex: "10",  // Текст будет поверх блоков
                maxWidth: "80%",  // Ограничиваем ширину, чтобы текст не выходил за пределы
            }}
        >
            Каждый шаг делает тебя <br /> сильнее
        </div>
    );
};

export default OverlayText;
