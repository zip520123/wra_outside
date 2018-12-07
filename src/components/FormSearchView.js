import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { DivLink ,ABlank} from './ListBlock'
import { BannerView } from './HomePage.js'
import GoBackView from './GoBackView'

class FormSearchView extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    cellStyle = {width : '32%' ,
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
    centerTextStyle = {
        transform: 'translateY(1000%)'
    }
    render() {
        return (<>
            
            <Route
                exact
                path={this.props.match.path}
                render={this.defaultLayer}
            />
            
        </>)
    }
    defaultLayer = () => {
        return <>

        <div style={this.cellStyle}>
        <a style={{color: 'white'}} href={`${process.env.REACT_APP_DEVELOPMENT_JASON_IP}/search`} target="_blank" rel="noopener noreferrer"><h1 style={this.centerTextStyle}>申辦進度查詢</h1></a>

        </div>
        <BannerView />
        <GoBackView clickHandler={this.clickHandler}></GoBackView></>
    }
 
}
export default FormSearchView