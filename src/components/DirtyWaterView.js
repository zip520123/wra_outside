import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { BannerView } from './HomePage.js'
import GoBackView from './GoBackView'
import { AWhite } from './ListBlock'
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
class DirtyWaterView extends Component {
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
                <h1 style={centerTextStyle} >
                <AWhite url="https://www.wratb.gov.tw/media/18063/放流水申請表.odt" name="處理水申請" />
                </h1>
                </div>
                <div style={cellStyle}>
                    <h1 style={centerTextStyle}>既有建築物自設污水處理設施（國有土地專用）申請</h1>
                </div>
                <div style={cellStyle}>
                    <h1 style={centerTextStyle}>污水下水道用戶排水設備接管</h1>
                </div>
                <div style={cellStyle}>
                    <h1 style={centerTextStyle}>專用下水道納管申請</h1>
                </div>
            </div>
            <BannerView />
            <GoBackView clickHandler={this.clickHandler}></GoBackView>
        </>)
    }
}
export default DirtyWaterView