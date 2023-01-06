import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllPrimaryReviewsThunk } from "../../store/primaryReview"
import './index.css'
import { clearPrimaryAction } from '../../store/primaryReview'

export default function Search() {
    const sessUser = useSelector(state => state.session.user)
    const primaryReviews = Object.values(useSelector(state => state.primaryReview))
    console.log(primaryReviews, 'in searh')
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
        // console.log(primaryReviews, 'test')
        e.preventDefault();
        const payload = {
            name
        };

        // primaryReviews.forEach(primaryReview => {
        //     if (primaryReview.name.split(" ").join("").toLowerCase() === payload.name.split(" ").join("").toLowerCase()) {
        //         history.push(`/dish/${primaryReview.id}`)
        //     }
        //     else {
        //       setErrors(['We do not have a review for that dish!'])
        //     }
        // })
        // }

        for (let i = 0; i < primaryReviews.length; i++) {
          if (primaryReviews[i].name.split(" ").join("").toLowerCase() === payload.name.split(" ").join("").toLowerCase()) {
              return history.push(`/dish/${primaryReviews[i].id}`)
          }
          else {
            setErrors(['We do not have a review for that dish!'])
          }

      }
    }


    return (
      <div className="searchForm">
     <form className="totalSearchForm" onSubmit={handleSubmit}>
     <div className="subTitle">Find the winning dish!</div>
     <div className="errors">
  {errors.map((error) => (
        <div className="oneErrorSearch" key={`a${error}`}> {error}</div>))}
      </div>
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
    </div>
        <button className="button" disabled={errors.length > 0} type='submit'>Search</button>


      </form>
    </div>
    )
}