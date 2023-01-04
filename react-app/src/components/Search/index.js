import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllPrimaryReviewsThunk } from "../../store/primaryReview"
import './index.css'

export default function Search() {
    const sessUser = useSelector(state => state.session.user)
    const primaryReviews = Object.values(useSelector(state => state.primaryReview))
    console.log(primaryReviews, 'in searh')
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('');
    // const [address, setAddress] = useState('');
    const [errors, setErrors] = useState([]);

    // const primaryDishez = [Object.values(useSelector(state => state.primaryReview))[0]]
    // const primaryDishNames = []
    // const primaryDishAddresses = []

    // for (let i = 0; i < primaryDishez.length; i++) {
    //   let primaryDishName = primaryDishez[i].name
    //   let primaryDishAddress = primaryDishez[i].address
    //   primaryDishNames.push(primaryDishName)
    //   primaryDishAddresses.push(primaryDishAddress)
    // }
    useEffect(()=>{
        dispatch(getAllPrimaryReviewsThunk());
      const errors = []
    //   if(!sessUser) errors.push("Must be logged in to Host a spot");
      if(name.length > 19) errors.push("Name must be less than 20 characters");
      // if(!name) errors.push("Name is required");
      // if(!address) errors.push("Street address is required");
      // if(address.length > 99) errors.push("Street address must be less than 100 characters");



      setErrors(errors)
    },[name, sessUser, dispatch])

    const handleSubmit = async (e) => {
        console.log(primaryReviews, 'test')
        e.preventDefault();
        const payload = {
            name,
            // address,
            // user_id: sessUser.id
        };
        console.log(primaryReviews, 'in handle submit')
        primaryReviews.forEach(primaryReview => {
            if (primaryReview.name === payload.name) {
                console.log(primaryReview, 'if conditional')
                history.push(`/dish/${primaryReview.id}`)
            }
            else {
              setErrors(['TEST'])
            }
        })


        }


    return (
      <div className="searchForm">
     <form className="totalSearchForm" onSubmit={handleSubmit}>
     <ul className="errors">
  {errors.map((error) => (
        <li className="oneError" key={`a${error}`}> {error}</li>))}
      </ul>
      <div className="subTitle">Find the winning dish!</div>
      <div>
      <div className="oneFormInput">
        <input className="actualInput"
          placeholder="Dish Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          ></input>
      </div>
        {/* <div className="oneFormInput">
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
        </div> */}
    </div>
        <button className="button" disabled={errors.length > 0} type='submit'>Submit</button>


      </form>
    </div>
    )
}