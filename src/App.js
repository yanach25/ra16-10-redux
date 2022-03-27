import './App.css';
import React, {Fragment} from 'react';
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";
import ServiceSearch from "./components/ServiceSearch";

function App() {
  return (
    <div className="App">
        <Fragment>
            <ServiceAdd />
            <ServiceSearch/>
            <ServiceList />
        </Fragment>
    </div>
  );
}

export default App;
