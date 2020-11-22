import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [devices, setDevices] = useState(null)
  const getData = async () => {
    const reports = await fetch('./data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => res.json());
    setDevices(reports);
  }
  useEffect(async () => {
    getData();
  }, [])
  return (
    <div className='parentContainer'>
      <p>Device Reports</p>
      <div className="container">
        <div className="col-1" data-testid="launchList">
          {devices && devices.map((device, index) => (
            <div className="col" key={index}>
              <div className='gridContainer'>

                <div className='info-container'>
                  <p className='deviceName'>{device.Name}</p>
                  <div className='display-flex'>
                    <p className='label-info'>IMEI:</p>
                    <p className='value'>{device.IMEI}</p>
                  </div>
                  <p className='label-info'>Reports: </p>
                  {device.reports.length > 0 &&
                    <ul className='reports'>
                      {device.reports.map((report) => (
                        <li>Location : {report.Location}</li>
                      ))}
                    </ul>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div >
    </div >
  );
}

export default App;
