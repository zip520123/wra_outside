import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
        var cellStyle = {
            width: '100%',
            height : '23%',
            backgroundColor:'#2c4e4c',
            color:'white',
            borderStyle: 'solid',
            borderWidth: '5px',
            borderColor: '#d1c0a6',
            padding : '20px',
            marginTop: '10px',
            marginLeft: '10px',
            marginRight: '0px',
            marginBottom: '10px',
        }
class ArchView extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    render() {
        var centerTextStyle = {
            position: 'relative',
            transform: 'translateY(-50%)',
            top: '50%',
            margin: '0px',
            textAlign: 'center'
        }
        return (<>
            <div style={{width : '30%',float: 'left',height: '100%'}}>
                <div style={cellStyle}>
                    <h1 style={centerTextStyle}>建築管理-建築管理</h1>
                </div>
                <div style={cellStyle}>
                    <h1 style={centerTextStyle}>建築管理-施工管理</h1>
                </div>
                <div style={cellStyle}>
                    <h1 style={centerTextStyle}>建築管理-使用管理</h1>
                </div>
                <div style={cellStyle}>
                    <h1 style={centerTextStyle}>建築管理-其他項</h1>
                </div>
            </div>
            <BannerView style={{...style}} />
            <GoBackView clickHandler={this.clickHandler}></GoBackView>
        </>)
    }
}
export default ArchView