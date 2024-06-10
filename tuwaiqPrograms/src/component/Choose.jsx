import img from './settings.png';

function Choose(props) {
  return (
    <div className="first-section">
      <h1 className='txt'>{props.Programs}</h1>
      <div className="buttons-container">
        <button className='old'>{props.old}</button>
        <button className='young'>{props.young}</button>
      </div>
      <img className='imag' src={img}/>
    </div>
  );
}

export default Choose;
