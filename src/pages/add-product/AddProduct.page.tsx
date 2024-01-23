import React, { useState } from 'react'
import './add-product.scss';
import {TextField, Button} from '@mui/material'
import { IPVersion } from 'net';
import { IProduct } from '../../types/global.typing';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { baseUrl } from '../../constants/urlconstants';

//FC stands for functional component
const AddProduct: React.FC = () => {

    const[product, setProduct] = React.useState<Partial<IProduct>>({name:"",description:""});
    const redirect=useNavigate();

    const changeHandler =(event: React.ChangeEvent<HTMLInputElement>) =>{
        setProduct({
            ...product,
            [event.target.name] : event.target.value,

        });
    };

    const handleSaveBtnClick = () => {
        if(product.name ==="" || product.description ===""){
            alert("Enter values in the empty fields please.")
            return;
        }

        const data: Partial<IProduct> = {
            name: product.name,
            description: product.description,
        };
        axios.post(baseUrl, data)
        .then(response => redirect("/products", {state:{message: "Product created successfuly :)"}}))
        .catch(error => alert("Error"));
    };

    const handleBackBtnClick = () => {
        redirect("/products")
    }

  return (
    <div className='add-product'>
        <h2>Add New Product</h2>

        <TextField 
            autoComplete='off' 
            label='Name' 
            variant='outlined' 
            name="name"
            value={product.name} 
            onChange={changeHandler} 
        />
        <TextField 
            autoComplete='off' 
            label='Description' 
            variant='outlined'
            name="description"
            value={product.description} 
            onChange={changeHandler} 
        />

        <div>
            <Button variant='outlined' color='primary' onClick={handleSaveBtnClick}>
                Save
            </Button>
            <Button variant='outlined' color='secondary' onClick={handleBackBtnClick}>
                Back
            </Button>
        </div>
    
    
    
    </div>
  )
}

export default AddProduct