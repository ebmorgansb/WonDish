import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllPrimaryReviewsThunk } from "../../store/primaryReview"
import Autocomplete from 'react-autocomplete'
import './index.css'

export default function Search() {
    const sessUser = useSelector(state => state.session.user)
    const primaryReviews = Object.values(useSelector(state => state.primaryReview))
    const reviewNames = [...new Set(primaryReviews.map(ele => ele.name))]
    console.log(reviewNames, 'in search')
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
              let dishName = primaryReviews[i].name
              return history.push(`/dish/${dishName}`)
          }
          else {
            setErrors(['We do not have a review for that dish yet.'])
          }

      }
    }

    if (!reviewNames) {
      return null
    }

    return (
      <div className="searchForm">
     <form className="totalSearchForm" onSubmit={handleSubmit}>
     <div className="errors">
  {errors.map((error) => (
        <div className="oneErrorSearch" key={`a${error}`}> {error}</div>))}
      </div>
      <div className="alignSearch">
      {/* <div className="oneFormInputSearch">
        <input className="actualInputSearch"
          placeholder="Dish Examples: Tacos, Burrito, Curry, Ice Cream..."
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          ></input>
      </div> */}





<Autocomplete
  getItemValue={(item) => item.label}
  items={reviewNames}
  renderItem={(item, isHighlighted) =>
    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
      {item.label}
    </div>
  }
  value={name}
  onChange={(e) => setName(e.target.value)}
  onSelect={(val) => name = val}
/>




      <div className="buttonContainer">
        <button className="buttonSearch" disabled={errors.length > 0} type='submit'>Search</button>
      </div>
      </div>

      </form>
    </div>
    )
}
