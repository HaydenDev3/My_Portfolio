import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container, Divider } from "@mui/material";
import { NavbarComponent } from "./components/core/NavbarComponent";
import { HomeComponent } from "./components/home/index";

function App() {
  return (
    <>
      <div className='h-screen'>
        <NavbarComponent active="home"></NavbarComponent>
        <HomeComponent></HomeComponent>
      </div>
    </>
  )
}

export default App
