import React from 'react';
import ReactDom from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './assets/scss/index.scss';

import PageHeader from './components/page-header/page-header';
import PageFooter from './components/page-footer/page-footer';
import List from './components/list/list';
import Home from './views/home/home';

var App = React.createClass({
  getInitialState(){
     var obj =[
      {
        a: '11111',
        b: 22222222
      }, {
        a: '333333333',
        b: 444444444
      }, {
        a: '5555555555555',
        b: 6666666666666666
      }
    ];
    return{
      obj:obj
    }
  },
  render(){
    return (
    <div className="page-wrap">
      <div className="page">
        <div className="header">
          <PageHeader />
        </div>
        <div className="page-content">
          <BrowserRouter>
            <Route path="/" component={Home} />
          </BrowserRouter>
        </div>
      </div>
      <div className="footer">
        <PageFooter />
      </div>
        <List obj={this.state.obj}/>
    </div>
  );
  }
}) 

ReactDom.render(<App />, document.getElementById('app'));
