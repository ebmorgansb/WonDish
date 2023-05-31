import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { createPrimaryReviewThunk } from "../../store/primaryReview"
import { useLocation } from "react-router-dom"
import React from 'react';
import './index.css'
import Footer from "../Footer"

export default function CreateDish() {
  const location = useLocation();
  const data = location.state;
    const sessUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState(data.name);
    const [description, setDescription] = useState('');
    // const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [address, setAddress] = useState(data.address);
    const [rating, setRating] = useState('' || 6);
    const [errors, setErrors] = useState([]);
//test////


    useEffect(()=>{
      const errors = []
      if(!sessUser) errors.push("Must be logged in to Host a spot");
      if(name.length > 19) errors.push("Name must be less than 20 characters");
      if(!name) errors.push("Name is required");
      if(!description) errors.push("Description is required");
      if(description.length > 499) errors.push("Description must be less than 500 characters");
      if(!address) errors.push("Street address is required");
      if(address.length > 99) errors.push("Street address must be less than 100 characters");
      if(!image) errors.push("Image is required");
      // if(category && category.length > 19) errors.push("Category must be less than 20 characters");
      if(!rating) errors.push("Rating is required");


      setErrors(errors)
    // },[address, name, description, sessUser, category, rating, image])
  },[address, name, description, sessUser, rating, image])




    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(name, image, description, data.restaurantId, sessUser.id, rating, address, 'what')
      const formData = new FormData();
      formData.append("image", image);
      formData.append('name', name);
      formData.append('description', description);
      // formData.append('category', category);
      formData.append('address', address);
      formData.append('rating', rating);
      formData.append('user_id', sessUser.id);
      formData.append('restaurant_id', data.restaurantId);

      // aws uploads can be a bit slow—displaying
      // some sort of loading message is a good idea
      setImageLoading(true);

      const newPrimaryReview = await dispatch(createPrimaryReviewThunk(formData))
      if (newPrimaryReview) {
        if (newPrimaryReview.image) {
        setImageLoading(false);
        history.push(`/dish/reviews/${data.restaurantId}`, {name})
        // history.push(`/dish/reviews/${payload.restaurant_id}`, {dishName})
        }
        else {
          setImageLoading(false);
          // a real app would probably use more advanced
          // error handling
          console.log("error");
      }
      }
  }

  const updateImage = (e) => {
    const file = e.target.files[0];
    console.log(file, 'file')
    setImage(file);
}
//test

    return (
      <>
     <form className="createDishForm" onSubmit={handleSubmit}>
     <h2 className="title">Be the first to review {name} at {address}!</h2>
  {errors.length > 0 &&
     <div className="errorsCreate">
  {errors.map((error) => (
        <div className="oneError" key={`a${error}`}> {error}</div>))}
      </div>
}
      <div className="formInputsCreate">
      <div className="oneFormInput">
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          hidden
          value={name}
          onChange={(e) => setName(name)}
          required
        />
        </div>
      </div>
     <div className="oneFormInputDescrip">
        <div className="formPaddingDes">
        <input className="actualInputDescrip"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="How was the dish?"
        />
        </div>
        </div>
        {/* <div className="oneFormInput">
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder='Category'
        />
        </div>
        </div> */}
        <div className="oneFormInput">
          <input className="imageInput"
              type="file"
              accept="image/*"
              onChange={updateImage}
            />
            {(imageLoading)&& <p>Loading...</p>}
        </div>
        <div className="oneFormInputHidden">
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={address}
          // onChange={(e) => setAddress(e.target.value)}
          hidden
          required
        />
        </div>
        </div>
        <div className="oneFormInput">
        <label className="oneFormInputRating">
        Rating
        <div className="formPadding">
        <select
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    required
                >
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
        </div>
        </label>
        </div>
    </div>
        <button className="spotSubmitButton" disabled={errors.length > 0} type='submit'>Submit</button>
      </form>
    </>
    )
}
