import React from 'react';
import cssModules from 'react-css-modules';
import styles from './page-footer.scss';

function pageFooter() {
  return (
    <div styleName="footer-wrap">
      <div className="container">
        QQ：4643288951111111111
      </div>
    </div>
  );
}

export default cssModules(pageFooter, styles);
