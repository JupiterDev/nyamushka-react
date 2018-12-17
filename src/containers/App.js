import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
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
        },
        {
          id: 1,
          kind: {
            default: false,
            selected: true,
            disabled: false
          },
          flavor: 'с рыбой',
          pieces: '40',
          gift: '2 мыши в подарок',
          satisfaction: false,
          kilos: '2'
        },
        {
          id: 2,
          kind: {
            default: false,
            selected: false,
            disabled: true
          },
          flavor: 'с курой',
          pieces: '100',
          gift: '5 мышей в подарок',
          satisfaction: true,
          kilos: '5'
        }
      ]
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <div className="header">
          <div className="header__title">Ты сегодня покормил кота?</div>
        </div>
        <div id="content" className="content">
          {products.map((product, index) => (
            <Card product={product} index={index} key={product.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
