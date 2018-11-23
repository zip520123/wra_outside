import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { BannerView } from './HomePage.js'
import GoBackView from './GoBackView'
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
             <div style={{width : '33%',float: 'left',height: '100%'}}>
                {/* <div style={this.cellStyle}>
                    <h1 style={this.centerTextStyle} >
                    <AWhite url="https://www.wratb.gov.tw/media/18063/放流水申請表.odt" name="處理水申請" />
                    </h1>
                </div> */}
                <DivLink name="處理水申請" match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle} />
                <DivLink name="既有建築物自設污水處理設施（國有土地專用）申請" match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle} />
                <DivLink name="污水下水道用戶排水設備接管" match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle} />
                <DivLink name="專用下水道納管申請" match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle} />
            </div>
            <BannerView />
            <GoBackView clickHandler={this.clickHandler}></GoBackView>
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
                            <DownloadLink url="https://www.wratb.gov.tw/media/2017/簽證技師報告.pdf" name="簽證技師報告.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/2018/既有建物自設污水處理設施-國有土地專用-自主檢查表.pdf" name="既有建物自設污水處理設施（國有土地專用）自主檢查表.pdf" />
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
                            <DownloadLink url="https://www.wratb.gov.tw/media/2022/污水下水道用戶排水設備接管申請表.pdf" name="污水下水道用戶排水設備接管申請表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/2021/污水下水道用戶排水設備接管設計檢核表.pdf" name="污水下水道用戶排水設備接管設計檢核表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/2020/用戶排水設備接管竣工資料卡.pdf" name="用戶排水設備接管竣工資料卡.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/2019/用戶排水設備接管竣工查驗紀錄.pdf" name="用戶排水設備接管竣工查驗紀錄.pdf" />
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
                            <DownloadLink url="https://www.wratb.gov.tw/media/2027/專用下水道申請審查表.pdf" name="專用下水道申請審查表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/2026/專用下水道專業技師檢核表.pdf" name="專用下水道專業技師檢核表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/2025/各處理單元檢核表.pdf" name="各處理單元檢核表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/2024/專用下水道簽證技師報告.pdf" name="專用下水道簽證技師報告.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/2023/既設專用污水下水道系統資料表.pdf" name="既設專用污水下水道系統資料表.pdf" />
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