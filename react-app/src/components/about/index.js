import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import './index.css'
import about1 from '../../allImages/about1.jpg'
import about2 from '../../allImages/about2.jpg'
import about3 from '../../allImages/about3.jpg'
import about4 from '../../allImages/about4.jpg'

export default function About() {
  const history = useHistory()
  const dispatch = useDispatch()





  useEffect(() => {


  }, [dispatch])



return (
<div className='aboutTotal'>
{/* <div class="aboutContainer">Some Text</div> */}
  {/* <img className='aboutTitleImg' src={about4}> */}
  {/* <div className='aboutTitle'>
  Why WonDish?
  </div> */}
  {/* effwff */}
  <div class="parentContainer">
  <img className='aboutTitleImg' src={about4} alt="Landscape"></img>
    <div class="centered">Why WonDish?</div>
    </div>
  <div className='aboutText'>
    <div className='aboutImgTxt'>
  <p className='aboutP'>Welcome to WonDish, a platform that helps you find and review the best dishes in town. We understand that when it comes to food, everyone has their own preferences and cravings. That's why we've created a platform that focuses on individual dishes.</p>
      <br/>
    <img className='aboutImg' src={about1} ></img>
    </div>
    <div className='aboutImgTxt'>
      <img className='aboutImg' src={about2} ></img>
      <p className='aboutP'>At WonDish, we believe that finding the best dishes should be easy and accessible. Whether you're in the mood for pizza, sushi, or enchiladas, we've got you covered. Our platform allows you to search for a specific dish and see reviews and ratings from other users who have tried it.</p>
      <br/>
    </div>
    <div className='aboutImgTxt'>
      <p className='aboutP'>We believe that peer reviews are the most valuable source of information when it comes to food, and that's why we've created a platform that puts the power in your hands. As a user of WonDish, you have the ability to add your own reviews and contribute to the platform, making it even more valuable for others who are looking for the best dishes in town. Join our community today and start discovering the best dishes in town!</p>
      <img className='aboutImg' src={about3} ></img>
      <br/>
    </div>
  </div>
</div>
)

}