import './index.css'
import gitLogo from '../../allImages/github-logo.png';
import inLogo from '../../allImages/in.png';

export default function Footer() {


    return (

<footer className='footer'>
<div>
A website where you can always find your favorite dish
</div>
<div>
              <div>
              <a target="_blank" href='https://github.com/ebmorgansb'>
                <img className='gitLogo'  alt='githubLogo' src={gitLogo}></img>
              </a>
              <a target="_blank" href='https://www.linkedin.com/in/evan-morgan-9a2723132/'>
                <img className='inLogo' alt='inLogo' src={inLogo}></img>
              </a>
              </div>
</div>
</footer>

    )
}