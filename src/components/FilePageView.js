import React, { Component } from 'react';
import { RWDBannerView } from './HomePage.js'
import { RWDGoBackView } from './GoBackView'
import { Row , Col } from 'react-bootstrap'
class FilePageView extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    cellStyle = {
        width: '100%',
        height : '15.5%',
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
    render() {
        
        return <>
            <Row style={{height:'100%'}}>
                <Col xs={12} md={4} style={{height : '100%'}}>
                    <div style={this.cellStyle}>
                        <h1 style={this.centerTextStyle}>
                        檔卷應用申請書
                        </h1>
                    </div>
                    <div style={this.cellStyle}>
                        <h1 style={this.centerTextStyle}>
                        檔卷應用委任書
                        </h1>
                    </div>
                    <div style={this.cellStyle}>
                        <h1 style={this.centerTextStyle}>
                        申請檔卷應用流程圖
                        </h1>
                    </div>
                    <div style={this.cellStyle}>
                        <h1 style={this.centerTextStyle}>
                        提供政府資訊重製或複製收費表準表
                        </h1>
                    </div>
                    <div style={this.cellStyle}>
                        <h1 style={this.centerTextStyle}>
                        檔卷應用申請書填寫範例
                        </h1>
                    </div>
                    <div style={this.cellStyle}>
                        <h1 style={this.centerTextStyle}>
                        檔案應用服務十問
                        </h1>
                    </div>
                </Col>
            
        
            <RWDBannerView />
            <RWDGoBackView clickHandler={this.clickHandler}/>
            </Row>
        </>
    }
}
export default FilePageView