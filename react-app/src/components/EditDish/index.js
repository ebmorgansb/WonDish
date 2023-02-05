import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getOnePrimaryReviewThunk } from "../../store/primaryReview"
import { editPrimaryReviewThunk } from "../../store/primaryReview"
import './index.css'



export default function EditDish({setShowModal, dishId}) {
    // let {dishId} = useParams()
    // dishId = parseInt(dishId)
    const sessUser = useSelector(state => state.session.user)
    const oldPrimaryReview = Object.values(useSelector(state => state.primaryReview)).find(element => element.id === dishId);
    console.log(oldPrimaryReview, 'hm')
    const dispatch = useDispatch()
    const history = useHistory()
    const [description, setDescription] = useState(oldPrimaryReview.description || '');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState(8 || '');
    const [errors, setErrors] = useState([]);


    useEffect(()=>{
      getOnePrimaryReviewThunk(dishId)
      const errors = []
      if(!sessUser) errors.push("Must be logged in to edit a review")
      if(!description) errors.push("Description is required")
      if(description.length > 499) errors.push("Description must be less than 500 characters")
      if(category && category.length > 19) errors.push("Category must be less than 20 characters")
      if(!rating) errors.push("Rating is required")
      setErrors(errors)
      },
    [description, rating, category, sessUser, dishId])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            description,
            category,
            rating,
            id: dishId
        };
        console.log('dishIdwow', dishId)
        const editPrimaryReview = await dispatch(editPrimaryReviewThunk(payload))
          setShowModal(false)
      }

    return (
      <>
     <form className="editDishForm" onSubmit={handleSubmit}>
     <h2 className="title">Edit your review</h2>
     <div className="errors">
  {errors.map((error) => (
        <div className="oneError" key={`a${error}`}> {error}</div>))}
      </div>
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
        <select
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    required
                >
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
        </div>
        </label>
        </div>
    </div>
        <button className="spotSubmitButton" disabled={errors.length > 0} type='submit'>Submit</button>
      </form>
    </>
    )
}