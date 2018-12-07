import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import banner from './resource/banner.png'
// import { Row , Col } from 'react-bootstrap';
import archButton from './resource/mainPageButton/archButton.png'
import drtyWaterButton from './resource/mainPageButton/drtyWaterButton.png'
import envEduButton from './resource/mainPageButton/envEduButton.png'
import newExampleFormButton from './resource/mainPageButton/newExampleFormButton.png'
import fileUseButton from './resource/mainPageButton/fileUseButton.png'
import formSearchButton from './resource/mainPageButton/formSearchButton.png'
import waterKeepBackButton from './resource/mainPageButton/waterKeepBack.png'
import waterKeepButton from './resource/mainPageButton/waterKeepButton.png'
var banner = '/images/banner.png'
var Bannerstyle = {width : '32%' ,
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
export const BannerView = () => (
    <Link to={`/`}><div style={{...Bannerstyle , content:`url(${banner})`, padding: '0px'}} ></div>
            </Link>
)
class HomePage extends Component {
    render() {
        var cellStyle = {
            width: '100%',
            height : '24%',
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
        var imageStyle = {
            display : 'block',
            margin : '0% auto'}
        var leftWidthStyle = {width : '33%',float: 'left',height: '100%'}
        return (<>
            <div style={leftWidthStyle}>
                <Link to={`/arch`}>
                    <div style={{...cellStyle }}>
                        <img style={imageStyle} src={archButton} alt=""/>
                    </div>
                </Link>
                <Link to={`/envEdu`}>
                    <div style={{...cellStyle }}>
                        <img style={imageStyle} src={envEduButton} alt=""/>
                    </div>
                </Link>
                <Link to={`/waterKeepView`}>
                    <div style={{...cellStyle }}>
                        <img style={imageStyle} src={waterKeepButton} alt=""/>
                    </div>
                </Link>
                <Link to={`/dirtyWaterView`}>
                    <div style={{...cellStyle }}>
                        <img style={imageStyle} src={drtyWaterButton} alt=""/>
                    </div>
                </Link>
            </div>
            <BannerView  />
            <div style={leftWidthStyle}>
                <Link to={`/waterKeepBack`}>
                    <div style={{...cellStyle }}>
                        <img style={imageStyle} src={waterKeepBackButton} alt=""/>
                    </div>
                </Link>
                <Link to={`/fileUse`}>
                    <div style={{...cellStyle }}>
                        <img style={imageStyle} src={fileUseButton} alt=""/>
                    </div>
                </Link>
                <Link to={`/exampleForm`}>
                    <div style={{...cellStyle }}>
                        <img style={imageStyle} src={newExampleFormButton} alt=""/>
                    </div>
                </Link>
                <Link to={`/formSearch`}>
                <div style={{...cellStyle }}>
                    <img style={imageStyle} src={formSearchButton} alt=""/>
                </div>
                </Link>
            </div>
        </>)
    }
}
export default HomePage