function Card(props) {
  return (
    <div className={`card ${props.id}`} onClickCapture={(e) => props.handleClick(e)}>
      <img src={props.img} className='card-image'/>
      <p className='card-name'>{props.name}</p>
    </div>
  );
}

export default Card;