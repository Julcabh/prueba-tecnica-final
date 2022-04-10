import React from 'react'
//import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { logoutAsincrono } from '../actions/actionLogin';

export const Home = () => {

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAsincrono())
  }


  return (
    <div className="App">
      <header className="center-max-size header">
        <img
          onClick={() => handleLogout()}
          src="https://res.cloudinary.com/julcabh/image/upload/v1643585731/login-xxl_rnvlgd.png"
          alt="LogIn"
          width="50"
        />
      </header>
      <form className="formulario" >
       

      </form>

    </div>
  )
}