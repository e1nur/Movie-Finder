import React from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header/>
      <div className={'h-[100px]'}></div>
      <div className={'container mx-auto max-w-[1200px]'}>
        <Outlet/>
      </div>
    </>
  );
};

export default Layout;