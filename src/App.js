import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "4ccfacb61e0ad99b535a93b701c0423a";

class App extends React.Component {

  getWeather = async () => {

    const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=Belfast&appid=${API_KEY}`);
    const data = await api_call.json();
    
  }

  render() {

    return(

      <div>
        <Titles />
        <Form />
        <Weather />
      </div>

    );

  }

};

export default App;