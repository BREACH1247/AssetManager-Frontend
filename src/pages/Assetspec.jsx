import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3000" + "/getSchedList";
const updateURL = "http://localhost:3000" + "/updateAsset";
const deleteURL = "http://localhost:3000" + "/deleteAsset";


const Assetspec = () => {
  let { state } = useLocation();
  const asset = state.asset;
  const [schedlist, setschedlist] = useState([]);

  const [delid, setdelid] = useState('')
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
      id: asset._id,
      name: name, 
      building : selectedBuilding,
      spec: specification,
      desc: description,
    }
    console.log(body);
    
    axios.post(updateURL, body)
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

  const handleDel = (event) => {
    event.preventDefault();

    // Process form data or submit to an API

    const body = {
      id: delid
      
    }
    console.log(body);
    
    axios.post(deleteURL, body)
      .then((response) => {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

    // Reset form fields
    setdelid('')
  };


  useEffect(() => {
    console.log(asset._id);
    const body = {
      id: asset._id,
    };
    axios
      .post(baseURL, body)
      .then((response) => {
        console.log(response.data);
        setschedlist(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);

  return (
    <div>
      <div>Asset Name: {asset.name}</div>
      <div>Asset Building: {asset.buildingType}</div>

      <div>
        Edit Asset details
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
        <div>Delete Asset :- Enter {asset._id} below to delete the Asset</div>
        <form onSubmit={handleDel}>
        <div className="mb-4">
          <label className="block mb-1">ID:</label>
          <input
            type="text"
            value={delid}
            onChange={(e) => setdelid(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
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

      <div>Add maintenance activities</div>

      <div>
        List of maintenance activities: 
        <ul>
          {schedlist.map((act) => (
            <li key={act._id}>
              <div>Edit the activity <span>Delete activity</span></div>
              {act.activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Assetspec;
