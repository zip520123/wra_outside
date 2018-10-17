import React, { Component } from 'react';
import {
  Route,
  Link,
  // Switch,
  Redirect
} from 'react-router-dom';
// import { BrowerRouter as Router , Route , Link } from 'react-router-dom'
import './css/App.css';
import TopNav from "./components/TopNav";
import ListBlock from "./components/ListBlock.js"
import BottomView from "./components/BottomView"
import icon from './css/icon.png';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tab : 0 
    }
  }
  tabChange = (key) => {
      this.setState((state,props)=>{
        return {tab : key}
      })
      // console.log('tabChange' + key)
    } 
  render() {
    return (
        <div className="marginWrap">
          <div className="marginWrap">
          <header>
            <h2><img src={icon} alt="logo"/>線上便民服務系統</h2>
          </header>
          <div className="marginWrap"><TopNav activeTab={this.state.tab} tabChangeHandler={(key) => this.tabChange(key)}/></div>
          </div>
          <BottomView tab={this.state.tab}/>

        

      </div>
    );
  }
}
export default App;
