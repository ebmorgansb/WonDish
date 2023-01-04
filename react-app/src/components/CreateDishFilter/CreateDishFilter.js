import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllPrimaryReviewsThunk } from "../../store/primaryReview"
import { Modal } from "../../context/modal"

export default function CreateDishFilter() {
    const sessUser = useSelector(state => state.session.user)
    const primaryDishes = [Object.values(useSelector(state => state.primaryReview))[0]]
    const primaryDishNames = []
    const primaryDishAddresses = []

    for (let i = 0; i < primaryDishes.length; i++) {
      let primaryDishName = primaryDishes[i].name.split(" ").join("")
      let primaryDishAddress = primaryDishes[i].address.split(" ").join("")
      primaryDishNames.push(primaryDishName.toLowerCase())
      primaryDishAddresses.push(primaryDishAddress.toLowerCase())
    }


    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState([]);


    useEffect(()=>{
      const errors = []
      if(!sessUser) errors.push("Must be logged in to Host a spot");
      if(name.length > 19) errors.push("Name must be less than 20 characters");
      if(!name) errors.push("Name is required");
      if(!address) errors.push("Street address is required");
      if(address.length > 99) errors.push("Street address must be less than 100 characters");

      getAllPrimaryReviewsThunk()
      setErrors(errors)
    },[address, name, sessUser])

    const handleSubmit = async (e) => {
        e.preventDefault();


        const payload = {
            name,
            address,
            user_id: sessUser.id
        };
        //create conditional logic using payload to filter through primary reviews
        //slice of state, then have two redirects one within an if and the other else
        // if (newPrimaryReview) {
        //   history.push(`/dish/${newPrimaryReview.id}`)
        // {setShowModal}
        if (primaryDishNames.includes(name.split(" ").join("").toLowerCase()) && primaryDishAddresses.includes(address.split(" ").join("").toLowerCase())) {
          // if (primaryDishNames.includes(name)) {
          history.push(`/secondarydish/create`, {name, address})
        }
        else {
          history.push(`/primarydish/create`, {name, address})
        }
        }


    return (
      <>
      <h2 className="title">Where and what did you eat?!</h2>
     <form className="fullSpotFormCreateSpot" onSubmit={handleSubmit}>
     <ul className="errors">
  {errors.map((error) => (
        <li className="oneError" key={`a${error}`}> {error}</li>))}
      </ul>
      <div className="formInputs">
      <div className="oneFormInput">
     <label>
        Name
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </div>
     </label>
      </div>
        <div className="oneFormInput">
        <label>
        Address
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        </div>
        </label>
        </div>
    </div>
        <button className="button" disabled={errors.length > 0} type='submit'>Submit</button>
      </form>
    </>
    )
}