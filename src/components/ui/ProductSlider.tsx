/**
 * A slider component for displaying a list of product images with navigation dots.
 *
 * @param props - The props for the ProductSlider component.
 * @param props.images - An array of image URLs to display in the slider.
 * @param props.onImageChange - Optional callback invoked when the displayed image changes.
 *
 * @example
 * ```tsx
 * <ProductSlider
 *   images={["/img1.jpg", "/img2.jpg"]}
 *   onImageChange={(img) => console.log(img)}
 * />
 * ```
 */

import React from "react";

interface ProductSliderProps {
    images: string[];
    onImageChange?: (image: string) => void;
}

export default function PrductSlider(props: ProductSliderProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
    props.onImageChange?.(props.images[index]);
  };


    return (
        <div className="w-full justify-center flex relative">
            <div className="flex justify-center mb-10">
                <img
                    src={props.images[currentIndex]}
                    alt={`Thumbnail ${currentIndex + 1}`}
                    className="w-full max-w-md object-contain"
                />
            </div>
            <div className="absolute bottom-0 left-0 w-full flex justify-center">
                <div className="flex gap-4">
                    {props.images.map(({/*image*/}, index) => (
                        < button 
                            key = { index }
                            className = {`w-5 h-5 rounded-full cursor-pointer ${index === currentIndex ? 'bg-bright-sun-500 animate-bounce' : 'border-2 border-bright-sun-500'} `}
                            onClick = {() => handleClick(index)}
                        >
                    {/*<img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover rounded-full"
                    />*/}
                </button>
                    ))}
                    
            </div>
        </div>
        </div >
    )


}