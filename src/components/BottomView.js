import React, { Component } from 'react';
import {
    Route,
    Link,
    // Switch,
    Redirect
  } from 'react-router-dom';
import ListBlock from "./ListBlock.js"
import RightView from './RightView'
import SearchComponents from "./SearchComponent"
import {Row , Col} from 'react-bootstrap'
class BottomView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchId : ''
        }
    }
    searchId = (id) => {
        console.log("get id" , id)
        this.setState({
            searchId : id
        })
    }
    render(){
        const tab = this.props.tab

        return (   
            <>
            <Row>
                <Col xs={12} sm={4} >
                {this.renderSwitch(tab)}
                </Col>
                <Col xs={12} sm={8} >
                    <Route path="/retrieve/:id" component={RightView} />
                    <Route path="/form/:id" component={RightView} />
                </Col>
            </Row>
            {/* <div className="bottomDiv" style={{width : '30%' , display : 'block' , float: 'left' , marginLeft:"20px"}}>
                <div>{this.renderSwitch(tab)}</div>
            </div>
            <div style={{float: 'left', width :'60%',marginLeft:"20px" ,height :'100%'}}>
            
            <Route path="/retrieve/:id" component={RightView} />
            <Route path="/form/:id" component={RightView} />
            </div> */}
            </>
            
      )    
    }
    renderSwitch(key){
        switch(key){
            case 0:
                return <ListBlock />
            case 1:
                return <p>線上預約</p>
            case 2:
                return <SearchComponents searchChange={(id)=>this.searchId(id)}/>
            default:
                return <ListBlock />
        }
    }
}
export default BottomView;