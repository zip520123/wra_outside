import React, { Component } from 'react';
import { FieldGroup } from './SewageApplication'
import DatePicker from "react-datepicker";
import {Radio,FormGroup ,ControlLabel,Form,FormControl, Button,PageHeader , Row , Col } from 'react-bootstrap'
class ProcessWaterApplication extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          value: '',
          isAgreeRole : false ,
          selectDate: new Date()
        };
    }
    render(){
        const selectDate = this.state.selectDate
        return <><div className='marginWrap'>
        <Row>
        <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
        <PageHeader style={{textAlign: 'center'}}> 經濟部水利署臺北水源特定區管理局 <br />
        處理水申請表 <small onClick={ this.props.history.goBack }>回上一頁</small></PageHeader>
        <Form action= {`${process.env.REACT_APP_DEVELOPMENT_JASON_IP}/api/SewageForm/DealWater`} method="post" accept-charset="UTF-8" horizontal>
        <FieldGroup id="Applicant" type="text" label="申請人姓名" />
        <FieldGroup id="Phone" type="text" label="聯絡電話" />
        <FieldGroup id="Address" type="text" label="申請人地址" />
        {/* <FieldGroup id="Time" type="text" label="取水時間" /> */}
        <FormGroup style={{fontSize: '18px'}} bsSize="lg" controlId="Time" >
      <Col componentClass={ControlLabel} sm={2}>
      取水時間
      </Col>
      <Col sm={10}>
        <DatePicker className='form-control'
        dateFormat="yyyy/MM/dd"
        selected={this.state.startDate}
        onChange={date => {
            this.setState({
                startDate: date
              });
            console.log(date)
        }}
        />{' '}
        </Col>
        <input type="hidden" id="Time" name="Time" value={selectDate.getFullYear() + "/" + (selectDate.getMonth() + 1) + "/" + selectDate.getDate() }></input>
        </FormGroup>
        <FieldGroup id="Quantity" type="text" label="索取數量(公噸)" />
        <FieldGroup id="Purpose" type="text" label="處理水用途" />
        {/* <FieldGroup id="Place" type="text" label="希望申請廠別" /> */}
        <FormGroup style={{fontSize: '18px'}} bsSize="lg" controlId="Place">
            <Col componentClass={ControlLabel} sm={2}>
            希望申請廠別
            </Col>
            <Col sm={10}>
                <Radio name="Place" value="直潭污水廠" inline>
                直潭污水廠
                </Radio>{' '}
                <Radio name="Place" value="烏來污水廠" inline>
                烏來污水廠
                </Radio>{' '}
                <Radio name="Place" value="坪林污水廠" inline>
                坪林污水廠
                </Radio>
            </Col>
        </FormGroup>
        <h2>備註</h2>
        <p style={{fontSize: '18px'}}>※本局污水處理廠所提供處理水，僅供澆灌非食用性作物或工地防塵等非接觸性用途使用。</p>
        <div style={{ maxWidth: 400 , margin: '0 auto 10px' }}>
        <Button bsStyle="primary" style={{height: '50px' ,fontSize: '18px'}} block type="submit">送出</Button>
      </div>
        </Form>
        </Col>
        </Row>
        </div></>
    }
}
export default ProcessWaterApplication