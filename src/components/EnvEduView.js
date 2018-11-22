import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { BannerView } from './HomePage.js'
import GoBackView from './GoBackView'
import { DivLink, AWhite } from './ListBlock'
import { PageHeader , Row , Col } from 'react-bootstrap'
import SewageApplication from './SewageApplication'
class EnvEduView extends Component {
    cellStyle = {
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
    centerTextStyle = {
        position: 'relative',
        transform: 'translateY(-50%)',
        top: '50%',
        margin: '0px',
        textAlign: 'center'
    }
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    render() {
        
        return (<>
            <Route path={`${this.props.match.path}/:topicId`} component={this.topicIdLayer} />
            <Route
                exact
                path={this.props.match.path}
                render={this.defaultLayer}
            />
            {/* <div style={{width : '33%',float: 'left',height: '100%'}}>
                <div style={cellStyle}>
                    <h1 style={centerTextStyle}>
                    <AWhite url="https://www.wratb.gov.tw/media/2016/環境教育課程活動申請表.pdf" name="環境教育課程活動申請表" />
                    </h1>
                </div>
                <div style={cellStyle}>
                <h1 style={centerTextStyle}><AWhite url="http://child.wratb.gov.tw/SewageApplication/" name='污水場參訪申請（線上申請）'></AWhite>
                </h1>
                </div>
            </div> */}
             
            
        </>)


    }
    defaultLayer = () => {
       return <><div style={{width : '33%',float: 'left',height: '100%'}}>
                <div style={this.cellStyle}>
                    <h1 style={this.centerTextStyle}>
                    <AWhite url="https://www.wratb.gov.tw/media/2016/環境教育課程活動申請表.pdf" name="環境教育課程活動申請表" />
                    </h1>
                </div>
                <DivLink name='污水場參訪申請（線上申請）' match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                {/* <div style={cellStyle}>
                <h1 style={centerTextStyle}><AWhite url="http://child.wratb.gov.tw/SewageApplication/" name='污水場參訪申請（線上申請）'></AWhite>
                </h1>
                </div> */}
            </div>
            <BannerView />
            <GoBackView clickHandler={this.clickHandler}></GoBackView></>
    }
    topicIdLayer = ({match})=>{
        const id = match.params.topicId
        var cellStyle = {...this.cellStyle , height : '15.5%'} 
        switch (id) {
            case '污水場參訪申請（線上申請）':
            cellStyle = {...this.cellStyle , height : '15.5%'} 
            return (
                <SewageApplication id={id} {...this.props}/>
              );
            default:
            return (
                <div className='marginWrap'> <PageHeader> {id} <small onClick={this.clickHandler}>回上一頁</small></PageHeader>


            </div>);
        }

    }
}
export default EnvEduView