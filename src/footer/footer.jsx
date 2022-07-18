import './footer.css';
import SocialButton from './socialButtons';
import openSeaLogo from '../assets/socialLogos/openSea.svg';
import twitterLogo from '../assets/socialLogos/twitter.svg';

export default function Footer(){
  return(
    <div className="footer flex flexJustifyCenter">
      <div className="constrainWidth flex flexJustifyBetween flexAlignCenter">
        <div>
          <div className="bold">Follow PeeFriends!</div>
          <div className="flex">
            <SocialButton className="socialButton" src={openSeaLogo}></SocialButton>
            <SocialButton className="socialButton" src={twitterLogo}></SocialButton>
          </div>
        </div>
        <div>signature.svg here</div>
      </div>
    </div>
  )
}