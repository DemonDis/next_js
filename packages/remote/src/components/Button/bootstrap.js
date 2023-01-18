import React from "react";
import ReactDOM from "react-dom";

import ButtonReact from "./index";

const mount = (el, {nameBtn}) => {
  console.log('react mount to vue', el);
  ReactDOM.render(<ButtonReact nameBtn={nameBtn}/>, el);
};

export { mount };

// For export => VUE