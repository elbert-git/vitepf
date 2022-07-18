function getImageUrl(name) {
  return new URL(`/src/assets/testCardImages/${name}.png`, import.meta.url).href
}

export default function Card(prop){
  const imageFolder = "src/assets/testCardImages/";
   
  return(
    <div className="card">
      <div className="cardFlipper">
        <img src={getImageUrl(prop.id + "A")} className="front" />
        <img src={getImageUrl(prop.id + "B")} className="back"  />
      </div>
    </div>
  )
}