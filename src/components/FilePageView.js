import React, { Component } from 'react';
import { BannerView } from './HomePage.js'
import GoBackView from './GoBackView'
import { AWhite } from './ListBlock'
class FilePageView extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    div33widthStyle = {width : '33%',float: 'left',height: '100%'}
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
            <div style={this.div33widthStyle}>
            <div style={this.cellStyle}>
                <h1 style={this.centerTextStyle}>
                檔卷應用申請書
                {/* <AWhite url="https://www.wratb.gov.tw/media/2016/環境教育課程活動申請表" name="檔卷應用申請書" /> */}
                </h1>
            </div>
            <div style={this.cellStyle}>
                <h1 style={this.centerTextStyle}>
                檔卷應用委任書
                {/* <AWhite url="https://www.wratb.gov.tw/media/2016/環境教育課程活動申請表" name="環境教育課程活動申請表" /> */}
                </h1>
            </div>
            <div style={this.cellStyle}>
                <h1 style={this.centerTextStyle}>
                申請檔卷應用流程圖
                {/* <AWhite url="https://www.wratb.gov.tw/media/2016/環境教育課程活動申請表" name="環境教育課程活動申請表" /> */}
                </h1>
            </div>
            <div style={this.cellStyle}>
                <h1 style={this.centerTextStyle}>
                提供政府資訊重製或複製收費表準表
                {/* <AWhite url="https://www.wratb.gov.tw/media/2016/環境教育課程活動申請表" name="環境教育課程活動申請表" /> */}
                </h1>
            </div>
            <div style={this.cellStyle}>
                <h1 style={this.centerTextStyle}>
                檔卷應用申請書填寫範例
                {/* <AWhite url="https://www.wratb.gov.tw/media/2016/環境教育課程活動申請表" name="環境教育課程活動申請表" /> */}
                </h1>
            </div>
            <div style={this.cellStyle}>
                <h1 style={this.centerTextStyle}>
                檔案應用服務十問
                {/* <AWhite url="https://www.wratb.gov.tw/media/2016/環境教育課程活動申請表" name="環境教育課程活動申請表" /> */}
                </h1>
            </div>
        </div>
            <BannerView ></BannerView>
            <GoBackView clickHandler={this.clickHandler}></GoBackView>
        </>
    }
}
export default FilePageView