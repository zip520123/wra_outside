import React, { Component } from 'react';
import { BannerView } from './HomePage.js'
import GoBackView from './GoBackView'
var style = {width : '32%' ,
        height : '99%' ,
        float: 'left',
        backgroundColor:'#2c4e4c' , 
        color:'white',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#d1c0a6',
        padding : '20px',
        marginTop: '10px',
        marginLeft: '20px',
        marginRight: '0px',
        marginBottom: '20px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
        }
class ExampleForm extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    render() {
        var centerTextStyle = {
            transform: 'translateY(1000%)'
        }
        return (<>
        <div style={style}>
                <h1 style={centerTextStyle}>示範表單</h1>
            </div>
            <BannerView />
            <GoBackView clickHandler={this.clickHandler}></GoBackView>
        </>)
    }
}
export default ExampleForm