import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllPrimaryReviewsThunk } from "../../store/primaryReview"
import Autocomplete from 'react-autocomplete';
import './index.css'

export default function Search() {
    const sessUser = useSelector(state => state.session.user)
    const primaryReviews = Object.values(useSelector(state => state.primaryReview))
    const preReviewNames = [...new Set(primaryReviews.map(ele => ele.name))]
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        dispatch(getAllPrimaryReviewsThunk());
      const errors = []
      if(name.length > 19) errors.push("Name must be less than 20 characters");

      setErrors(errors)
    },[name, sessUser, dispatch])

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



    // if (!reviewNames) {
    //   return null
    // }


let stylelol = {
  borderRadius: '3px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
  background: 'rgba(255, 255, 255, 0.9)',
  padding: '2px 0',
  fontSize: '90%',
  position: 'static',
  overflow: 'auto',
  maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
  height: '100px',
  borderRadius: '10px',
  overflow: 'auto'
}

  return (
      <div className="searchForm">
     <form className="totalSearchForm" onSubmit={handleSubmit}>
     <div className="errors">
  {errors.map((error) => (
        <div className="oneErrorSearch" key={`a${error}`}> {error}</div>))}
      </div>
      <div className="alignSearch">
      <div className="inputAndBut">
 <Autocomplete
  getItemValue={(item) => item}
  items={preReviewNames.filter((item) => {
    const regex = new RegExp(`^${name}`, 'i');
    return regex.test(item);
  })}
  renderItem={(item, isHighlighted) =>
    <div className='wowa' style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
      {item}
    </div>
  }
  inputProps={{ style: { borderRadius: 5, width:'30vw'} }}
  value={name}
  menuStyle={stylelol}
  onChange={(e) => setName(e.target.value)}

  onSelect={(val) => setName(val)}
/>
      <div className="buttonContainer">
        <button className="buttonSearch" disabled={errors.length > 0} type='submit'>Search</button>
      </div>
    </div>
      </div>

      </form>
    </div>
  )
}
