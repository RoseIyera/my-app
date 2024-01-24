import React from 'react'
import { IProduct } from '../../types/global.typing';
import {useNavigate, useParams} from 'react-router-dom'
import {TextField, Button} from '@mui/material'
import './edit-product.scss'
import axios from 'axios';
import { baseUrl } from '../../constants/urlconstants';

const EditProduct: React.FC = () => {
  const[product, setProduct] = React.useState<Partial<IProduct>>({name:"",description:""});

  const redirect=useNavigate();
  const { id } = useParams();

  const changeHandler =(event: React.ChangeEvent<HTMLInputElement>) =>{
      setProduct({
          ...product,
          [event.target.name] : event.target.value,

      });
  };

  React.useEffect(() => {
    axios.get(`${baseUrl}/${id}`).then(response => setProduct({
      name: response.data.name,
      description: response.data.description,
    })
    );
  }, []);

  const handleSaveBtnClick = () => {
     if(product.name ==="" || product.description ===""){
         alert("Enter values in the provided field.")
         return;
     }

     const data: Partial<IProduct> = {
         name: product.name,
         description: product.description,
     };
     axios
     .put(`${baseUrl}/${id}`, data)
     .then(response => redirect("/products", {state:{message: "Product updated successfuly :)"}}))
     .catch(error => alert("Error"));
};

const handleBackBtnClick = () => {
    redirect("/products")
};

  return (
    <div className="edit-product">
        <h2>Edit Product</h2>
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
  );
};

export default EditProduct