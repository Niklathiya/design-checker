import React, { useState } from 'react'
import "./App.css"
import {image as IMAGE} from "./image"

const DesignChecker = () => {
    const tshirt = [
        {tshirt_img: IMAGE.Frontbiege},
        {tshirt_img: IMAGE.Frontblack},
        {tshirt_img: IMAGE.Frontcoffee},
        {tshirt_img: IMAGE.Frontcyan},
        {tshirt_img: IMAGE.Frontelectricblue},
        {tshirt_img: IMAGE.Frontgreen},
        {tshirt_img: IMAGE.Frontlavender},
        {tshirt_img: IMAGE.Frontlimeyellow},
        {tshirt_img: IMAGE.Frontmaroon},
        {tshirt_img: IMAGE.Frontmintgreen},
        {tshirt_img: IMAGE.Frontolive},
        {tshirt_img: IMAGE.Frontroyalblue},
        {tshirt_img: IMAGE.Frontsagegreen},
        {tshirt_img: IMAGE.Frontwhite},
    ]
    const [uploadedImage, setUploadedImage] = useState(null);
    const [overlaySize, setOverlaySize] = useState(30);
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setUploadedImage(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleSizeChange = (event) => {
        setOverlaySize(event.target.value);
      };


  return (
    <>
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <div>
                <label htmlFor="sizeRange">Overlay Size: {overlaySize}%</label>
                <input
                type="range"
                id="sizeRange"
                min="10"
                max="80"
                value={overlaySize}
                onChange={handleSizeChange}
                />
            </div>
            <div className="tshirt-container">
                {tshirt.map((tshirt) => (
                <div key={tshirt.id} className="tshirt-mockup">
                    <img src={tshirt.tshirt_img} alt="T-shirt" className="tshirt-image" />
                    {uploadedImage && (
                    <img
                        src={uploadedImage}
                        alt="Uploaded design"
                        className="overlay-image"
                        style={{ width: `${overlaySize}%`, height: `${overlaySize}%` }}
                    />
                    )}
                </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default DesignChecker
