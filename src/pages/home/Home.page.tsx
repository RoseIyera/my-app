import React from 'react';
import './home.scss'
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'
// import PinkCake from "../../assets/PinkCake.png"
import Cake from '../../assets/Welcome1.png'

const Home = () => {
    const redirect=useNavigate();


  return (
    <div className='home'>
        <div className="landing-page">
        <Button className="explore-button" variant='outlined' color='primary' onClick={()=>redirect("/products")}>
            View Cake List
        </Button>
        <img src={Cake} alt="Cake Background" />
        </div>
        
    </div>
  )
}

export default Home