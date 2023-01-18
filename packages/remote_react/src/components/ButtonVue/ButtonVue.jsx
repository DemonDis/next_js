import React, { useRef, useEffect, useState } from 'react';
// import { mount } from 'app_vue/ButtonVue';
// import { hot } from 'react-hot-loader/root';

 const btnVue = ({nameBtn, action, count}) => {
  // const [name, setName] = useState("Tom");
  // const ref = useRef(null);

  // useEffect(() => {
  //   mount(ref.current);
  //   console.log('BUTTON VUE in REACT mount')
  // }, [name]);

  // useEffect(() => {
  //   const userName = localStorage.getItem("userName");

  //   if(userName !== null) {
  //     setName(userName);
  //     ref.current._vnode.component.props.action = action
  //     ref.current._vnode.component.props.count = count
  //     ref.current._vnode.component.props.nameBtn = nameBtn
  //     // console.log('BUTTON VUE in REACT click', ref.current)
  //     console.log('GOT', localStorage.getItem("userName"))
  //   }
  //   return()=>{
  //     localStorage.setItem("userName", ref.current); 
  //     console.log("Saved!");
  // }

  // }, []);

  return (
    // <div ref={ref} />
    <div>EXAMPLE IMPORT VUE</div>
  );
};

export default hot(btnVue)