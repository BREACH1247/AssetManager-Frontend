import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3000" + "/getSchedList";

const Assetspec = () => {
  let { state } = useLocation();
  const asset = state.asset;
  const [schedlist, setschedlist] = useState([]);

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
        <div>Delete Asset :- Enter the name of the asset below to delete the Asset</div>
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
