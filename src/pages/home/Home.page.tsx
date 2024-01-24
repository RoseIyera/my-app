import React from 'react';
import './home.scss'
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'
// import PinkCake from "../../assets/PinkCake.png"
import Cover from '../../assets/Cover.png'

const Home = () => {
    const redirect=useNavigate();
  return (
    <div className='home'>
        <div className="landing-page">
        <div><Button className="explore-button" variant='outlined' color='primary' onClick={()=>redirect("/products")}>
            Cake List
        </Button></div>
        <img src={Cover} alt="Cake Background" />
        </div>
        
    </div>
  )
}

export default Home