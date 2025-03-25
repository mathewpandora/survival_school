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
        <div className="w-full overflow-hidden">
            <div className="flex space-x-2 lg:space-x-6 overflow-x-auto">
                {images.length > 0 ? (
                    images.map((image) => (
                        <img
                            key={image.id}
                            src={image.image}
                            alt="Gallery Image"
                            className="lg:h-[80%] lg:w-[50vw] object-cover rounded-[20px] md:rounded-[40px] lg:rounded-[50px]"
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