import React, { Component } from 'react';
import {Button,Checkbox,Row, Col,PageHeader , Form ,FormGroup,FormControl,ControlLabel} from 'react-bootstrap'
import { FieldGroup } from './../SewageApplication'

class UseLinceseApplication extends Component {
    checkButton = () => {
        return false
      }
    render() {
        return <><div className='marginWrap'>
        <Row>
            <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
            <PageHeader style={{textAlign: 'center'}}> 使用執照存根聯申請書
 <small onClick={ this.props.history.goBack }> 回上一頁</small></PageHeader>
 <h4 >建物座落地址</h4>
 <Form style={{fontSize : '18px'}} action= {`${process.env.REACT_APP_DEVELOPMENT_JASON_IP}/api/SewageForm/OwnerLicense`} method="post" accept-charset="UTF-8" inline>
    <FormGroup bsSize="lg" controlId="">
        <ControlLabel>整編前:</ControlLabel>{' '}
        <FormControl componentClass="select" placeholder="" name="BCDistrict" >
            <option value></option>
            <option value="新店">新店</option>
            <option value="雙溪">雙溪</option>
            <option value="石碇">石碇</option>
            <option value="坪林">坪林</option>
            <option value="烏來">烏來</option>
        </FormControl>區
        <FormControl name="BCRoad" onChange={(e) =>{
          this.setState({BCRoad : e.target.value})
        }}/>路(街)
        <FormControl name="BCSection" onChange={(e) =>{
          this.setState({BCSection : e.target.value})
        }}/>段
        <FormControl name="BCLane" onChange={(e) =>{
          this.setState({BCLane : e.target.value})
        }}/>巷
        <FormControl name="BCAlley" onChange={(e) =>{
          this.setState({BCAlley  : e.target.value})
        }}/>弄
        <FormControl name="BCNum" onChange={(e) =>{
          this.setState({BCNum : e.target.value})
        }}/>號
        <FormControl name="BCFloor" onChange={(e) =>{
          this.setState({BCFloor : e.target.value})
        }}/>樓
    </FormGroup>
    <FormGroup bsSize="lg" controlId="">
    <ControlLabel>整編後:</ControlLabel>{' '}
        <FormControl componentClass="select" placeholder="" name="ACDistrict" >
            <option value></option>
            <option value="新店">新店</option>
            <option value="雙溪">雙溪</option>
            <option value="石碇">石碇</option>
            <option value="坪林">坪林</option>
            <option value="烏來">烏來</option>
        </FormControl>區
        <FormControl name="ACRoad" onChange={(e) =>{
          this.setState({ACRoad : e.target.value})
        }}/>路(街)
        <FormControl name="ACSection" onChange={(e) =>{
          this.setState({ACSection : e.target.value})
        }}/>段
        <FormControl name="ACLane" onChange={(e) =>{
          this.setState({ACLane : e.target.value})
        }}/>巷
        <FormControl name="ACAlley" onChange={(e) =>{
          this.setState({ACAlley : e.target.value})
        }}/>弄
        <FormControl name="ACNum" onChange={(e) =>{
          this.setState({ACNum : e.target.value})
        }}/>號
        <FormControl name="ACFloor" onChange={(e) =>{
          this.setState({ACFloor : e.target.value})
        }}/>樓
    </FormGroup>
    <h4>土地座落</h4>
    <FormGroup bsSize="lg" controlId="">
        <ControlLabel>重測前:</ControlLabel>{' '}
        <FormControl name="BTSection" onChange={(e) =>{
          this.setState({BTSection : e.target.value})
        }}/>段
        <FormControl name="BTSmallSec" onChange={(e) =>{
          this.setState({BTSmallSec : e.target.value})
        }}/>小段
        <FormControl name="BTLocnum" onChange={(e) =>{
          this.setState({BTLocnum  : e.target.value})
        }}/>地號
    </FormGroup>
    <FormGroup bsSize="lg" controlId="">
        <ControlLabel>重測後:</ControlLabel>{' '}
        <FormControl name="ATSection" onChange={(e) =>{
          this.setState({ATSection : e.target.value})
        }}/>段
        <FormControl name="ATSmallSec" onChange={(e) =>{
          this.setState({ATSmallSec : e.target.value})
        }}/>小段
        <FormControl name="ATLocnum" onChange={(e) =>{
          this.setState({ATLocnum  : e.target.value})
        }}/>地號
    </FormGroup>
    <h4>申請用途(至少須擇一項)</h4>
    <Checkbox onClick={e => { this.setState({ProfitReg:e.target.checked}) }} inline>
    1.營利事業登記
    </Checkbox>
    <Checkbox onClick={e => { this.setState({WaterElec :e.target.checked}) }} inline>
    2.接自來水、電
    </Checkbox>
    <Checkbox onClick={e => { this.setState({Balcony:e.target.checked}) }} inline>
    3.陽台補登錄
    </Checkbox>
    <Checkbox onClick={e => { this.setState({ChangeLic:e.target.checked}) }} inline>
    4.變更使用執照
    </Checkbox>
    <Checkbox onClick={e => { this.setState({PropertyReg:e.target.checked}) }} inline>
    5.產權登記
    </Checkbox>
    <Checkbox onClick={e => { this.setState({Other :e.target.checked}) }} inline>
    6.其他： <FormControl name="OtherCom" onChange={(e) =>{
          this.setState({OtherCom  : e.target.value})
        }} />
    </Checkbox>

    <h4>執照字號(*為必填欄位)</h4>
    <FormGroup bsSize="lg" controlId="">
        <ControlLabel>建照執照:</ControlLabel>{' '}
        <FormControl name="BuildLicende" onChange={(e) =>{
          this.setState({BuildLicende : e.target.value})
        }}/>{"  "}
        <ControlLabel>建字號:</ControlLabel>{' '}
        <FormControl name="BuildNum" onChange={(e) =>{
          this.setState({BuildNum : e.target.value})
        }}/>
    </FormGroup>
    <FormGroup bsSize="lg" controlId="">
        <ControlLabel>使用執照:</ControlLabel>{' '}
        <FormControl name="UseLicense" onChange={(e) =>{
          this.setState({UseLicense : e.target.value})
        }}/>{"  "}
        <ControlLabel>建字號:</ControlLabel>{' '}
        <FormControl name="UseNum" onChange={(e) =>{
          this.setState({UseNum : e.target.value})
        }}/>
    </FormGroup>
    
    <FormGroup bsSize="lg" controlId="">
    <h4>檢附資料(至少選擇一項可複選)</h4>
    <Checkbox onClick={e => { this.setState({ConOwner :e.target.checked}) }} inline>
    建物所有權狀影本
    </Checkbox>
    <Checkbox onClick={e => { this.setState({Apartment  :e.target.checked}) }} inline>
    公寓大廈管理組織報備證明影本
    </Checkbox>
    <Checkbox onClick={e => { this.setState({BuildRegBook:e.target.checked}) }} inline>
    建物登記簿謄本
    </Checkbox>
    <Checkbox onClick={e => { this.setState({LawEvidence:e.target.checked}) }} inline>
    法院告訴證明文件
    </Checkbox>
    <Checkbox onClick={e => { this.setState({BuildMeasure:e.target.checked}) }} inline>
    建物測量成果圖
    </Checkbox>
    <Checkbox onClick={e => { this.setState({HouseTax:e.target.checked}) }} inline>
    房屋稅單
    </Checkbox>
    <Checkbox onClick={e => { this.setState({OtherDoc :e.target.checked}) }} inline>
    其他可佐證文件
    </Checkbox>
    </FormGroup>
    
    <FormGroup bsSize="lg" controlId="">
    <h4>影印事項</h4>
    <Checkbox onClick={e => { this.setState({Userecipt :e.target.checked}) }} inline>
    使用執照存根聯
    </Checkbox>
    </FormGroup>

    <h4>申請人(所有權人)(*為必填欄位)</h4>
    <FormGroup bsSize="lg" controlId="">
        <ControlLabel>*姓名:</ControlLabel>{' '}
        <FormControl name="UseLicense" onChange={(e) =>{
          this.setState({UseLicense : e.target.value})
        }}/>{"  "}
        <ControlLabel>*住址:</ControlLabel>{' '}
        <FormControl name="UseNum" onChange={(e) =>{
          this.setState({UseNum : e.target.value})
        }}/>
        <ControlLabel>*身分證字號:</ControlLabel>{' '}
        <FormControl name="UseNum" onChange={(e) =>{
          this.setState({UseNum : e.target.value})
        }}/>
        <ControlLabel>*電話:</ControlLabel>{' '}
        <FormControl name="UseNum" onChange={(e) =>{
          this.setState({UseNum : e.target.value})
        }}/>
        <ControlLabel>傳真:</ControlLabel>{' '}
        <FormControl name="UseNum" onChange={(e) =>{
          this.setState({UseNum : e.target.value})
        }}/>
    </FormGroup>

    <h4>代理人(受委託人)</h4>
    <FormGroup bsSize="lg" controlId="">
        <ControlLabel>姓名:</ControlLabel>{' '}
        <FormControl name="UseLicense" onChange={(e) =>{
          this.setState({UseLicense : e.target.value})
        }}/>{"  "}
        <ControlLabel>住址:</ControlLabel>{' '}
        <FormControl name="UseNum" onChange={(e) =>{
          this.setState({UseNum : e.target.value})
        }}/>
        <ControlLabel>身分證字號:</ControlLabel>{' '}
        <FormControl name="UseNum" onChange={(e) =>{
          this.setState({UseNum : e.target.value})
        }}/>如為外籍人士 請填寫居留證號。
        <ControlLabel>電話:</ControlLabel>{' '}
        <FormControl name="UseNum" onChange={(e) =>{
          this.setState({UseNum : e.target.value})
        }}/>
        <ControlLabel>傳真:</ControlLabel>{' '}
        <FormControl name="UseNum" onChange={(e) =>{
          this.setState({UseNum : e.target.value})
        }}/>
    </FormGroup>
    
    <table style={{width:'100%'}}>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
    
    </table>

    <div style={{ maxWidth: 400 , margin: '0 auto 10px' }}>
        <Button bsStyle="primary" style={{height: '50px' ,fontSize: '18px'}} block type="submit" disabled={this.checkButton()}>送出</Button>
    </div>
    </Form>
    </Col>
    </Row>
    </div></>
    }
}
export default UseLinceseApplication