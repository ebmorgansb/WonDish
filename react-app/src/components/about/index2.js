import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import './index.css'
import { useLocation } from 'react-router-dom'
import About from '.'

export default function AboutPage () {
//Fixed 
    const [ spinner, setSpinner ] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
      setTimeout(() => setSpinner(false), 800)
    }, []);

return (
    <>
    {spinner ?
        <div class="center">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
        :
        <About/>
      }
      </>
    )



  }