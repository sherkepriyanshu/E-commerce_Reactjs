import { useState } from "react";
import "../Styles/AddProduct.css";
import axios from "axios";
const AdminAddProduct = () => {

    const [category, setCategory] = useState("");
    const [restaurant, setRestaurant] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [ratings, setRatings] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState("");
     let data = {category,restaurant,name,price,ratings,quantity,description,thumbnail};

     let adddish = (e) => 
     {
        e.preventDefault();
        axios.post('http://localhost:2000/Product',data)
        .then((res)=>
        {
            console.log(res);
            alert('Dish added successfully');
        })
        .catch((err)=>
        {
            console.log(err);
            alert("error adding dish");
        })
     }
    return (
        <div className="additem">
            <form onSubmit={adddish}>
                <label>
                    Category:{" "}
                    <select  value={category} onChange={(e) => { setCategory(e.target.value);}}>
                        <option>Starter</option>
                        <option>Veg</option>
                        <option>non-veg</option>
                        <option value="">Beverages</option>
                    </select>
                </label>
                <br />
                <label htmlFor="">
                    Restaurant Name:
                    <input value={restaurant} onChange={(e) => {setRestaurant(e.target.value);}} type="text" placeholder="Enter the Restaurant Name" />
                </label>
                <br />
                <label htmlFor="">
                    Dish Name:
                    <input value={name} onChange={(e) =>{setName(e.target.value)}} type="text" placeholder="Enter the Dish Name:" />
                </label>
                <br />
                <label htmlFor="">      
                    Price:
                    <input  value={price} onChange={(e) =>{setPrice(e.target.value)}} type="text" placeholder=" Wnter the cost Price" name="" id="" />
                </label>
                <br />
                <label htmlFor="">
                    Quantity:
                    <input value={quantity} onChange={(e) =>{setQuantity(e.target.value)}} type="number" />
                </label>
                <br />
                <label>
                    {" "}
                    Description:
                    <textarea value={description} onChange={(e) => { setDescription(e.target.value);}} cols="30" placeholder="Enter the special recipes" rows="2" col="2"></textarea>
                </label>
                <br />
                ThumbnailURL:
                <input value={thumbnail} onChange={(e) =>{setThumbnail(e.target.value)}} type="text" placeholder="enter Image Url" />
                <br />
                <label>
                    Ratings:
                    <input value={ratings} onChange={(e) =>{setRatings(e.target.value)}} type="number" />
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdminAddProduct;
