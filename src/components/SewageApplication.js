import React, { Component } from 'react';
import {FormGroup, ControlLabel,FormControl, HelpBlock,PageHeader , Row , Col } from 'react-bootstrap'
class SewageApplication extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
          value: ''
        };
      }
    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
      }
    
      handleChange(e) {
        this.setState({ value: e.target.value });
      }
    render() {
        return <><div className='marginWrap'> 
        <Row>
            <Col md={6} mdOffset={3}>
            <PageHeader> {this.props.id} </PageHeader>
            經濟部水利署臺北水源特定區管理局「參觀污水處理廠線上申請系統」，因參觀活動安排之需要，台端於網站上填列之個人資料所蒐集、處理及利用您之姓名、email、電話號碼及通訊地址等資料，將用於參觀污水處理廠報名與連繫之用，使用個人資料之期間為蒐集日起至參觀污水處理廠活動結束後止。

您有權利對於個人資料隨時查詢或請求閱覽，請求製給複本，請求補充或更正，請求停止蒐集、處理或利用及請求刪除，行使方式逕以電洽或以電子郵件洽詢本網站維護人員徐先生，電話：02-29173282轉357，電子郵件：A620020@wratb.gov.tw
<br />
<form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>



            </Col>
        </Row>
    </div></>
    }
}
export default SewageApplication