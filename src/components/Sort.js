// Assets
import down from '../assets/angle-down-solid.svg'

const Sort = () => {
  return (
    <div className="sort">
      <div className="sort__select">
        <p>Select Your Date</p>
        <img src={down} alt="Dropdown" />
      </div>

      <div className="sort__select">
        <p>Select Your Destination</p>
        <img src={down} alt="Dropdown" />
      </div>

      <div className="sort__select">
        <p>Select Your Bus Type</p>
        <img src={down} alt="Dropdown" />
      </div>
    </div>
  );
}

export default Sort;