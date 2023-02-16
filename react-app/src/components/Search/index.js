import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllPrimaryReviewsThunk } from "../../store/primaryReview"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import './index.css'

export default function Search() {
    const sessUser = useSelector(state => state.session.user)
    const primaryReviews = Object.values(useSelector(state => state.primaryReview))
    const preReviewNames = [...new Set(primaryReviews.map(ele => ele.name))]
    const reviewNames = preReviewNames.map((name, index) => {
      return {
        id: index,
        name: name
      };
    })
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
    },[name, sessUser, dispatch])




    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const payload = {
    //         name
    //     };

    //     for (let i = 0; i < primaryReviews.length; i++) {
    //       if (primaryReviews[i].name.split(" ").join("").toLowerCase() === payload.name.split(" ").join("").toLowerCase()) {
    //           let dishName = primaryReviews[i].name
    //           return history.push(`/dish/${dishName}`)
    //       }
    //       else {
    //         setErrors(['We do not have a review for that dish yet.'])
    //       }

    //   }
    // }


    const handleOnSearch = (string, results) => {
      // onSearch will have as the first callback parameter
      // the string searched and for the second the results.
      console.log(string, results)
    }

    const handleOnHover = (result) => {
      // the item hovered
      console.log(result)
    }

    const handleOnSelect = (item) => {
      // the item selected
      console.log(item)
    }

    const handleOnFocus = () => {
      console.log('Focused')
    }

    // const formatResult = (item) => {
    //   return (
    //     <>
    //       <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
    //       <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
    //     </>
    //   )
    // }


    if (!reviewNames) {
      return null
    }



//  <Autocomplete
//   getItemValue={(item) => item}
//   items={reviewNames}
//   renderItem={(item, isHighlighted) =>
//     <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
//       {item}
//     </div>
//   }
//   value={name}
//   onChange={(e) => setName(e.target.value)}
//   // onSelect={(val) => name = val}
//   onSelect={(val) => setName(val)}
// />


{/* <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={reviewNames}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
</div> */}


  return (
<>
<div>test</div>
</>

  //     <div className="searchForm">
  //    <form className="totalSearchForm" onSubmit={handleSubmit}>
  //    <div className="errors">
  // {errors.map((error) => (
  //       <div className="oneErrorSearch" key={`a${error}`}> {error}</div>))}
  //     </div>
  //     <div className="alignSearch">
  //     <div className="oneFormInputSearch">
  //       <input className="actualInputSearch"
  //         placeholder="Dish Examples: Tacos, Burrito, Curry, Ice Cream..."
  //         type="text"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //         required
  //         ></input>
  //     </div>








    //   <div className="buttonContainer">
    //     <button className="buttonSearch" disabled={errors.length > 0} type='submit'>Search</button>
    //   </div>
    //   </div>

    //   </form>
    // </div>
  )
}
