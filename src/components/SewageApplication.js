import React, { Component } from 'react';
import {FormGroup, ControlLabel ,Form,FormControl, Button,PageHeader ,Checkbox, Row , Col } from 'react-bootstrap'
var FieldGroup = ({ id, label, required, ...props }) => {
  return (
    <FormGroup bsSize="lg" controlId={id}>
      <Col componentClass={ControlLabel} sm={2}>
       {label}{required && <small style={{color :'red'}} >*</small>}
      </Col>
      <Col sm={10}>
        <FormControl name={id} {...props} />
        <FormControl.Feedback />
      </Col>
    </FormGroup>
  );
}
class SewageApplication extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          value: '',
          isFormShow : false
        };
      }
    getValidationState = () => {
        // const length = this.state.value.length;
        // if (length > 10) return 'success';
        // else if (length > 5) return 'warning';
        // else if (length > 0) return 'error';
        return null;
      }
    
      handleChange = (e) => {
        this.setState({ value: e.target.value });
      }
    submitForm = (e) => {
      // e.preventDefault();
      console.log('送出！')
    }
    render() {
        return <><div className='marginWrap'> 
        <Row>
            <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
            <PageHeader> {this.props.id} <small onClick={ this.props.history.goBack }>回上一頁</small></PageHeader>
            經濟部水利署臺北水源特定區管理局「參觀污水處理廠線上申請系統」，因參觀活動安排之需要，台端於網站上填列之個人資料所蒐集、處理及利用您之姓名、email、電話號碼及通訊地址等資料，將用於參觀污水處理廠報名與連繫之用，使用個人資料之期間為蒐集日起至參觀污水處理廠活動結束後止。

您有權利對於個人資料隨時查詢或請求閱覽，請求製給複本，請求補充或更正，請求停止蒐集、處理或利用及請求刪除，行使方式逕以電洽或以電子郵件洽詢本網站維護人員徐先生，電話：02-29173282轉357，電子郵件：A620020@wratb.gov.tw
<br />
    <Checkbox onClick={e => { this.setState({isFormShow:e.target.checked}) }} validationState={ 
      this.state.isFormShow ? 'success' : 'error'
    }>
    已閱讀個人資料保護法且同意條款，並繼續填寫報名表單
    </Checkbox>
    {this.state.isFormShow && <>
      <PageHeader>
        基本資料填寫 <small style={{color: 'red'}}>*為必填欄位</small>
      </PageHeader>
      <Form onSubmit={this.submitForm} action="http://10.65.164.216/api/SewageForm/Sewage" method="post" horizontal>
       <FieldGroup id="department" 
        type="text"
        label="申請人員或機關(單位)"
        required={true}
       />
      <FieldGroup id="applicant" type="text" label="申請人" />
      <FieldGroup id="contact_person" type="text" label="聯絡人" required={true} />
      <FieldGroup id="team_leader" type="text" label="帶隊人" />
      <FieldGroup id="phone" type="text" label="聯絡電話" required={true} />
      <FieldGroup id="fax" type="text" label="傳真" />
      <FieldGroup id="email" type="text" label="Email" required={true} />
      <FieldGroup id="address" type="text" label="聯絡地址" required={true} />
      <PageHeader>
       參觀資料填寫 <small style={{color: 'red'}}>*為必填欄位</small>
      </PageHeader>
      <FieldGroup id="date" type="text" label="預定參觀日期與時間" required={true} />
      <FieldGroup id="people" type="text" label="參觀人數" required={true} />
      <FieldGroup id="age" type="text" label="參觀人員年齡層" required={true} />
      <FieldGroup id="place" type="text" label="參觀廠別" required={true} />
      <FieldGroup id="purpose" type="text" label="參觀宗旨(目的)" required={true} />

      <h2>注意事項</h2>
      <ol>
        <li>本申請表請詳填並於七天前送達本局以利相關作業之安排。</li>
        <li>核可後本局將發函或以電話通知；申請按依申請時間依序安排。</li>
        <li>申請參觀時間以週一至週五上午09時至12時止下午02時至04時止為原則，正確時間以本局核定之時間為主。</li>
        <li>安排參觀人數以30人內為佳，超過30人時須分批參觀導覽(於現場)。</li>
        <li>本局地址：23147新北市新店區北新路1段45巷5號4樓<br />
聯絡電話：（02）29173282 傳真：（02）29117280<br />
聯絡人：<br />
王際正 先生(直潭、烏來污水處理廠) （02）29173282 ext.345 <br />
魏俊生 先生(坪林污水處理廠) （02）29173282 ext.346 <br />
直潭污水處理廠地址：新北市新店區直潭十街26號 <br />
烏來污水處理廠地址：新北市烏來區新烏路五段56號 <br />
坪林污水處理廠地址：新北市坪林區北宜路八段6號</li>
        <li>受限於本局及委外廠商人手不足，參訪單位應注意自身與隨行孩童相關安全事宜並服從現場人員指導，如發生意外事故本局概不負責。</li>
      </ol>
      <div style={{ maxWidth: 400 , margin: '0 auto 10px' }}>
        <Button bsStyle="primary" style={{height: '50px'}} block type="submit">送出</Button>
      </div>
      </Form>
      
    </>
    }
      
            </Col>
        </Row>
    </div></>
    }
}

export default SewageApplication