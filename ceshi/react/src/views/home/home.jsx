import React from 'react';
import cssModules from 'react-css-modules';
import styles from './home.scss';
import bannerImg from '../../assets/images/banner.png';

function home() {
  return (
    <div className="home-wrap">
      <div className="container">
        <div styleName="banner">
          <img src={bannerImg} alt="quick start" />
        </div>
        <p>简单 快速 高效111111</p>
      </div>
    </div>
  );
}

export default cssModules(home, styles);
