import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="App">
      <h1> Hello World.</h1>
      <h2> This is my firt react app.</h2>
      <table>
        <caption> Students details</caption>
        <tr>
          <th>USN</th>
          <th>Sub</th>
          <th colSpan={2}>Marks</th>
        </tr>
        <tr>
          <td rowSpan={2}>1VE19CS001</td>
          <td>CGV</td>
          <td>26</td>
          <td>8</td>
        </tr>
        <tr>
          <td>WTA</td>
          <td>29</td>
          <td>10</td>
        </tr>
      </table>
      

    </div>
  );
};

export default App;
