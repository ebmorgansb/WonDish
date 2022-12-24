import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export default function CreateDishFilter() {
    const sessUser = useSelector(state => state.session.user)
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
        <button className="spotSubmitButton" disabled={errors.length > 0} type='submit'>Submit</button>
      </form>
    </>
    )
}