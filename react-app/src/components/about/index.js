import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'


export default function About() {
  const history = useHistory()
  const dispatch = useDispatch()





  useEffect(() => {


  }, [dispatch])



return (
<div>
Welcome to Won-Dish, a platform that helps you find and review the best dishes in town. We understand that when it comes to food, everyone has their own preferences and cravings. That's why we've created a platform that focuses on individual dishes, rather than entire restaurants.

At Won-Dish, we believe that finding the best dishes should be easy and accessible. Whether you're in the mood for pizza, sushi, or enchiladas, we've got you covered. Our platform allows you to search for a specific dish and see reviews and ratings from other users who have tried it.

We're passionate about food and dedicated to providing our users with the best possible experience. We believe that peer reviews are the most valuable source of information when it comes to food, and that's why we've created a platform that puts the power in your hands. As a user of Won-Dish, you have the ability to add your own reviews and contribute to the platform, making it even more valuable for others who are looking for the best dishes in town.

Whether you're a foodie looking to discover new dishes or a casual diner trying to find the best spot for your favorite meal, Won-Dish has something for everyone. Join our community today and start discovering the best dishes in town!
</div>
)

}