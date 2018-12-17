import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Additive from '../components/Additive';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: {
        defaultView: props.product.kind.default,
        defaultHover: false,
        selectedView: props.product.kind.selected,
        selectedHover: false,
        disabledView: props.product.kind.disabled
      },
      parametrs: {
        upperTitle: {
          value: 'Сказачное заморское яство',
          class: 'card__title_uncolored'
        },
        viewColor: '#1698D9'
      }
    };
    this.onSelect = this.onSelect.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onOut = this.onOut.bind(this);
  }

  componentDidMount() {
    const { product } = this.props;
    if (product.kind.selected) {
      this.setState(prevState => ({
        views: {
          ...prevState.views
        },
        parametrs: {
          ...prevState.parametrs,
          viewColor: '#D91667'
        }
      }));
    } else if (product.kind.disabled) {
      this.setState(prevState => ({
        views: {
          ...prevState.views
        },
        parametrs: {
          ...prevState.parametrs,
          viewColor: '#B3B3B3'
        }
      }));
    }
  }

  onSelect() {
    const { views } = this.state;
    const { defaultView, selectedView, defaultHover, selectedHover } = views;
    if (defaultHover || defaultView) {
      this.setState(prevState => ({
        views: {
          ...prevState.views,
          defaultView: false,
          defaultHover: false,
          selectedView: true
        },
        parametrs: {
          ...prevState.parametrs,
          viewColor: '#D91667'
        }
      }));
    } else if (selectedHover || selectedView) {
      this.setState(prevState => ({
        views: {
          ...prevState.views,
          defaultView: true,
          selectedView: false,
          selectedHover: false
        },
        parametrs: {
          upperTitle: {
            value: 'Сказачное заморское яство',
            class: 'card__title_uncolored'
          },
          viewColor: '#1698D9'
        }
      }));
    }
  }

  onHover() {
    const { views } = this.state;
    const { defaultHover, selectedHover, defaultView, selectedView } = views;
    if (defaultView && !selectedView) {
      this.setState(prevState => ({
        views: {
          ...prevState.views,
          defaultView: !defaultView,
          defaultHover: !defaultHover
        },
        parametrs: {
          ...prevState.parametrs,
          viewColor: '#2EA8E6'
        }
      }));
    } else if (!defaultView && selectedView) {
      this.setState(prevState => ({
        views: {
          ...prevState.views,
          selectedView: !selectedView,
          selectedHover: !selectedHover
        },
        parametrs: {
          upperTitle: {
            value: 'Котэ не одобряет?',
            class: 'card__title_colored'
          },
          viewColor: '#E52E7A'
        }
      }));
    }
  }

  onOut() {
    const { views } = this.state;
    const { defaultHover, selectedHover, defaultView, selectedView } = views;
    if (defaultHover && !selectedHover) {
      this.setState(prevState => ({
        views: {
          ...prevState.views,
          defaultView: !defaultView,
          defaultHover: !defaultHover
        },
        parametrs: {
          ...prevState.parametrs,
          viewColor: '#1698D9'
        }
      }));
    } else if (!defaultHover && selectedHover) {
      this.setState(prevState => ({
        views: {
          ...prevState.views,
          selectedView: !selectedView,
          selectedHover: !selectedHover
        },
        parametrs: {
          upperTitle: {
            value: 'Сказачное заморское яство',
            class: 'card__title_uncolored'
          },
          viewColor: '#D91667'
        }
      }));
    }
  }

  render() {
    const { product } = this.props;
    const { flavor, pieces, gift, satisfaction, kilos } = product;
    const { parametrs } = this.state;
    const cardTitleClass = `card__title ${parametrs.upperTitle.class}`;
    const cardDisabledClass = 'card__wrap card-disabled';
    const { views } = this.state;
    const { disabledView } = views;
    const { index } = this.props;
    return (
      <div
        onClick={this.onSelect}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onOut}
        role="presentation"
        className={null}
      >
        <div className={disabledView ? cardDisabledClass : 'card__wrap'}>
          <svg className="card__box">
            <path
              style={{ fill: parametrs.viewColor }}
              d="M320,12v456c0,6.6-5.4,12-12,12H12c-6.6,0-12-5.4-12-12V43L43,0h265C314.6,0,320,5.4,320,12z"
            />
            <path
              className="card__inner-box"
              d="M316,12v456c0,4.4-3.6,8-8,8H12c-4.4,0-8-3.6-8-8V45L45,4h263C312.4,4,316,7.6,316,12z"
            />
          </svg>
          <div className={cardTitleClass}>{parametrs.upperTitle.value}</div>
          <div className="card__main-title">Нямушка</div>
          <div className="card__subtitle">{flavor}</div>
          <div className="card__description_first">
            <span className="card__description__number">
              {pieces}
              &nbsp;
            </span>
            порций
          </div>
          <div className="card__description_second">{gift}</div>
          {satisfaction ? (
            <div className="card__description_third">заказчик доволен</div>
          ) : (
            true
          )}
          <img
            src="./src/images/cat.png"
            alt="cat food funbox"
            className="card__img"
          />
          <div
            className="card__label"
            style={{ background: parametrs.viewColor }}
          >
            <div className="card__label__number">{kilos}</div>
            <div className="card__label__sub">кг</div>
          </div>
        </div>
        <Additive type={views} index={index} handleClick={this.onSelect} />
      </div>
    );
  }
}

Card.defaultProps = {
  product: {
    id: 0,
    kind: {
      default: true,
      selected: false,
      disabled: false
    },
    flavor: 'с фуа-гра',
    pieces: '10',
    gift: 'мышь в подарок',
    satisfaction: false,
    kilos: '0,5'
  }
};

Card.propTypes = {
  product: PropTypes.shape({
    kind: PropTypes.object.isRequired,
    flavor: PropTypes.string.isRequired,
    pieces: PropTypes.string.isRequired,
    gift: PropTypes.string.isRequired,
    satisfaction: PropTypes.bool.isRequired,
    kilos: PropTypes.string.isRequired
  }),
  index: PropTypes.number.isRequired
};

export default Card;
