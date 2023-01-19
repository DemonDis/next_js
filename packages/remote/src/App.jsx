import React from "react";
import { hot } from 'react-hot-loader/root';

import "./styles/index.css";
import Button from './components/Button'

const App = () => (
  <div className="container">
    <div>Name: remote</div>
    <Button/>
  </div>
);

export default hot(App);
