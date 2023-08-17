import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect, useState} from 'react'
import './index.css'
import gitLogo from '../../allImages/github-logo.png';
import inLogo from '../../allImages/in.png';
import {NavLink, useParams} from 'react-router-dom'
import CreateDish from '../CreateDish'
import { ModalProvider } from '../../context/modal'
import { Modal } from '../../context/modal'
import Search from '../Search';
import Slider from '../Slider';
import CreateADishModal from '../CreateDishFilter/CreateDishFilterModal'
import Footer from '../Footer'
import { clearPrimaryAction } from '../../store/primaryReview'
import Google from '../GoogleAuto/GoogleAuto'
import table from '../../allImages/TABLE.jpeg';
import HomeDishes from '../HomeDishes'
/////////////////////////////
export default function Home() {
  const dispatch = useDispatch()
  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 200)
  }, []);


  useEffect(() => {

    return (() => dispatch(clearPrimaryAction()))
}
 ,[dispatch])

return (
  <>
  {!spinner &&
  <div>
<div className='totalHome'>
  <div className='title1'>WonDish</div>
  <div className='mission'>
    Welcome to WonDish - a peer review destination to help find the best dish to satisfy your craving. Browse existing reviews for top notch dishes or contribute by adding your own.
  </div>
    <Search/>
    <HomeDishes/>
    <div className='footerIsh'>
      <NavLink className='footerItems' style={{ textDecoration: 'none'}} to='/about'>About WonDish</NavLink>
    <a className='footerItems' target="_blank" href='https://github.com/ebmorgansb'>
                <img className='gitLogo'  alt='githubLogo' src={gitLogo}></img>

              </a>
              <a className='footerItems' target="_blank" href='https://www.linkedin.com/in/evan-morgan-9a2723132/'>
                <img className='inLogo' alt='inLogo' src={inLogo}></img>
              </a>
      </div>
</div>
</div>
}
</>
)

}
