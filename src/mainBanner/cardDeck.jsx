import Card from './card';

export default function CardDeck(){
  const array = [...Array(25).keys()].map((val)=>{return (val % 3)+1})
  return (
    <div className="cardDeck">
      {array.map((val, index)=>{return <Card key={index} id={val.toString().padStart(2,'0')}></Card>})}
    </div>
  )
}