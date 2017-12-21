import React, { Component } from 'react';
import axios from 'axios';

import skate from './skate.jpg';
import andrewReynolds from './7504andrewpolaroid.jpg';
import tonyHawk from './tonyHawk.jpg';

import './home.less';

class Home extends Component {
  componentWillMount = async () => {
    // const res = await axios.post('http://localhost:8080/login', {
    //   body: {
    //     hello: 'world'
    //   }
    // });
    //
    // console.log(res.data);
  }

  render() {
    let firstSection;

    if (this.props.match.path === "/") {
      firstSection = (
        <div className="firstSection">
          <h1>We Skate</h1>
        </div>
      );
    }
    return (
      <div className='home'>
        {firstSection}
        <div className="secondSection container">
          <h1>
            Meet Our Skaters!
          </h1>
          <div className="skater">
            <div className="left">
              <img src={andrewReynolds} />
            </div>
            <div className='right'>
              <h2>Andrew Reynolds</h2>
              <p>
                He first picked up a board when he was 9 years old. Influenced by Powell videos at the time, Andrew began to skate jump ramps as well as wall rides.
              </p>
            </div>
          </div>
          <div className="skater opposite">
            <div className='left'>
              <h2>Tony Hawk</h2>
              <p>
                Anthony Frank Hawk (born May 12, 1968), commonly known by his nickname The Birdman, is an American professional skateboarder, actor and owner of skateboard company Birdhouse.
              </p>
            </div>
            <div className="right">
              <img src={tonyHawk} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
