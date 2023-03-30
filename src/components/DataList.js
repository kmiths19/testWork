import React, { useState, useEffect } from 'react';
import '../App.css';
import { BASE_URL } from '../config/configuration';
import Home from './Home'

function DataList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quantities, setQuantities] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/raw/`)
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setQuantities(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
    if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      <Home />
      <div className="App">
      <table>
        <tr>
          <th>ConsumedQuantity</th>
          <th>Cost</th>
          <th>Date</th>
          <th>InstanceId</th>
          <th>MeterCategory</th>
          <th>ResourceGroup</th>
          <th>ResourceLocation</th>
          <th>Tags</th>
          <th>UnitOfMeasure</th>
          <th>Location</th>
          <th>ServiceName</th>
        </tr>
        {quantities.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.ConsumedQuantity}</td>
              <td>{val.Cost}</td>
              <td>{val.Date}</td>
              <td>{val.InstanceId}</td>
              <td>{val.MeterCategory}</td>
              <td>{val.ResourceGroup}</td>
              <td>{val.ResourceLocation}</td>
              <td><li>{val.Tags['app-name']}</li><li>{val.Tags.environment}</li><li>{val.Tags['business-unit']}</li></td>
              <td>{val.UnitOfMeasure}</td>
              <td>{val.Location}</td>
              <td>{val.ServiceName}</td>
            </tr>
          )
        })}
      </table>
    </div>
    </>
    );
  }
}

export default DataList;
