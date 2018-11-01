import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BannerView } from './HomePage.js'
import GoBackView from './GoBackView'
var style = {width : '30%' ,
        height : '100%' ,
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
class FilePageView extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    render() {
        var centerTextStyle = {
            transform: 'translateY(1000%)'
        }
        return <>
            <div style={style}>
                <h1 style={centerTextStyle}>檔卷應用申請</h1>
            </div>
            <BannerView style={{...style}}></BannerView>
            <GoBackView clickHandler={this.clickHandler}></GoBackView>
        </>
    }
}
export default FilePageView