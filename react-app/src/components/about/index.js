import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import './index.css'

export default function About() {
  const history = useHistory()
  const dispatch = useDispatch()





  useEffect(() => {


  }, [dispatch])



return (
<div className='aboutTotal'>
  <div className='aboutTitle'>
  Why WonDish?
  </div>
  <div className='aboutText'>
  <p>Welcome to WonDish, a platform that helps you find and review the best dishes in town. We understand that when it comes to food, everyone has their own preferences and cravings. That's why we've created a platform that focuses on individual dishes.</p>
      <br/>
      <p>At WonDish, we believe that finding the best dishes should be easy and accessible. Whether you're in the mood for pizza, sushi, or enchiladas, we've got you covered. Our platform allows you to search for a specific dish and see reviews and ratings from other users who have tried it.</p>
      <br/>
      <p>We're passionate about food and dedicated to providing our users with the best possible experience. We believe that peer reviews are the most valuable source of information when it comes to food, and that's why we've created a platform that puts the power in your hands. As a user of WonDish, you have the ability to add your own reviews and contribute to the platform, making it even more valuable for others who are looking for the best dishes in town.</p>
      <br/>
      <p>Whether you're a foodie looking to discover new dishes or a casual diner trying to find the best spot for your favorite meal, WonDish has something for everyone. Join our community today and start discovering the best dishes in town!</p>
  </div>
</div>
)

}