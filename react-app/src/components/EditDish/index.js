import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getOnePrimaryReviewThunk } from "../../store/primaryReview"
import { editPrimaryReviewThunk } from "../../store/primaryReview"



export default function EditDish({setShowModa}) {
    let {dishId} = useParams()
    dishId = parseInt(dishId)
    const sessUser = useSelector(state => state.session.user)
    const oldPrimaryReview = Object.values(useSelector(state => state.primaryReview))[0]
    const dispatch = useDispatch()
    const history = useHistory()
    // const [name, setName] = useState('');
    const [description, setDescription] = useState('' || oldPrimaryReview.description);
    const [category, setCategory] = useState('' || oldPrimaryReview.category);
    // const [image, setImage] = useState('')
    // const [address, setAddress] = useState('');
    const [rating, setRating] = useState('' || oldPrimaryReview.rating);
    const [errors, setErrors] = useState([]);


    useEffect(()=>{
      // getOnePrimaryReviewThunk(dishId)
      const errors = []
      if(!sessUser) errors.push("Must be logged in to edit a review")
      if(!description) errors.push("Description is required")
      if(description.length > 499) errors.push("Description must be less than 500 characters")
      if(category && category.length > 19) errors.push("Category must be less than 20 characters")
      if(!rating) errors.push("Rating is required")
      setErrors(errors)
      },
    [description, rating, category, sessUser])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            description,
            category,
            rating,
            id: dishId
        };

        const editPrimaryReview = await dispatch(editPrimaryReviewThunk(payload))
        // if (editPrimaryReview) {
          // history.push(`/dish/${editPrimaryReview.id}`)
        //   setShowCreate(false)
          // await dispatch(getSpotThunk(newSpot.id))
        // }
      }

    return (
      <>
      <h2 className="title">Edit a Primary Review</h2>
     <form className="fullSpotFormCreateSpot" onSubmit={handleSubmit}>
     <ul className="errors">
  {errors.map((error) => (
        <li className="oneError" key={`a${error}`}> {error}</li>))}
      </ul>
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
        <button className="spotSubmitButton" disabled={errors.length > 0} type='submit'>Submit</button>
      </form>
    </>
    )
}