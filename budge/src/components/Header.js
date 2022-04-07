import React from "react"
import { NavBar, Space, Toast, Button } from 'antd-mobile'
import './components.css'

export default function Header(props) {
    const back = () => {
        props.setNavLink("transactions");
    }
        
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
        }

    return (
        <div className='header'>
            <NavBar  onBack={back}>{capitalizeFirstLetter(props.text)}</NavBar>
        </div>
        
    )
}