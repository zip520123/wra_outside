import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { BannerView } from './HomePage.js'
import GoBackView from './GoBackView'
import {PageHeader, Panel , Row , Col } from 'react-bootstrap'
import {PanelView , DownloadLink} from './RightView'
import { DivLink } from './ListBlock'

class WaterKeepView extends Component {
    centerTextStyle = {
        position: 'relative',
        transform: 'translateY(-50%)',
        top: '50%',
        margin: '0px',
        textAlign: 'center'
    }
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
             <div style={{width : '33%',float: 'left',height: '100%'}}>

            <DivLink name="簡易水土保持申報書" match={this.props.match} cellStyle=     {this.cellStyle} centerTextStyle={this.centerTextStyle}>
            </DivLink>
            <DivLink name="山坡地土地可利用限度查定結果異議複查申請" match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle}>
            </DivLink>
                 
            </div>
            <BannerView />
            <GoBackView clickHandler={this.clickHandler}></GoBackView>
        </>
    }
    topicIdLayer = ({match})=>{
        const id = match.params.topicId
        switch (id){
            case '簡易水土保持申報書':
            return <div className='marginWrap'>
            <PageHeader>
                {id} <small onClick={this.clickHandler}>回上一頁</small>
            </PageHeader>
            <Row>
                <Col xs={12} md={6}>
                    <PanelView title="案件說明：" body="簡易水土保持申報書審核" />
                </Col>
                <Col xs={12} md={6}>
                <PanelView title="案件說明：" body="服務說明：依水土保持法相關規定應擬具水士保持計畫者" />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                <PanelView title="申請對象：" body="水土保持義務人（土地所有權人、經營人、使用人）"  />
                </Col>
                <Col xs={12} md={6}>
                    <PanelView title="應備證件 申請人應自行檢附之文件：" body="一、如非申報人之土地，則應檢附土地使用同意書、租賃契約之影本。
二、處理土地位置圖。
三、水土保持設施：平面配置圖(含排水系統、構造物)、構造物示意圖、賸餘土處理地點及安全設施。
四、修築道路：平面配置圖、構造物示意圖、賸餘土處理地點及安全設施。
五、改善道路：路段位置圖、各路段改善內容、數量及其平面配置圖、賸餘土處理地點及安全設施。
系統代為查調，申請人免自行檢附之文件：
一、土地謄本（需申請人提供地段地號）。
二、地籍圖謄本（需申請人提供地段地號）。" />
                </Col> 
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <PanelView title="申請方式：" body="申請方式：臨櫃"  />
                </Col>
                <Col xs={12} md={6}>
                    <PanelView title="交付方式：" body="交付方式：公函"  />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <PanelView title="處理期限：" body="工作天：20天"  />
                </Col>
                <Col xs={12} md={6}>
                    <PanelView title="繳費模式：" body="免費申請"  />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                        <Panel.Title componentClass="h3">檔案下載</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <DownloadLink url="https://www.wratb.gov.tw/media/2032/新北市政府水土保持計畫行政審核表" name="新北市政府水土保持計畫行政審核表" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/2031/新北市政府簡易水土保持申報書審核程序標準作業流程說明" name="新北市政府簡易水土保持申報書審核程序標準作業流程說明" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/2030/新北市政府簡易水土保持申報書審核標準作業流程圖" name="新北市政府簡易水土保持申報書審核標準作業流程圖" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/2029/新北市政府簡易水土保持申報書審核標準作業程序" name="新北市政府簡易水土保持申報書審核標準作業程序" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/2028/簡易水土保持申報書" name="簡易水土保持申報書" />
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row>
        </ div>
        case '山坡地土地可利用限度查定結果異議複查申請':
        return <div className='marginWrap'>
        <PageHeader>
            {id} <small onClick={this.clickHandler}>回上一頁</small>
        </PageHeader>
        <Row>
            <Col xs={12} md={6}>
                <PanelView title="案件說明：" body="服務說明：針對已查定之山坡地土地可利用限度，其查定結果有異議者，接受其申請複查並實地複查" />
            </Col>
            <Col xs={12} md={6}>
            <PanelView title="申請對象：" body="土地所有權人" />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
            <PanelView title="應備證件 申請人應自行檢附之文件：" body="一、申請書。
二、公有地請另附承租契約證明影本或由土地管理機關提出申請。
系統代為查調，申請人免自行檢附之文件：
一、土地謄本。
二、地籍圖謄本。"  />
            </Col>
            <Col xs={12} md={6}>
                <PanelView title="申請方式：" body="臨櫃、郵寄" />
            </Col> 
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <PanelView title="交付方式：" body="郵寄"  />
            </Col>
            <Col xs={12} md={6}>
                <PanelView title="繳付與否：" body="免費申請"  />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={12}>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                    <Panel.Title componentClass="h3">檔案下載</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <DownloadLink url="https://www.wratb.gov.tw/media/2035/申請書範本" name="申請書範本" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/2034/空白申請書" name="空白申請書" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/2033/標準流程" name="標準流程" />
                    </Panel.Body>
                </Panel>
            </Col>
        </Row>
    </ div>
        default :
        break
        }
    }

}
export default WaterKeepView