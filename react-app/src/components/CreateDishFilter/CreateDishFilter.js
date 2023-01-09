import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllPrimaryReviewsThunk } from "../../store/primaryReview"
import { Modal } from "../../context/modal"
import './index.css'

export default function CreateDishFilter() {
    const sessUser = useSelector(state => state.session.user)
    const primaryDishes = Object.values(useSelector(state => state.primaryReview))
    console.log(primaryDishes, 'hey there jack cool guy')
    const primaryDishNames = []
    const primaryDishAddresses = []
    const history = useHistory()
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState([]);


    // for (let i = 0; i < primaryDishes.length-1; i++) {
      primaryDishes.forEach(primaryDish => {
        let primaryDishName = primaryDish.name.split(" ").join("")
        primaryDishNames.push(primaryDishName.toLowerCase())
})



    useEffect(()=>{
      const errors = []
      if(!sessUser) errors.push("Must be logged in to create a review");
      if(name.length > 19) errors.push("Name must be less than 20 characters");
      if(!name) errors.push("Dish Name is required");

      getAllPrimaryReviewsThunk()
      setErrors(errors)
    },[name, sessUser])


    const handleSubmit = async (e) => {
        e.preventDefault();


        const payload = {
            name,
            user_id: sessUser.id
        };
        //create conditional logic using payload to filter through primary reviews
        //slice of state, then have two redirects one within an if and the other else

          if (primaryDishNames.includes(name.split(" ").join("").toLowerCase())) {
          let idx = primaryDishNames.indexOf(name.split(" ").join("").toLowerCase())
          let primaryReviewId = primaryDishes[idx].id
          history.push(`/secondarydish/create`, {name, primaryReviewId})
        }
        else {
          history.push(`/primarydish/create`, {name})
        }
        }


    return (
      <>
     <form className="createFilterForm" onSubmit={handleSubmit}>
     <h1 className="title">Create a review for a dish</h1>
     <div className="errors">
  {errors.map((error) => (
        <div className="oneError" key={`a${error}`}> {error}</div>))}
      </div>
      <div className="formInputs">
      <div className="oneFormInput">
     <label>
        Dish Name
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
    </div>
        <button className="button" disabled={errors.length > 0} type='submit'>Submit</button>
        <div className="instruct">All reviews belonging to the same dish will be grouped together*</div>
      </form>
    </>
    )
}