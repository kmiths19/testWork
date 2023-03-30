import React, { useState, useEffect } from 'react';
import '../App.css';
import { BASE_URL } from '../config/configuration';
import Home from './Home';

function Resources() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [resourcesList, setResourcesList] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/resources/`)
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setResourcesList(data);
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
          <th>Resources</th>
        </tr>
        {resourcesList.map((item) => {
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

export default Resources;
