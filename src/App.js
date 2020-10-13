import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Footer from './components/Footer'
import Error from './components/Error';

function App() {

    // Create the State of the form
    const [ search, saveSearch ] = useState({   
      city: '',
      country: ''
    });
    const [ consult, saveConsult ] = useState(false);
    const [ result, saveResult ] = useState({});
    const [ error, saveError ] = useState(false);

    const { city, country } = search;

    useEffect(() => {
      const consultAPI = async () => {

        if(consult){
          const appId = 'cc238ddea9ffe34e578b82308c9cfa30';
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

          const res = await fetch(url);
          const result = await res.json();

          saveResult(result);
          saveConsult(false);

          // Check if there were results found in the search
          if(result.cod === '404'){
            saveError(true);
          }else{
            saveError(false);
          }
        }
      }

      consultAPI();
      // eslint-disable-next-line
    },[consult]);

    let component;

    if(error){
      component = <Error message="No hay resultados disponibles" />
    }else{
      component = <Weather 
                    result={result}
                  />
    }

  return (
    <Fragment>
      <Header
        title="Weather App"
      />
      <div className="main-container">
        <div className="container">
          <div className="row">
            <div className="six columns">
              <Form 
                search={search}
                saveSearch={saveSearch}
                saveConsult={saveConsult}
              />
            </div>
            <div className="six columns">
              { component }
            </div>
          </div>
        </div>
      </div>
      <Footer 
        name="Franco Sparn"
      />
    </Fragment>
  );
}

export default App;
