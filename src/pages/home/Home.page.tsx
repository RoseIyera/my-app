import React from 'react';
import './home.scss'
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import PinkCake from "../../assets/PinkCake.png"

const Home = () => {
    const redirect=useNavigate();
  return (
    <div className='home'>
        <h1>Welcome to Rosie Cakes!</h1>
        <Button variant='outlined' color='primary' onClick={()=>redirect("/products")}>
            Cake List
        </Button>
        <img src={PinkCake} alt="Cake" />
    </div>
  )
}

export default Home