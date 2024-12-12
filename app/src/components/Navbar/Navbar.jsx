import React from 'react'
import style from "./Navbar.module.css";

const Navbar = ({searchFood}) => {
  return (
    <div className={style.navigation}>
    <div >
      <img src="/logo.svg" alt="logo" />
    </div>

    <div className={style.search}>
      <input onChange={searchFood} placeholder="Search Food" />
    </div>
  </div>
  )
}

export default Navbar
