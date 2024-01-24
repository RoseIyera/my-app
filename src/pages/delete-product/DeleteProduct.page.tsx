import React from 'react'
import './delete-product.scss'
import {useNavigate, useParams} from 'react-router-dom'
import { IProduct } from '../../types/global.typing';
import axios from 'axios';
import { baseUrl } from '../../constants/urlconstants';
import {Button} from '@mui/material'

const DeleteProduct = () => {
  
const[product, setProduct] = React.useState<Partial<IProduct>>({name:"",description:""});

const redirect=useNavigate();
const { id } = useParams();

  const handleDeleteBtnClick = () => {
     axios
     .delete(`${baseUrl}/${id}`)
     .then(response => redirect("/products", {state:{message: "Product deleted successfuly :)"}}))
     .catch(error => alert("Error"));
};

const handleBackBtnClick = () => {
    redirect("/products")
};

  return (
    <div className="delete-product">
        <h2>Delete Product</h2>
        <h4>Are you sure you want to delete this product?</h4>
        <div>
            <Button variant='outlined' color='error' onClick={handleDeleteBtnClick}>
                Yes, Delete Product.
            </Button>
            <Button variant='outlined' color='secondary' onClick={handleBackBtnClick}>
                Back
            </Button>
        </div>
    </div>
  );

}

export default DeleteProduct