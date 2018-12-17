import React from 'react';
import PropTypes from 'prop-types';

const Additive = ({ type, index, handleClick }) => {
  if (type.defaultView || type.defaultHover) {
    return (
      <div className="additive">
        Чего сидишь? Порадуй котэ,&nbsp;
        <span
          className="additive__link"
          onClick={() => {
            handleClick();
          }}
          role="presentation"
        >
          купи
        </span>
        <span className="additive__dot">.</span>
      </div>
    );
  }
  if (type.selectedView || type.selectedHover) {
    switch (index) {
      case 1:
        return (
          <div className="additive-selected">
            Головы щучьи с чесноком да свежайшая сёмгушка.
          </div>
        );
      case 2:
        return (
          <div className="additive-selected">
            Филе из цыплят с трюфелями в бульоне.
          </div>
        );
      default:
        return (
          <div className="additive-selected">
            Печень утки разварная с артишоками.
          </div>
        );
    }
  }
  if (type.selectedView || type.selectedHover) {
    switch (index) {
      case 1:
        return (
          <div className="additive-selected">
            Головы щучьи с чесноком да свежайшая сёмгушка.
          </div>
        );
      case 2:
        return (
          <div className="additive-selected">
            Филе из цыплят с трюфелями в бульоне.
          </div>
        );
      default:
        return (
          <div className="additive-selected">
            Печень утки разварная с артишоками.
          </div>
        );
    }
  }
  if (type.disabledView) {
    switch (index) {
      case 1:
        return (
          <div className="additive-disabled">Печалька, с рыбой закончился.</div>
        );
      case 2:
        return (
          <div className="additive-disabled">Печалька, с курой закончился.</div>
        );
      default:
        return (
          <div className="additive-disabled">
            Печалька, с фуа-гра закончился.
          </div>
        );
    }
  }
  return true;
};

Additive.defaultProps = {
  type: {
    defaultView: true,
    defaultHover: false,
    selectedView: false,
    selectedHover: false,
    disabledView: false
  }
};

Additive.propTypes = {
  type: PropTypes.shape({
    defaultView: PropTypes.bool.isRequired,
    defaultHover: PropTypes.bool.isRequired,
    selectedView: PropTypes.bool.isRequired,
    selectedHover: PropTypes.bool.isRequired,
    disabledView: PropTypes.bool.isRequired
  }),
  index: PropTypes.number
};

export default Additive;
