import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { RWDBannerView } from './HomePage.js'
import { RWDGoBackView } from './GoBackView'
import { DivLink } from './ListBlock'
import {PageHeader, Panel , Row , Col } from 'react-bootstrap'
import {PanelView , DownloadLink} from './RightView'
import ProcessWaterApplication from './ProcessWaterApplication'
class DirtyWaterView extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    centerTextStyle = {
        position: 'relative',
        transform: 'translateY(-50%)',
        top: '50%',
        margin: '0px',
        textAlign: 'center'
    }
    cellStyle = {
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
                <DivLink name="處理水申請" match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle} />
                <DivLink name="既有建築物自設污水處理設施（國有土地專用）申請" match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle} />
                <DivLink name="污水下水道用戶排水設備接管" match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle} />
                <DivLink name="專用下水道納管申請" match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle} />
            </Col>
            <RWDBannerView />
            <RWDGoBackView clickHandler={this.clickHandler} />
            </Row>
        </>
    }
    topicIdLayer = ({match})=>{
        const id = match.params.topicId
        switch (id){
            case '處理水申請':
            return (<ProcessWaterApplication id={id} {...this.props}/>)
            case '既有建築物自設污水處理設施（國有土地專用）申請':
            return <div className='marginWrap'>
            <PageHeader>
                {id} <small onClick={this.clickHandler}>回上一頁</small>
            </PageHeader>
            <Row>
                <Col xs={12} md={6}>
                    <PanelView title="申請方式：" body="臨櫃或郵寄" />
                </Col>
                <Col xs={12} md={6}>
                <PanelView title="交付方式：" body="郵寄或自領 " />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                <PanelView title="處理期限：" body="開工(變更)24天、完工28天（工作天）"  />
                </Col>
                <Col xs={12} md={6}>
                    <PanelView title="備註：" body="繳付與否：免費申請 " />
                </Col> 
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                        <Panel.Title componentClass="h3">應備文件：如下列附件</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <DownloadLink url="https://www.wratb.gov.tw/media/2017/簽證技師報告" name="簽證技師報告" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/2018/既有建物自設污水處理設施-國有土地專用-自主檢查表" name="既有建物自設污水處理設施（國有土地專用）自主檢查表" />
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row>
        </ div>
            case '污水下水道用戶排水設備接管':
            return <div className='marginWrap'>
            <PageHeader>
            {id} <small onClick={this.clickHandler}>回上一頁</small>
            
            </PageHeader>
            <Row>
                <Col xs={12} md={6}>
                    <PanelView title="申請方式：" body="臨櫃或郵寄" />
                </Col>
                <Col xs={12} md={6}>
                    <PanelView title="交付方式：" body="郵寄或自領 " />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <PanelView title="處理期限：" body="開工(變更)24天、完工28天（工作天）"  />
                </Col>
                <Col xs={12} md={6}>
                    <PanelView title="備註：" body="繳付與否：免費申請 " />
                </Col> 
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                        <Panel.Title componentClass="h3">應備文件：如下列附件</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                        <a style={{textDecoration: 'none'}} href={`http://sewgis.wratb.gov.tw/A106010P_Public/Home/application`} target="_blank" rel="noopener noreferrer" > 
                            <h4>污水下水道用戶排水及專用下水道設置案件申請審查表格線上填報系統(請依需求選擇並填報後印出用印辦理申請事宜)</h4>
                        </a>
                            <DownloadLink url="用戶排水設備接管竣工資料卡(竣工申請用)" name="用戶排水設備接管竣工資料卡(竣工申請用)" />
                            <DownloadLink url="污水下水道用戶排水接管設計竣工自行查驗記錄(竣工申請用)" name="污水下水道用戶排水接管設計竣工自行查驗記錄(竣工申請用)" />
                            <DownloadLink url="污水下水道用戶排水設備接管申請表" name="污水下水道用戶排水設備接管申請表" />
                            <DownloadLink url="污水下水道用戶排水設備接管設計檢核表" name="污水下水道用戶排水設備接管設計檢核表" />
                            <DownloadLink url="污水下水道用戶排水設備設計簽證技師報告" name="污水下水道用戶排水設備設計簽證技師報告" />
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row></ div>
            case '專用下水道納管申請':
            return <div className='marginWrap'>
            <PageHeader>{id} <small onClick={this.clickHandler}>回上一頁</small>
            </PageHeader>
            <Row>
                <Col xs={12} md={6}>
                    <PanelView title="申請方式：" body="臨櫃或郵寄" />
                </Col>
                <Col xs={12} md={6}>
                    <PanelView title="交付方式：" body="郵寄或自領 " />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <PanelView title="處理期限：" body="開工(變更)24天、完工28天（工作天）"  />
                </Col>
                <Col xs={12} md={6}>
                    <PanelView title="備註：" body="繳付與否：免費申請 " />
                </Col> 
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                        <Panel.Title componentClass="h3">應備文件：如下列附件</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                        <a style={{textDecoration: 'none'}} href={`http://sewgis.wratb.gov.tw/A106010P_Public/Home/application`} target="_blank" rel="noopener noreferrer" > 
                            <h4>污水下水道用戶排水及專用下水道設置案件申請審查表格線上填報系統(請依需求選擇並填報後印出用印辦理申請事宜)</h4>
                        </a>
                            <DownloadLink url="專用下水道_簽證計師報告" name="專用下水道_簽證計師報告" />
                            <DownloadLink url="專用下水道_設置申請審查表" name="專用下水道_設置申請審查表" />
                            <DownloadLink url="專用下水道_技師檢核表" name="專用下水道_技師檢核表" />
                            <DownloadLink url="專用下水道_用戶排水設備接管竣工資料卡(竣工申請用)" name="專用下水道_用戶排水設備接管竣工資料卡(竣工申請用)" />
                            
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row></ div>
        default:
        break
        }
        return <div>{id}</div>
    }
}
export default DirtyWaterView