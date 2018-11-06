import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { BannerView } from './HomePage.js'
import GoBackView from './GoBackView'
import { AWhite } from './ListBlock'

        var cellStyle = {
            width: '100%',
            height : '49%',
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
class EnvEduView extends Component {
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
            <div style={{width : '33%',float: 'left',height: '100%'}}>
                <div style={cellStyle}>
                    <h1 style={centerTextStyle}>
                    <AWhite url="https://www.wratb.gov.tw/media/2016/環境教育課程活動申請表.pdf" name="環境教育課程活動申請表" />
                    </h1>
                </div>
                <div style={cellStyle}>
                <h1 style={centerTextStyle}><AWhite url="http://child.wratb.gov.tw/SewageApplication/" name='污水場參訪申請（線上申請）'></AWhite>
                </h1>
                </div>
            </div>
             
            <BannerView />
            <GoBackView clickHandler={this.clickHandler}></GoBackView>
        </>)
    }
}
export default EnvEduView