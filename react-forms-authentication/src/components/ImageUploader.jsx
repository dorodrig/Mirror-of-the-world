import React, { useState } from "react";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    document.getElementById("imageInput").click();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <button className="buttonupdate" onClick={handleUploadClick} style={{ padding: "10px 20px", cursor: "pointer" }}>
       Inicia en esta comunidad con tu primera fotografia
      </button>
      {selectedImage && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "100%", maxHeight: "300px", marginTop: "10px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
