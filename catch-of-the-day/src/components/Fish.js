import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    let { details, index } = this.props;
    let isAvailable = details.status === 'available';
    let buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';

    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button
          onClick={() => this.props.addToOrder(index)}
          disabled={!isAvailable}
        >
          {buttonText}
        </button>
      </li>
    );
  }
}

export default Fish;
