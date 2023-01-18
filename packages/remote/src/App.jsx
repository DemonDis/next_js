import React from "react";
import { hot } from 'react-hot-loader/root';

import "./styles/index.css";

const App = () => (
  <div className="container">
    <div>Name: remote_react</div>
    <div>Tools build: Webpack5</div>
    <div>Type: SPA</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: CSS</div>
  </div>
);

export default hot(App);
