import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import banner from './resource/banner.png'
import { Row , Col } from 'react-bootstrap';
import archButton from './resource/archButton.png'
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
const BannerView = () => (
    <Link to={`/`}><div style={{...style , content:`url(${banner})`, padding: '0px'}} ></div>
            </Link>
)
class HomePage extends Component {
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
        // margin: '10px 0px 0px 20px',

        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
        }
        var centerTextStyle = {
            transform: 'translateY(1000%)'
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
            // marginTop: '20px',
            margin : '10px 10px'
        }
        var imageStyle = {
            display : 'block',
            margin : '10% auto'}
        return (<>
            <div style={{width : '30%',float: 'left',height: '100%'}}>
                <div style={{...cellStyle }}>
                    <img style={imageStyle} src={archButton} alt=""/>
                </div>
                <div style={{...cellStyle }}>
                    <img style={imageStyle} src={archButton} alt=""/>
                </div>
                <div style={{...cellStyle }}>
                    <img style={imageStyle} src={archButton} alt=""/>
                </div>
                <div style={{...cellStyle }}>
                    <img style={imageStyle} src={archButton} alt=""/>
                </div>

            </div>
            <BannerView style={{...style}} />
            <div style={{width : '30%',float: 'left',height: '100%'}}>
                <div style={{...cellStyle }}>
                    <img style={imageStyle} src={archButton} alt=""/>
                </div>
                <div style={{...cellStyle }}>
                    <img style={imageStyle} src={archButton} alt=""/>
                </div>
                <div style={{...cellStyle }}>
                    <img style={imageStyle} src={archButton} alt=""/>
                </div>
                <div style={{...cellStyle }}>
                    <img style={imageStyle} src={archButton} alt=""/>
                </div>
                
            </div>
        </>)
    }
}
export default HomePage