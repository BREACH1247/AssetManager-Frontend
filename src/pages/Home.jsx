import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "http://localhost:3000" + "/getAsset";
const Home = () => {
  const [name, setName] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [assetlist, setassetlist] = useState([]);
  const buildings = [
    "LMP",
    "Atrium",
    "Villa Verde",
    "Vividha",
    "Quarkcity Energy",
  ];
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Process form data or submit to an API
    console.log({
      name,
      selectedBuilding,
    });

    const body = {
      name: name,
      building: selectedBuilding,
    };
    console.log(body);

    const res = await axios
      .post(baseURL, body)
      .then((response) => {
        console.log(response.data);
        setassetlist(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(res)
    // Reset form fields
    setName("");

    setSelectedBuilding("");
  };

  useEffect(() => {
    axios.post(baseURL).then((response) => {
      console.log(response.data);
      setassetlist(response.data);
    });
  }, []);

  return (
    <div className="">
      <div>HOME</div>
      <div>
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
            <label className="block mb-1">Select Building:</label>
            <select
              value={selectedBuilding}
              onChange={(e) => setSelectedBuilding(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required>
              <option value="">Select Building</option>
              {buildings.map((building, index) => (
                <option key={index} value={building}>
                  {building}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Submit
            </button>
          </div>
        </form>
      </div>
      <a href="/createasset">
        <button>Create Asset</button>
      </a>
      <div>
        <ul>
          {assetlist.map((asset) => (
            <li key={asset._id}>{asset.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
