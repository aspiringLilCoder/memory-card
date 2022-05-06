function Card(props) {
  return (
    <div class="card">
      <img src={props.img} className='card-image' />
      <p className='card-name'>{props.name}</p>
    </div>
  );
}

export default Card;
