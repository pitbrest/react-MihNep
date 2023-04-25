import PropTypes from 'prop-types';
import './GoodItem.css';

function GoodItem(props) {
  const { url, title, description, price } = props;

  return (
    <div className="row good-item hoverable">
      <div>
        <div className="card">
          <div className="card-image">
            <img src={url} alt="good" />
          </div>
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{description}</p>
          </div>
          <div className="card-action">
            <span className='price'>{price} руб</span>
            <button type='button' className="waves-effect waves-light btn right" >Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

GoodItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};


export default GoodItem;