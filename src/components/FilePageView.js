import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import banner from './resource/banner.png'
import goBackImage from './resource/goBack.png'
class FilePageView extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }

    render() {
        var style = {width : '30%' ,
        height : '100%' ,
        float: 'left',
        backgroundColor:'#2c4e4c' , 
        color:'white',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#d1c0a6',
        padding : '20px',
        margin : '10px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
        }
        var centerTextStyle = {
            transform: 'translateY(1000%)'
        }
        return <>
            <div style={style}>
                <h1 style={centerTextStyle}>檔卷應用申請</h1>
            </div>

            <Link to={`/`}><div style={{...style , content:`url(${banner})`, padding: '0px'}} ></div>
            </Link>
            <div style={{...style , content:`url(${goBackImage})`}} onClick={this.clickHandler}>
                <h1 style={centerTextStyle}>返回至上一頁</h1>
            </div>
        </>
    }
}
export default FilePageView