import React, { useState, useEffect } from 'react';

const ImageGallery = ({ imagesAPI, limit }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`${imagesAPI}?page=1&limit=${limit}`)
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error('Ошибка загрузки изображений:', error));
    }, [imagesAPI, limit]);

    return (
        <div className="w-full px-[5%] overflow-hidden">
            <div className="flex space-x-4 overflow-x-auto">
                {images.length > 0 ? (
                    images.map((image) => (
                        <img
                            key={image.id}
                            src={image.download_url}
                            alt="Image"
                            className="h-[65%] object-cover rounded-[12px]"
                            style={{ width: `${Math.random() * (45 - 30) + 30}vw` }} // Случайная ширина от 30vw до 45vw
                        />
                    ))
                ) : (
                    <p className="text-gray-500">Загрузка изображений...</p>
                )}
            </div>
        </div>
    );
};

export default ImageGallery;
