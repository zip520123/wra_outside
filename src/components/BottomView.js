import React, { Component } from 'react';
import {
    Route,
    Link,
    // Switch,
    Redirect
  } from 'react-router-dom';
import ListBlock from "./ListBlock.js"
import RightView from './RightView'
class BottomView extends Component {

    render(){
        const tab = this.props.tab
        return (
            <div>
            <div className="bottomDiv" style={{width : '30%' , display : 'block' , float: 'left' , marginLeft:"20px"}}>
                <div>{this.renderSwitch(tab)}</div>
        </div>
        <div style={{float: 'left', width :'60%',marginLeft:"20px" ,height :'100%'}}>
        {/* <Route exact path="/" component={this.Home}/> */}
        <Route path="/form/:id" component={RightView} />
        </div>
        </div>
            
      )    
    }
    renderSwitch(key){
        switch(key){
            case 0:
                return <ListBlock />
            case 1:
                return <p>線上預約</p>
            case 2:
                return <p>申辦進度查詢</p>
            default:
                return <ListBlock />
        }
    }
}
export default BottomView;