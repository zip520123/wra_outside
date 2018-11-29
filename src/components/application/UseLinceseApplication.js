import React, { Component } from 'react';
import {Button,Checkbox,Row, Col,PageHeader , Form ,FormGroup,FormControl,ControlLabel} from 'react-bootstrap'
import './UseLinceseApplication.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const readOnlyCheckBox = (state) =>{
    return <span style={{fontFamily: "Wingdings"}}>{state ? 'þ' : '¨'}</span>
}
class UseLinceseApplication extends Component {
    constructor(props , context){
        super(props, context)
        this.state = {
        }
    }
    checkButton = () => {
        return false
    }
    printButtonClick = () => {
        const input = document.getElementById('tableDiv')
        html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG' ,2, 2);
            pdf.save("download.pdf");
        })
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
        <FormControl componentClass="select" placeholder="" name="BCDistrict" onChange={e => {this.setState({BCDistrict : e.target.value})}}>
            <option value={null}></option>
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
        <FormControl componentClass="select" placeholder="" name="ACDistrict" onChange={e => {this.setState({ACDistrict : e.target.value})}}>
            <option value={null}></option>
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
    <input type="hidden" name="ProfitReg" value={this.state.ProfitReg ? 1 : 0}/>
    1.營利事業登記
    </Checkbox>
    <Checkbox onClick={e => { this.setState({WaterElec :e.target.checked}) }} inline>
    <input type="hidden" name="WaterElec" value={this.state.WaterElec ? 1 : 0}/>
    2.接自來水、電
    </Checkbox>
    <Checkbox onClick={e => { this.setState({Balcony:e.target.checked}) }} inline>
    <input type="hidden" name="Balcony" value={this.state.Balcony ? 1 : 0}/>
    3.陽台補登錄
    </Checkbox>
    <Checkbox onClick={e => { this.setState({ChangeLic:e.target.checked}) }} inline>
    <input type="hidden" name="ChangeLic" value={this.state.ChangeLic ? 1 : 0}/>
    4.變更使用執照
    </Checkbox>
    <Checkbox onClick={e => { this.setState({PropertyReg:e.target.checked}) }} inline>
    <input type="hidden" name="PropertyReg" value={this.state.PropertyReg ? 1 : 0}/>
    5.產權登記
    </Checkbox>
    <Checkbox onClick={e => { this.setState({Other :e.target.checked}) }} inline>
    <input type="hidden" name="Other" value={this.state.Other ? 1 : 0}/>
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
    <input type="hidden" name="ConOwner" value={this.state.ConOwner ? 1 : 0}/>
    建物所有權狀影本
    </Checkbox>
    <Checkbox onClick={e => { this.setState({Apartment  :e.target.checked}) }} inline>
    <input type="hidden" name="Apartment" value={this.state.Apartment ? 1 : 0}/>
    公寓大廈管理組織報備證明影本
    </Checkbox>
    <Checkbox onClick={e => { this.setState({BuildRegBook:e.target.checked}) }} inline>
    <input type="hidden" name="BuildRegBook" value={this.state.BuildRegBook ? 1 : 0}/>
    建物登記簿謄本
    </Checkbox>
    <Checkbox onClick={e => { this.setState({LawEvidence:e.target.checked}) }} inline>
    <input type="hidden" name="LawEvidence" value={this.state.LawEvidence ? 1 : 0}/>
    法院告訴證明文件
    </Checkbox>
    <Checkbox onClick={e => { this.setState({BuildMeasure:e.target.checked}) }} inline>
    <input type="hidden" name="BuildMeasure" value={this.state.BuildMeasure ? 1 : 0}/>
    建物測量成果圖
    </Checkbox>
    <Checkbox onClick={e => { this.setState({HouseTax:e.target.checked}) }} inline>
    <input type="hidden" name="HouseTax" value={this.state.HouseTax ? 1 : 0}/>
    房屋稅單
    </Checkbox>
    <Checkbox onClick={e => { this.setState({OtherDoc :e.target.checked}) }} inline>
    <input type="hidden" name="OtherDoc" value={this.state.OtherDoc ? 1 : 0}/>
    其他可佐證文件
    </Checkbox>
    </FormGroup>
    
    <FormGroup bsSize="lg" controlId="">
    <h4>影印事項</h4>
    <Checkbox onClick={e => { this.setState({Userecipt :e.target.checked}) }} inline>
    <input type="hidden" name="Userecipt" value={this.state.Userecipt ? 1 : 0}/>
    使用執照存根聯
    </Checkbox>
    </FormGroup>

    <h4>申請人(所有權人)(*為必填欄位)</h4>
    <FormGroup bsSize="lg" controlId="">
        <ControlLabel>*姓名:</ControlLabel>{' '}
        <FormControl name="Name" onChange={(e) =>{
          this.setState({Name : e.target.value})
        }}/>{"  "}
        <ControlLabel>*住址:</ControlLabel>{' '}
        <FormControl name="Address" onChange={(e) =>{
          this.setState({Address : e.target.value})
        }}/>
        <ControlLabel>*身分證字號:</ControlLabel>{' '}
        <FormControl name="Identity" onChange={(e) =>{
          this.setState({Identity : e.target.value})
        }}/>
        <ControlLabel>*電話:</ControlLabel>{' '}
        <FormControl name="Phone" onChange={(e) =>{
          this.setState({Phone  : e.target.value})
        }}/>
        <ControlLabel>傳真:</ControlLabel>{' '}
        <FormControl name="Fax" onChange={(e) =>{
          this.setState({Fax  : e.target.value})
        }}/>
    </FormGroup>

    <h4>代理人(受委託人)</h4>
    <FormGroup bsSize="lg" controlId="">
        <ControlLabel>姓名:</ControlLabel>{' '}
        <FormControl name="ViceName" onChange={(e) =>{
          this.setState({ViceName : e.target.value})
        }}/>{"  "}
        <ControlLabel>住址:</ControlLabel>{' '}
        <FormControl name="ViceAddress" onChange={(e) =>{
          this.setState({ViceAddress : e.target.value})
        }}/>
        <ControlLabel>身分證字號:</ControlLabel>{' '}
        <FormControl name="ViceIdentity" onChange={(e) =>{
          this.setState({ViceIdentity : e.target.value})
        }}/>如為外籍人士 請填寫居留證號。
        <ControlLabel>電話:</ControlLabel>{' '}
        <FormControl name="VicePhone" onChange={(e) =>{
          this.setState({VicePhone  : e.target.value})
        }}/>
        <ControlLabel>傳真:</ControlLabel>{' '}
        <FormControl name="ViceFax" onChange={(e) =>{
          this.setState({ViceFax  : e.target.value})
        }}/>
    </FormGroup>
    
    <div id="tableDiv" style={{width : '780px' , margin:'0 auto'}}>
    <div class="WordSection1" id="WordSection1">
                    <p class="MsoNormal" id="MsoNormal_title">
                    <span>使&nbsp; 用&nbsp; 執&nbsp; 照&nbsp; 
                    存&nbsp; 根&nbsp; 聯&nbsp; 申&nbsp; 請&nbsp; 書</span></p>
                    <p class="MsoNormal" id="MsoNormal_date">
                    <span></span></p>
                    <table class="MsoNormalTable" id="MsoNormalTable" border="1">
                        <tbody>
                            <tr>
                                <td id="building_addreee_btd1" rowspan="2">
                                    建物座落地址
                                </td>
                                
                                <td id="building_addreee_btd2">
                                    整編前
                                </td>
                                <td id="building_addreee_btd3" colspan="8">
                                    <p><span>
                                        &nbsp;{this.state.BCDistrict }區&nbsp;{this.state.BCRoad}&nbsp;路街&nbsp;{this.state.BCSection}&nbsp;段&nbsp;{this.state.BCLane}&nbsp;巷
                                    </span></p>
                                    <p><span>&nbsp;{this.state.BCAlley}&nbsp;弄&nbsp;{this.state.BCNum}&nbsp;號&nbsp;{this.state.BCFloor}&nbsp;樓</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td id="building_addreee_atd1">
                                    整編後
                                </td>  
                                <td id="building_addreee_atd2" colspan="8">
                                    <p><span>
                                        &nbsp;{this.state.ACDistrict}&nbsp;區&nbsp;{this.state.ACRoad}&nbsp;路街&nbsp;{this.state.ACSection}&nbsp;段&nbsp;{this.state.ACLane}&nbsp;巷</span><span lang="EN-US" style={{fontSize:"14.0pt"}}>&nbsp;&nbsp;&nbsp;
                                    </span></p>
                                    <p><span>&nbsp;{this.state.ACAlley }&nbsp;弄</span><span>&nbsp;{this.state.ACNum}&nbsp;號&nbsp;{this.state.ACFloor}&nbsp;樓</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td id="land_address_btd1" rowspan="2">
                                    土地座落
                                </td>
                                <td id="land_address_btd2">
                                    重測前
                                </td>
                                <td id="land_address_btd3" colspan="8">
                                    <p><span>
                                        &nbsp;{this.state.BTSection}&nbsp;段&nbsp;{this.state.BTSmallSec}&nbsp;小段&nbsp;{this.state.BTLocnum}&nbsp;地號
                                    </span></p>
                                </td>
                            </tr>
                            <tr>
                                <td id="land_address_atd1">
                                    重測後
                                </td>
                                <td id="land_address_atd2" colspan="8">
                                <p><span>
                                    &nbsp;{this.state.ATSection}&nbsp;段&nbsp;{this.state.ATSmallSec}&nbsp;小段&nbsp;{this.state.ATLocnum}&nbsp;地號
                                </span></p>
                            </td>
                            </tr>
                            <tr>
                                <td id="apply_usage_td1">
                                    申請用途
                                </td>
                                <td id="apply_usage_td2" colspan="9">
                                    <p id="check_box_1"><span>{readOnlyCheckBox(this.state.ProfitReg)}</span><span id="text_1">1</span><span id="text_2">.</span><span id="text_3">營利事業登記</span><span id="check_box_2">{readOnlyCheckBox(this.state.WaterElec)}</span><span id="text_4">2
                                    </span><span id="text_5">.</span><span id="text_6">接自來水、電</span></p>
                                    <p id="check_box_3"><span>{readOnlyCheckBox(this.state.Balcony)}</span><span id="text_7">3</span><span id="text_8">.</span><span id="text_9">陽台補登錄</span>
                                    <span id="check_box_4">{readOnlyCheckBox(this.state.ChangeLic)}</span><span id="text_10">4</span><span id="text_11">.</span><span id="text_12">變更使用執照</span></p>
                                    <p ><span id="check_box_5">{readOnlyCheckBox(this.state.PropertyReg)}</span><span id="text_13">5</span><span id="text_14">.</span><span id="text_14">產權登記</span>
                                    <span id="check_box_6">{readOnlyCheckBox(this.state.Other)}</span><span id="text_16">6</span><span id="text_17">.</span><span id="text_18">其他：</span><span id="text_19">&nbsp;{this.state.OtherCom}&nbsp;
                                    </span></p>
                                </td>
                            </tr>
                            <tr>
                                <td id="license_number_td1" rowspan="2">
                                    執照字號
                                </td>
                                <td id="license_number_td2" colspan="9">
                                    <span>建照執照（ {this.state.BuildLicende} ）建字第（ {this.state.BuildNum} ）號</span>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="9" id="license_number_td3">
                                    <span>使用執照（ {this.state.UseLicense} ）使字第（ {this.state.UseNum } ）號</span>
                                </td>
                            </tr>
                            <tr>
                                <td id="copy_things_td1">
                                    影印事項
                                </td>
                                <td id="copy_things_td2" colspan="9">
                                    <p id="check_box_7">{readOnlyCheckBox(this.state.Userecipt)}<span id="text_20">使用執照存根聯</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td id="attachment_data_td1">
                                    檢附資料<br />
                                    (本欄申請人不須填寫）
                                </td>
                                <td id="attachment_data_td2" colspan="9">
                                    <p id="check_box_8">{readOnlyCheckBox(this.state.ConOwner)}<span id="text_21">建物所有權狀影本</span>
                                    <span id="check_box_9">{readOnlyCheckBox(this.state.Apartment)}</span><span id="text_22">公寓大廈管理組織報備證明影本</span></p>
                                    <p id="check_box_10">{readOnlyCheckBox(this.state.BuildRegBook)}<span id="text_23">建物登記簿謄本</span>
                                    <span id="check_box_11">{readOnlyCheckBox(this.state.LawEvidence)}</span><span id="text_24">法院告訴證明文件</span></p>
                                    <p id="check_box_12">{readOnlyCheckBox(this.state.BuildMeasure)}<span id="text_25">建物測量成果圖</span>
                                    <span id="check_box_13">{readOnlyCheckBox(this.state.HouseTax)}</span><span id="text_26">房屋稅單</span></p>
                                    <p id="check_box_14">{readOnlyCheckBox(this.state.OtherDoc) }<span id="text_27">其他可佐證文件</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td id="apply_person_td1" rowspan="2">
                                    申請人<br />(所有權人)
                                </td>
                                <td id="apply_person_name1" colspan="2">
                                    姓名及簽章
                                </td>
                                <td id="apply_person_name2">
                                    <p class="MsoNormal"><span>{this.state.Name}</span></p>
                                </td>
                                <td id="apply_person_address1">
                                    住址
                                </td>
                                <td id="apply_person_address2" colspan="5">
                                    <p class="MsoNormal">
                                    <span>{this.state.Address}</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td id="apply_person_id1" colspan="2">
                                    身份證字號
                                </td>
                                <td id="apply_person_id2">
                                    <p class="MsoNormal"><span>{this.state.Identity}</span></p>
                                </td>
                                <td id="apply_person_phone1">
                                    電話
                                </td>
                                <td id="apply_person_phone2">
                                    <p class="MsoNormal" ><span >{this.state.Phone}</span></p>
                                </td>
                                <td id="apply_person_fax1" width="7%" colspan="2">
                                    傳真
                                </td>
                                <td id="apply_person_fax2" colspan="2">
                                    <p class="MsoNormal"><span>{this.state.Fax }</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td id="agent_person_td1" rowspan="2">
                                    代理人<br />(受委託人)
                                </td>
                                <td id="agent_person_name1" colspan="2">
                                    姓名及簽章
                                </td>
                                <td id="agent_person_name2">
                                    <p class="MsoNormal"><span>{this.state.ViceName}</span></p>
                                </td>
                                <td id="agent_person_address1">
                                    住址
                                </td>
                                <td id="agent_person_address2" colspan="5">
                                    <p class="MsoNormal">
                                    <span>{this.state.ViceAddress}</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td id="agent_person_id1" colspan="2">
                                    身份證字號
                                </td>
                                <td id="agent_person_id2">
                                    <p class="MsoNormal"><span>{this.state.ViceIdentity}    </span></p>
                                </td>
                                <td id="agent_person_phone1">
                                    電話
                                </td>
                                <td id="agent_person_phone2">
                                    <p class="MsoNormal" ><span >{this.state.VicePhone }</span></p>
                                </td>
                                <td id="agent_person_fax1" width="7%" colspan="2">
                                    傳真
                                </td>
                                <td id="agent_person_fax2" colspan="2">
                                    <p class="MsoNormal"><span>{this.state.ViceFax }</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="MsoNormal" style={{lineHeight:'28.0pt'}}><span lang="EN-US">&nbsp;</span></p>
        
    
    </div>
    </div>

    <div style={{ maxWidth: 400 , margin: '0 auto 10px' }}>
        <Button bsStyle="primary" style={{height: '50px' ,fontSize: '18px'}} block type="submit" disabled={this.checkButton()}>送出</Button>
        <Button bsSize="large" style={{height: '50px' ,fontSize: '18px'}} onClick={this.printButtonClick} block>
                列印
            </Button>
    </div>
    </Form>
    </Col>
    </Row>
    </div></>
    }
}
export default UseLinceseApplication