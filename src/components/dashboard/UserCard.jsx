import React, { useState } from 'react';
import profile from "../../assets/images/profile.png";

/**
 * UserCard Component
 * 
 * This component displays a user profile card with an image upload feature.
 * Users can click on the profile image to upload a new image.
 */
const UserCard = () => {
  const [image, setImage] = useState(profile);

  /**
   * Handle image change event
   * 
   * This function is triggered when the user selects a new image file.
   * It reads the file and sets the image state to display the new image.
   * 
   * @param {object} e - The event object from the file input change event.
   */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="docs-logo flex flex-col items-center text-center p-4 shadow-lg"
      style={{ background: 'linear-gradient(#337ab7, #000000)' }}
    >
      <div className="image-upload">
        <label htmlFor="imgInp" className="cursor-pointer">
          <img
            id="blah"
            src={image}
            className="w-24 h-24 rounded-full mt-5"
            alt="Profile"
          />
        </label>
        <input
          type="file"
          id="imgInp"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
      <h1 className="docs-logotype md-heading mt-5 text-2xl font-bold text-white">
        ARCHAGAR
      </h1>
      <span className="text-white italic text-sm">
        Architect - <span className="text-sm">Agar</span>
      </span>
      <h3 className="docs-logotype md-heading mt-5 text-lg font-semibold text-orange-500"></h3>
      <span className="text-white italic text-sm"></span>
    </div>
  );
};

export default UserCard;
