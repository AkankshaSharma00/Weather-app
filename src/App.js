import React, { Component } from 'react';
import './App.css';

import Form from "./Components/Form";
import Title from "./Components/Title";
import Weather from "./Components/Weather";

const API_KEY = "058ef9a9a72b3c921800676badb2218b";

// API_URL="http://api.openweathermap.org/data/2.5/weather?q=Chandigarh,India&appid=058ef9a9a72b3c921800676badb2218b"

class App extends Component {
  constructor(props){
    super();

    this.state={
      temperature : undefined,
      city : undefined,
      country : undefined,
      humidity : undefined,
      description : undefined,
      wind : undefined,
      error : undefined
    }
  }

  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api_call.json();

    const temp = (data.main.temp - 273.15).toFixed(2);
    
    if(city && country){
      // console.log(data);
      this.setState({
        temperature : temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description.toUpperCase(),
        wind : data.wind.speed,
        error : "" 
      })
    }else{
      this.state={
        temperature : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        wind : undefined,
        error : "Please Enter the values."
      }
    }
  }

  render() {
    return (
      <div className="App">  
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather 
          temperature = {this.state.temperature}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          wind = { this.state.wind}
          error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;
