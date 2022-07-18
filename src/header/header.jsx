import './header.css';
import PFButton from '../components/PFButton';
import logo from '../assets/headerLogo.png'

export default function Header(){
  return(
    <div className="header flex flexJustifyCenter flexAlignCenter">
      <div className="constrainWidth flex flexJustifyBetween flexAlignCenter">
        <img src={logo}/>
        <PFButton backgroundColor="black" textColor="white" shadowColor="rgba(0,0,0,0.3)">Connect Wallet</PFButton>
      </div>
    </div>
  )
}