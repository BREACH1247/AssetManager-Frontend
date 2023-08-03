import React, { useState } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:3000" + "/assetCreation";

const Asset = () => {
  const [name, setName] = useState('');
  const [specification, setSpecification] = useState('');
  const [description, setDescription] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState('');

  const buildings = ["LMP", "Atrium", "Villa Verde", "Vividha", "Quarkcity Energy"];

  const handleSubmit = (event) => {
    event.preventDefault();

    // Process form data or submit to an API
    console.log({
      name,
      specification,
      description,
      selectedBuilding
    });

    const body = {
      name: name, 
      buildingType : selectedBuilding,
      specification: specification,
      description: description,
    }
    console.log(body);

    axios.post(baseURL, body)
      .then((response) => {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

    // Reset form fields
    setName('');
    setSpecification('');
    setDescription('');
    setSelectedBuilding('');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Asset Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Specification:</label>
          <textarea
            value={specification}
            onChange={(e) => setSpecification(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded h-32"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Select Building:</label>
          <select
            value={selectedBuilding}
            onChange={(e) => setSelectedBuilding(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          >
            <option value="">Select Building</option>
            {buildings.map((building, index) => (
              <option key={index} value={building}>{building}</option>
            ))}
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Asset;
