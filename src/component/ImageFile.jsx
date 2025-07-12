
import React from "react";

function ImageFile({ value, onChange }) {
  return (
    <div className="image-upload">
      <input
        type="file"
        name="file"
        accept=".pdf,.doc,.docx,.jpg,.png"
        onChange={onChange}
      />
      {value && (
        <p style={{ fontSize: "12px", marginTop: "5px" }}>
          Selected file: <strong>{value.name}</strong>
        </p>
      )}
    </div>
  );
}

export default ImageFile;
