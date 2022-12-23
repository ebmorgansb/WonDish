import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { createPrimaryReviewThunk } from "../../store/primaryReview"
import { useParams } from "react-router-dom"
import { getOnePrimaryReviewThunk } from "../../store/primaryReview"
import { editPrimaryReviewThunk } from "../../store/primaryReview"



export default function EditDish() {
    let {dishId} = useParams()
    dishId = parseInt(dishId)
    const sessUser = useSelector(state => state.session.user)
    const oldPrimaryReview = Object.values(useSelector(state => state.primaryReview))[0]
    console.log('oldprimaryreview', oldPrimaryReview)
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('')
    const [address, setAddress] = useState('');
    const [rating, setRating] = useState('');
    // const [errors, setErrors] = useState([]);


    useEffect(()=>{
        getOnePrimaryReviewThunk(dishId)
    //   const errors = []
    //   if(!sessUser) errors.push("Must be logged in to Host a spot")
    //   if(!address) errors.push("Street address is required")
    //   if(address.length > 99) errors.push("Street address must be less than 100 characters")
    //   if(!city) errors.push("City is required")
    //   if(city.length > 99) errors.push("City must be less than 100 characters")
    //   if(!state) errors.push("State is required")
    //   if(state.length > 99) errors.push("State must be less than 100 characters")
    //   if(!country) errors.push("Country is required")
    //   if(country.length > 49) errors.push("Country must be less than 50 characters")
    //   if(name.length > 49) errors.push("Name must be less than 50 characters")
    //   if(!name) errors.push("Name is required")
    //   if(!description) errors.push("Description is required")
    //   if(description.length > 999) errors.push("Description must be less than 1000 characters")
    //   if(!price) errors.push("Price per day is required")
    //   if(price <= 0) errors.push("Price must be greater than $0")
    //   if (price.toString().length > 9) errors.push("Price must be less than 10 characters")

    //   setErrors(errors)
    // },[price, address, city, state, country, name, description, sessUser])
},[dispatch, dishId])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('in handle submit')

        const payload = {
            description,
            category,
            rating
        };
        console.log(payload, 'payload')

        const editPrimaryReview = await dispatch(editPrimaryReviewThunk(payload))
        if (editPrimaryReview) {
          history.push(`/dish/${editPrimaryReview.id}`)
        //   setShowCreate(false)
          // await dispatch(getSpotThunk(newSpot.id))
        }
      }

    return (
      <>
      <h2 className="title">Edit a Primary Review</h2>
     <form className="fullSpotFormCreateSpot" onSubmit={handleSubmit}>
     {/* <ul className="errors">
  {errors.map((error) => (
        <li className="oneError" key={`a${error}`}> {error}</li>))}
      </ul> */}
      <div className="formInputs">
     <div className="oneFormInput">
     <label>
        Description
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        </div>
        </label>
        </div>
        <div className="oneFormInput">
        <label>
        Category
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        </div>
        </label>
        </div>
        <div className="oneFormInput">
        <label>
        Rating
        <div className="formPadding">
        <input className="actualInput"
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        </div>
        </label>
        </div>
    </div>
        {/* <button className="spotSubmitButton" disabled={errors.length > 0} type='submit'>Submit</button> */}
        <button className="spotSubmitButton" type='submit'>Submit</button>
      </form>
    </>
    )
}