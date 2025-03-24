import React, { useState, useEffect } from 'react';

const ImageGallery = ({ imagesAPI }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(imagesAPI)
            .then(response => response.json())
            .then(data => {
                const formattedImages = Array.isArray(data) ? data : [data];
                setImages(formattedImages);
            })
            .catch(error => console.error('Ошибка загрузки изображений:', error));
    }, [imagesAPI]);

    return (
        <div className="w-full px-[5%] overflow-hidden">
            <div className="flex space-x-4 overflow-x-auto">
                {images.length > 0 ? (
                    images.map((image) => (
                        <img
                            key={image.id}
                            src={image.image}
                            alt="Gallery Image"
                            className="h-[80%] object-cover rounded-[12px]"
                            style={{ width: `${Math.random() * (60 - 40) + 40}vw` }} // Увеличенные размеры от 40vw до 60vw
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
