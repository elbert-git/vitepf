import twitter from '../assets/socialLogos/twitter.svg';
import './secondaryBanner.css';

export default function SecondaryBanner(){
  return(
    <div className="secondaryBannerRoot flex flexJustifyCenter flexAlignStart fillWidth">
      <div className="secondaryBanner padding constrainWidth  flex flexAlignCenter flexJustifyCenter">
        <div className=" flex flexAlignCenter flexJustifyCenter fillWidth fillHeight">
          <div className="">
            Find out the latest PeeFriends updates
          </div>
          <img src={twitter} alt="" />
          <div>
            PeeFriends <span>BLOGS</span>
          </div>
        </div>
      </div>
    </div>
  )
}