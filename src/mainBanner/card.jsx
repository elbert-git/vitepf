
export default function Card(prop){
  const imageFolder = "src/assets/testCardImages/";
   
  return(
    <div className="card">
      <div className="cardFlipper">
        <img src={imageFolder + prop.id + "A.png"} className="front" />
        <img src={imageFolder + prop.id + "B.png"} className="back"  />
      </div>
    </div>
  )
}