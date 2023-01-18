import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllPrimaryReviewsThunk } from "../../store/primaryReview"
import './index.css'

export default function Search() {
    const sessUser = useSelector(state => state.session.user)
    const primaryReviews = Object.values(useSelector(state => state.primaryReview))
    console.log(primaryReviews, 'in search')
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        dispatch(getAllPrimaryReviewsThunk());
      const errors = []
      if(name.length > 19) errors.push("Name must be less than 20 characters");

      setErrors(errors)
    },[name, sessUser, dispatch]

    )




    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            name
        };

        for (let i = 0; i < primaryReviews.length; i++) {
          if (primaryReviews[i].name.split(" ").join("").toLowerCase() === payload.name.split(" ").join("").toLowerCase()) {

              return history.push(`/dish/${primaryReviews[i].id}`)
          }
          else {
            setErrors(['We do not have a review for that dish yet.'])
          }

      }
    }


    return (
      <div className="searchForm">
     <form className="totalSearchForm" onSubmit={handleSubmit}>
     <div className="errors">
  {errors.map((error) => (
        <div className="oneErrorSearch" key={`a${error}`}> {error}</div>))}
      </div>
      <div className="alignSearch">
      <div className="oneFormInputSearch">
        <input className="actualInputSearch"
          placeholder="Dish Examples: Tacos, Pizza, Curry, Ice Cream..."
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          ></input>
      </div>
      <div className="buttonContainer">
        <button className="buttonSearch" disabled={errors.length > 0} type='submit'>Search</button>
      </div>
      </div>

      </form>
    </div>
    )
}