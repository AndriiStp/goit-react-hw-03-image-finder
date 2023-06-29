import css from './Button.module.css';
import PropTypes from 'prop-types'; // ES6

const Button = ({ handleLoadMore }) => {
  return (
    <button type="button" className={css.button} onClick={handleLoadMore}>
      Load More
    </button>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default Button;
