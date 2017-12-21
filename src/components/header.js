import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.less';

const options = ["Boards", "Accessories"];

class Header extends Component {

  renderOptions = (text) => {
    return options.map(option => {

      return (
        <li key={option}>
          <Link to={`/${option.toLowerCase()}`}>
            {option}
          </Link>
        </li>
      );
    });
  }

  render() {


    return (
      <div className='header'>
        <div className='left'>
          <h1>
            <Link to={'/'}>
              Aegean Skates
            </Link>
          </h1>
        </div>
        <div className='right'>
          <ul>
            {this.renderOptions()}
          </ul>
        </div>
      </div>
    );
  }

}

export default Header;
