export default function PFButton(prop){
  const style = {
    backgroundColor: prop.backgroundColor,
    color: prop.textColor,
    filter: `drop-shadow(5px 5px 10px ${prop.shadowColor} )`
  }
   
  return(
    <button className="PFButton interactiveClickable" style={style}>{prop.children}</button>
  )
}