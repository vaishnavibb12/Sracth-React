import React from "react";

function CategorySelect({ value, onChange, showError }) {
  return (
    <>
      <select name="category" value={value} onChange={onChange}>
        <option value="">-- Select Category --</option>
        <option value="pipes">Pipes</option>
        <option value="tubes">Tubes</option>
        <option value="fittings">Fittings</option>
      </select>
      {showError && value === "" && (
        <div className="reqiure">Category is required</div>
      )}
    </>
  );
}

export default CategorySelect;
