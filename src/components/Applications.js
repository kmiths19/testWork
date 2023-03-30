import React, { useState, useEffect } from 'react';
import '../App.css';
import { BASE_URL } from '../config/configuration';
import { Link } from 'react-router-dom';
import Home from './Home';

function Applications() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [appList, setAppList] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/applications/`)
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setAppList(data);
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
    <Home/>
    <div className="App1">
      <table>
        <tr>
          <th>Applications Name</th>
        </tr>
        {appList.map((item) => {
          return (
            <tr key={item}>
              <td><li>{item}</li></td>
            </tr>
          )
        })}
      </table>
    </div>
    </>
  );
}
}

export default Applications;
