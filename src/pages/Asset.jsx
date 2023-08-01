import React from "react";
import './Asset.css'
const Asset = () => {
  return (
    <div>
      {" "}
      <div className="form-container">
        <div className="input-container">
          <div className="dropdown-container">
            <label htmlFor="buildingDropdown">Building:</label>
            <select id="buildingDropdown">
              <option value="building1">Building 1</option>
              <option value="building2">Building 2</option>
              <option value="building3">Building 3</option>
            </select>
          </div>
          <div className="textbox-container">
            <label htmlFor="nameTextbox">Name</label>
            <input type="text" id="nameTextbox" />

            <label htmlFor="firstLocationTextbox">Location</label>
            <input type="text" id="firstLocationTextbox" />

            <label htmlFor="secondLocationTextbox">Specification</label>
            <input type="text" id="secondLocationTextbox" />
          </div>
        </div>
        <div className="button-container">
          <button>Create Asset</button>
        </div>
      </div>
    </div>
  );
};

export default Asset;
