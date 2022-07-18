import PFButton from '../components/PFButton';
import CardDeck from './cardDeck';
import './mainBanner.css';

export default function MainBanner(){
  return(
    <div className="flex flexJustifyCenter flexAlignStart mainBannerRoot">
      {/* main content */}
      <div className='mainBannerContent constrainWidth'>
        <div className='welcome'>Welcome To PeeFriends</div>
        <div className='sub'>A <span className=''>Gary Vaynerchuk</span> NFT project around meaningful intellectual property and an extraordinary community.</div>
        <PFButton backgroundColor="#0AD900" textColor="white" shadowColor="#0AD900">Mint</PFButton>
      </div>
      {/* background cards */}
      <div className='cardDeckOverlay'>
        <CardDeck />
      </div>
    </div>
  )
}