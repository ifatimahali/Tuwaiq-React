import locationsIcon from './location.png';
import daysIcon from './calendar.png';
import dateIcon from './date-ic.png';

function Card(props) {
  const { type, title, locations, days, date, details } = props;
  
  let colorClass = '';
  let isDisabled = false;
  let btnC = '';

  if (details === 'مغلق') {
    colorClass = 'gray';
    btnC = 'gray-btn';
    isDisabled = true;
  } else if (type === 'لقاء') {
    colorClass = 'pink';
    btnC = 'pink-btn';
  } else if (type === 'معسكر') {
    colorClass = 'purple';
    btnC = 'purple-btn';
  } else if (type === 'برنامج') {
    colorClass = 'green';
    btnC = 'green-btn';
  }

  return (
    <div className={`card ${colorClass}`}>
      <h5>{type}</h5>
      <h3>{title}</h3>
      <div className="loc-day">
        <ul>
          <li className='locDay'>
            <img src={locationsIcon} alt="Location Icon" className="icon" />
            {locations}
          </li>
          <li className='locDay'>
            <img src={daysIcon} alt="Days Icon" className="icon" />
            {days}
          </li>
        </ul>
        <ul className='locDay2'>
          <li className='locDay'>
            <img src={dateIcon} alt="Date Icon" className="icon" />
            {date}
          </li>
          <li>
            <button className={`details ${isDisabled ? 'disabled' : ''} ${btnC}`} disabled={isDisabled}>
              {details}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card