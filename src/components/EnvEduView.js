import React, { Component } from 'react';
import { Route ,Link} from 'react-router-dom'
import { RWDBannerView } from './HomePage.js'
import { RWDGoBackView } from './GoBackView'
import { DivLink } from './ListBlock'
import { PageHeader, Col,Row } from 'react-bootstrap'
import SewageApplication from './SewageApplication'
import EnvEduApplication from './EnvEduApplication'
class EnvEduView extends Component {
    cellStyle = {
        width: '100%',
        height : '100%',
        backgroundColor:'#2c4e4c',
        color:'white',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#d1c0a6',
        padding : '20px',
    }
    centerTextStyle = {
        position: 'relative',
        transform: 'translateY(-50%)',
        top: '50%',
        margin: '0px',
        textAlign: 'center'
    }
    marginStyle = {margin: '10px',height: '49%'}
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
        </>)
    }
    defaultLayer = () => {
       return <>
            <Row style={{height:'100%'}}>
                <Col xs={12} md={4} style={{height : '100%'}}>
                    <div style={this.marginStyle}>
                        <DivLink name='環境教育課程活動申請表' match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    </div>
                    <div style={this.marginStyle}>
                        <Link to={`${this.props.match.url}/污水廠參訪申請（線上申請）`}>
                            <div style={this.cellStyle}>
                                <h1 style={this.centerTextStyle}>污水廠參訪申請<br />（線上申請）</h1>
                            </div> 
                        </Link>
                    </div>
                </Col>
                <RWDBannerView />
                <RWDGoBackView clickHandler={this.clickHandler} />
            </Row>
            </>
    }
    topicIdLayer = ({match})=>{
        const id = match.params.topicId
        switch (id) {
            case '污水廠參訪申請（線上申請）':
            return (
                <SewageApplication id={id} {...this.props}/>
              );
            case '環境教育課程活動申請表' :
            return (
                <EnvEduApplication id={id} {...this.props}/>
              );
            default:
            return (
                <div className='marginWrap'> <PageHeader> {id} <small onClick={this.clickHandler}>回上一頁</small></PageHeader>
            </div>);
        }

    }
}
export default EnvEduView