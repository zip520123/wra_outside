import React, { Component } from 'react';
import {Radio,Table ,Form,FormGroup,ControlLabel,FormControl, Button,PageHeader ,Checkbox, Row , Col } from 'react-bootstrap'
import { FieldGroup } from './SewageApplication'
class EnvEduApplication extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          value: '',
          isAgreeRole : false
        };
    }
    checkButton = () => {
      return !(this.state.Department && this.state.Name && this.state.CellPhone && this.state.Email && this.state.TimeRegister && this.state.isAgreeRole)
    }
    render() {
        return <><div className='marginWrap'>
        <Row>
        <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
        <PageHeader style={{textAlign: 'center'}}> 臺北水源特定區環境教育學習中心 <br />
環境教育課程活動申請表 <small onClick={ this.props.history.goBack }>回上一頁</small></PageHeader>
<h2 style={{textAlign: 'center'}}>（以下欄位請詳細填寫，謝謝）</h2>
<Form action= {`${process.env.REACT_APP_DEVELOPMENT_JASON_IP}/api/SewageForm/Environment`} method="post" accept-charset="UTF-8" horizontal>
<FieldGroup id="Department" type="text" label="申請單位名稱" required={true} onChange={e=>{
              this.setState({Department : e.target.value})
            }}/>
<FieldGroup id="Name" type="text" label="聯絡人姓名" required={true} onChange={e=>{
              this.setState({Name : e.target.value})
            }}/>
<FieldGroup id="JobTitle" type="text" label="職稱" />
<FieldGroup id="Phone" type="text" label="聯絡電話" />
<FieldGroup id="CellPhone" type="text" label="行動電話" required={true} onChange={e=>{
              this.setState({CellPhone : e.target.value})
            }}/>
<FieldGroup id="Email" type="text" label="Email" required={true} onChange={e=>{
              this.setState({Email : e.target.value})
            }}/>
<FieldGroup id="Fax" type="text" label="傳真" />
<FieldGroup id="Address" type="text" label="聯絡地址" />
{/* <FieldGroup id="VisitTime" type="text" label="參訪時間" required={true}/> */}
<FormGroup style={{fontSize: '18px'}} bsSize="lg" controlId="date">
<Col componentClass={ControlLabel} sm={2}>
參訪時間<small style={{color :'red'}} >*</small>
      </Col>
      <Col sm={10}>
        <FormControl name="people" onChange={e =>{
          this.setState({people : e.target.value})
        }}/>
        <FormControl.Feedback />
      </Col>
</FormGroup>
{/* <FieldGroup id="GroupType" type="text" label="團體性質" required={true}/> */}
<FormGroup style={{fontSize: '18px'}} bsSize="lg" controlId="GroupType">
<Col componentClass={ControlLabel} sm={2}>
團體性質<small style={{color :'red'}} >*</small>
      </Col>
      <Col sm={10}>
      <Radio name="GroupType" value="一般民眾" inline onChange={e=>{
              this.setState({GroupType : e.target.value})
            }} >
            一般民眾
            </Radio>{' '}
            <Radio name="GroupType" value="機關" inline onChange={e=>{
              this.setState({GroupType : e.target.value})
            }} >
            機關
            </Radio>{' '}
            <Radio name="GroupType" value="學校" inline onChange={e=>{
              this.setState({GroupType : e.target.value})
            }} >
            學校
            </Radio>
            <Radio name="GroupType" value="團體" inline onChange={e=>{
              this.setState({GroupType : e.target.value})
            }} >
            團體
            </Radio>
      </Col>

</FormGroup>

{/* <FieldGroup id="Course" type="text" label="報名課程活動" required={true}/> */}
<FormGroup style={{fontSize: '18px'}} bsSize="lg" controlId="Course">
<Col componentClass={ControlLabel} sm={2}>
報名課程活動<small style={{color :'red'}} >*</small>
      </Col>
      <Col sm={10}>
      <Radio name="Course" value="課程方案一：4小時水源地守護者完整課程 "  onChange={e=>{
              this.setState({Course : e.target.value})
            }} >
            課程方案一：4小時水源地守護者完整課程 
            </Radio>{' '}
            <Radio name="Course" value="課程方案二：2小時坪林污水處理廠 "  onChange={e=>{
              this.setState({Course : e.target.value})
            }} >
            課程方案二：2小時坪林污水處理廠 
            </Radio>{' '}
            <Radio name="Course" value="課程方案三：2小時仁里坂13、14號水質淨化示範區"  onChange={e=>{
              this.setState({Course : e.target.value})
            }} >
            課程方案三：2小時仁里坂13、14號水質淨化示範區
            </Radio>
      </Col>

</FormGroup>
<FieldGroup id="GroupName" type="text" label="參訪團體名稱" />
<FieldGroup id="People" type="text" label="人數" />
{/* <FieldGroup id="TimeRegister" type="text" label="時數登記" /> */}
<FormGroup style={{fontSize: '18px'}} bsSize="lg" controlId="TimeRegister">
      <Col componentClass={ControlLabel} sm={2}>
      時數登記
      </Col>
      <Col sm={10}>
      <Radio name="TimeRegister" value="課程方案一：4小時水源地守護者完整課程 " inline onChange={e=>{
              this.setState({TimeRegister : e.target.value})
            }} >
            需要 
      </Radio>{' '}
      <Radio name="TimeRegister" value="課程方案二：2小時坪林污水處理廠 " inline onChange={e=>{
        this.setState({TimeRegister : e.target.value})
      }} >
      不需要
      </Radio>{' '}
            
      </Col>

</FormGroup>


<h2>附註</h2>
<ol style={{fontSize: '18px'}}>
    <li>本學習中心開放時間為上班日上午9時至下午5時，接受20人至40人之團體預約導覽。請於參觀日20天前提出申請，本局將依申請順序安排導覽解說。</li>
    <li>為安全考量，坪林污水處理廠戶外廠區不適合小學三年級以下兒童參訪。</li>
    <li>通往仁里坂水質淨化示範區之道路較狹窄，請安排中型巴士前往參訪。</li>
    <li>本學習中心免費參訪，參訪人員之平安保險等請申請單位自行辦理。</li>
    <li>行程前請詳閱「臺北水源特定區環境教育學習中心注意事項」（如附件）。</li>
    <li>經本局同意申請之團體，當日課程所攝之照片，皆同意授權本局非商業使用。</li>
    <li><Checkbox onClick={e => { this.setState({isAgreeRole : e.target.checked}) }} validationState={ 
      this.state.isAgreeRole ? 'success' : 'error'
    }>
    以上內容已詳閱 並同意以上服務條款
    </Checkbox></li>
</ol>

<Table striped bordered condensed hover style={{fontSize: '18px'}}>
  <thead>
    <tr>
      <th>項 目</th>
      <th>注 意 事 項</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1.參訪範圍</td>
      <td>為維護民眾安全，本學習中心戶外學習地點包含坪林污水處理廠、仁里坂13號及14號水質淨化示範區等地，請配合解說人員引導，勿擅自行動。</td>
    </tr>
    <tr>
      <td>2.注意蜂蛇</td>
      <td>臺北水源特定區生態資源豐富，夏秋季常見蜂類及毒蛇出沒，若遭螫咬恐危及生命，請參訪者注意自身安全，避免至危險區域；如遇緊急狀況切勿驚慌，請聽從本學習中心解說人員指揮。</td>
    </tr>
    <tr>
      <td>3.天雨路滑</td>
      <td>由於本學習中心位處山區，氣候潮濕易下雨，地面濕滑，為避免發生意外，參訪時請勿奔跑追逐，以免摔倒。</td>
    </tr>
    <tr>
      <td>4.兒童安全</td>
      <td>請家長或老師隨時注意隨行兒童之安全並維持秩序，請勿使兒童進入危險區域以免發生意外。</td>
    </tr>
    <tr>
      <td>5.團體行動</td>
      <td>請配合以團體行動為主，避免落單發生危險。</td>
    </tr>
    <tr>
      <td>6.行程調整</td>
      <td>為維護參訪者安全，本學習中心視天候狀況得彈性變更參訪行程及內容，尚請見諒。</td>
    </tr>
    <tr>
      <td>7.愛惜公物</td>
      <td>為維護學習中心各項設施及愛護水源區生態環境，請愛惜公物並請勿攀折或踐踏花木。</td>
    </tr>
    <tr>
      <td>8.維護整潔</td>
      <td>為維護環境整潔及其他參訪者權益，請勿於學習中心內飲食、嚼食口香糖等，並請將垃圾帶離。</td>
    </tr>
    <tr>
      <td>9.物品隨同</td>
      <td>請隨時注意保管隨身攜帶之物品，以免物品遺失。</td>
    </tr>
    <tr>
      <td>10.其 他</td>
      <td>勿攜寵物，建議著輕便服裝，並請自備飲水、遮陽用具及雨具。</td>
    </tr>
  </tbody>
</Table>
<div style={{ maxWidth: 400 , margin: '0 auto 10px' }}>
        <Button bsStyle="primary"  style={{height: '50px' ,fontSize: '18px'}} block type="submit" disabled={this.checkButton()} >送出</Button>
      </div>
        </Form></Col>
        </Row>
        </div></>
    }
}
export default EnvEduApplication