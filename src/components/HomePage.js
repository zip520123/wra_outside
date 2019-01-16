import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import banner from './resource/banner.png'
import { Row , Col } from 'react-bootstrap';
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
var bannerStyle = {width : '100%' ,
        height : '99%' ,
        maxWidth : '100%',
        maxHeight: '100%',
        backgroundColor:'#2c4e4c' , 
        color:'white',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#d1c0a6',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
export const BannerView = () => (
    <Link to={`/`}><div style={{...Bannerstyle , content:`url(${banner})`, padding: '0px'}} ></div>
            </Link>
)
export const RWDBannerView = () => (
    <Col xs={12} md={4} style={{
        height : '100%',
        
        maxWidth: '100%',
        maxHeight: '100%',}}>
        <div style={{
                     height: '100%',
                     maxWidth: '100%',
                     maxHeight: '100%',
                     margin: '10px'
                     }}>
            <Link to={`/`}><div style={{...bannerStyle , content:`url(${banner})`}} ></div>
            </Link>
        </div>
    </Col>
)
class HomePage extends Component {
    render() {
        var rwdCell = {
            width: '100%',
            height : '100%',
            backgroundColor:'#2c4e4c',
            color:'white',
            borderStyle: 'solid',
            borderWidth: '5px',
            borderColor: '#d1c0a6',
            padding: '5%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        }
        var imageStyle = {
            verticalAlign: 'middle',
            maxWidth: '100%',
            maxHeight: '100%'
        }
        var marginStyle = {margin : '10px' , height : '24%'}
        return (<>
        <Row style={{height : '100%'}}>
            <Col xs={12} md={4} style={{height : '100%'}}>
                <div style={marginStyle}>
                    <Link to={`/arch`}>
                        <div style={{...rwdCell }}>
                            <img style={imageStyle} src={archButton} alt=""/>
                        </div>
                    </Link>
                </div>
                <div style={marginStyle}>
                    <Link to={`/envEdu`}>
                        <div style={{...rwdCell }}>
                            <img style={imageStyle} src={envEduButton} alt=""/>
                        </div>
                    </Link>
                </div>
                <div style={marginStyle}>
                    <Link to={`/waterKeepView`}>
                        <div style={{...rwdCell }}>
                            <img style={imageStyle} src={waterKeepButton} alt=""/>
                        </div>
                    </Link>
                </div>
                <div style={marginStyle}>
                    <Link to={`/dirtyWaterView`}>
                        <div style={{...rwdCell }}>
                            <img style={imageStyle} src={drtyWaterButton} alt=""/>
                        </div>
                    </Link>
                </div>
            </Col>
            <RWDBannerView  />
            <Col xs={12} md={4} style={{height : '100%'}}>
                <div style={marginStyle}>
                    <Link to={`/waterKeepBack`}>
                        <div style={{...rwdCell }}>
                            <img style={imageStyle} src={waterKeepBackButton} alt=""/>
                        </div>
                    </Link>
                </div>
                <div style={marginStyle}>
                    <Link to={`/fileUse`}>
                        <div style={{...rwdCell }}>
                            <img style={imageStyle} src={fileUseButton} alt=""/>
                        </div>
                    </Link>
                </div>
                <div style={marginStyle}>
                    <Link to={`/exampleForm`}>
                        <div style={{...rwdCell }}>
                            <img style={imageStyle} src={newExampleFormButton} alt=""/>
                        </div>
                    </Link>
                </div>
                <div style={marginStyle}>
                    <Link to={`/formSearch`}>
                    <div style={{...rwdCell }}>
                        <img style={imageStyle} src={formSearchButton} alt=""/>
                    </div>
                    </Link>
                </div>
            </Col>
        </Row>
            
        </>)
    }
}
export default HomePage