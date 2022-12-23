import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CreateDish from '../createDish'


export default function Home() {

  const dispatch = useDispatch()


return (
<div>
    <CreateDish/>
</div>
)

}