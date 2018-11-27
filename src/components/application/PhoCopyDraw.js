import React, { Component } from 'react';
import {Row,Col,PageHeader,Form,ControlLabel,FormControl,FormGroup,Checkbox,Button} from 'react-bootstrap'
import './PhoCopyDraw.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
class PhoCopyDraw extends Component {
    constructor(props , context){
        super(props, context)
        this.state = {
            
        }
    }
    readOnlyCheckBox = (state) =>{
        return <span style={{fontFamily: "Wingdings"}}>{state ? 'þ' : '¨'}</span>
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
    render(){
        return <div className='marginWrap'>
        <Row>
            <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
            <PageHeader style={{textAlign: 'center'}}> 影印圖說申請書
            <small onClick={ this.props.history.goBack }> 回上一頁</small></PageHeader>
            <h4 >建物座落地址</h4>
            <Form style={{fontSize : '18px'}} action= {`${process.env.REACT_APP_DEVELOPMENT_JASON_IP}/api/SewageForm/OwnerLicense`} method="post" accept-charset="UTF-8" inline>
                <FormGroup bsSize="lg" controlId="">
                    <ControlLabel>整編前:</ControlLabel>{' '}
                    <FormControl componentClass="select" placeholder="" name="BCDistrict" onChange={(e)=>{
                        this.setState({BCDistrict : e.target.value})
                    }}>
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

                <h4>影印事項 (至少需選擇一項)</h4>
                <FormGroup bsSize="lg" controlId="">
                    <ControlLabel>建照執照:</ControlLabel>{' '}
                    <FormControl name="BuildLicense" onChange={(e) =>{
                    this.setState({BuildLicense : e.target.value})
                    }}/>{"  "}
                    <ControlLabel>建字號:</ControlLabel>{' '}
                    <FormControl name="BuildNum" onChange={(e) =>{
                    this.setState({BuildNum : e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup bsSize="lg" controlId="">
                    <Checkbox onClick={e => { this.setState({BuildFloorPlan:e.target.checked}) }} inline>
                    建築平面圖
                    <FormControl name="BuildFloor" onChange={(e) =>{
                        this.setState({BuildFloor  : e.target.value})
                        }} />樓
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({BuildStrucPlan :e.target.checked}) }} inline>
                    結構平面圖
                    <FormControl name="BuildStructFloor" onChange={(e) =>{
                        this.setState({BuildStructFloor  : e.target.value})
                        }} />樓
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({BuildFirePlan:e.target.checked}) }} inline>
                    消防平面圖
                    <FormControl name="BuildFireFloor" onChange={(e) =>{
                        this.setState({BuildFireFloor  : e.target.value})
                        }} />樓
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({SewagePlan:e.target.checked}) }} inline>
                    廢污水圖
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({BuildOther :e.target.checked}) }} inline>
                    其他
                    <FormControl name="BuildOtherCom" onChange={(e) =>{
                        this.setState({BuildOtherCom  : e.target.value})
                        }} />
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({BuildAreaCal :e.target.checked}) }} inline>
                    面積計算表
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({BuildLocation :e.target.checked}) }} inline>
                    位置配置圖
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({BuildNamebook :e.target.checked}) }} inline>
                    起造人名冊
                    </Checkbox>
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
                    <Checkbox onClick={e => { this.setState({UseFloorPlan:e.target.checked}) }} inline>
                    建築平面圖
                    <FormControl name="UseFloor" onChange={(e) =>{
                        this.setState({UseFloor  : e.target.value})
                        }} />樓
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({UseCoastDefence :e.target.checked}) }} inline>
                    海防平面圖
                    <FormControl name="UseCoastFloor" onChange={(e) =>{
                        this.setState({UseCoastFloor : e.target.value})
                        }} />樓
                    </Checkbox>
                    
                    <Checkbox onClick={e => { this.setState({UseSewagePlan:e.target.checked}) }} inline>
                    廢污水圖
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({UseOther  :e.target.checked}) }} inline>
                    其他
                    <FormControl name="UseOtherCom" onChange={(e) =>{
                        this.setState({UseOtherCom  : e.target.value})
                        }} />
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({UseAreaCal :e.target.checked}) }} inline>
                    面積計算表
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({UseLocation :e.target.checked}) }} inline>
                    位置配置圖
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({UseNamebook :e.target.checked}) }} inline>
                    起造人名冊
                    </Checkbox>
                </FormGroup>
                <h4>檢附資料(至少需選擇一項)可複選</h4>
                <FormGroup bsSize="lg" controlId="">
                    <Checkbox onClick={e => { this.setState({ProfitReg :e.target.checked}) }} inline>
                    營利事業登記簿
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({BuildOwnPrint :e.target.checked}) }} inline>
                    建物所有權狀影本
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({BuildRegDoc :e.target.checked}) }} inline>
                    建物登記簿謄本正本
                    </Checkbox>
                    <Checkbox onClick={e => { this.setState({BuildMeaRes :e.target.checked}) }} inline>
                    建物測量成果圖
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
                    <FormControl name="Phone " onChange={(e) =>{
                    this.setState({Phone  : e.target.value})
                    }}/>
                    <ControlLabel>傳真:</ControlLabel>{' '}
                    <FormControl name="Fax " onChange={(e) =>{
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
        <Col xs={10} xsOffset={1} md={12} mdOffset={0}>
            <div id="tableDiv" style={{width : '780px' , margin: '0 auto'}}>
        <table id="table_copy" border="1" width="100%">
            <caption style={{textAlign: 'center'}}>影印圖說申請書</caption>
            <tbody>
            <tr>
                <td colSpan="12">受文者：經濟部水利署臺北水源特定區管理局</td>
            </tr>
            <tr>
                <td id="building_address" rowSpan="2">建物座落地址</td>
                <td width="20%">整編前</td>
                <td colSpan="9">
                    <table id="table_building_address_before">
                        <tbody>
                            <tr>
                                <td>{this.state.BCDistrict}區</td>
                                <td>{this.state.BCRoad}路(街)</td>
                                <td>{this.state.BCSection}段</td>
                                <td>{this.state.BCLane}巷</td>
                                <td>{this.state.BCAlley}弄</td>
                                <td>{this.state.BCNum}號</td>
                                <td>{this.state.BCFloor}樓</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>整編後</td>
                <td colSpan="9">
                    <table id="table_building_address_after">
                        <tbody>
                            <tr>
                                <td>{this.state.ACDistrict}區</td>
                                <td>{this.state.ACRoad}路(街)</td>
                                <td>{this.state.ACSection}段</td>
                                <td>{this.state.ACLane}巷</td>
                                <td>{this.state.ACAlley}弄</td>
                                <td>{this.state.ACNum}號</td>
                                <td>{this.state.ACFloor}樓</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td id="land_address" rowSpan="2">土地座落</td>
                <td>重測前</td>
                <td colSpan="9">
                    <table id="table_land_address_before">
                        <tbody>
                            <tr>
                                <td>{this.state.BTSection}段</td>
                                <td>{this.state.BTSmallSec}小段</td>
                                <td>{this.state.BTLocnum}地號</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>重測後</td>
                <td colSpan="9">
                    <table id="table_land_address_after">
                        <tbody>
                            <tr>
                                <td>{this.state.ATSection}段</td>
                                <td>{this.state.ATSmallSec}小段</td>
                                <td>{this.state.ATLocnum}地號</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td id="copy_things" rowSpan="4">影印事項</td>
                <td rowSpan="2">重測前</td>
                <td colSpan="9">&nbsp;&nbsp;建造執照(&nbsp;{this.state.BuildLicense}&nbsp;)
                    &nbsp;&nbsp;&nbsp;&nbsp;建字第(&nbsp;{this.state.BuildNum}&nbsp;)號</td>
            </tr>
            <tr >
                <td colSpan="9">
                    <table id="copy_things_before">
                        <tbody>
                            <tr>
                                <td>
                                    {this.readOnlyCheckBox(this.state.BuildFloorPlan)}
                                    <label>建築平面圖(&nbsp;{this.state.BuildFloorPlan && this.state.BuildFloor}&nbsp;)樓</label><br />
                                    {this.readOnlyCheckBox(this.state.BuildStrucPlan)}
                                    <label>結構平面圖(&nbsp;{this.state.BuildStrucPlan && this.state.BuildStructFloor}&nbsp;)樓</label><br />
                                    {this.readOnlyCheckBox(this.state.BuildFirePlan)}
                                    <label>消防平面圖(&nbsp;{this.state.BuildFirePlan && this.state.BuildFireFloor}&nbsp;)樓</label><br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {this.readOnlyCheckBox(this.state.SewagePlan)}
                                    <label>廢汙水圖</label><br />
                                    {this.readOnlyCheckBox(this.state.BuildAreaCal)}
                                    <label>面積計算表</label><br />
                                    {this.readOnlyCheckBox(this.state.BuildNamebook)}
                                    <label>起造人名冊</label>
                                </td>
                                <td>
                                    {this.readOnlyCheckBox(this.state.BuildOther)}
                                    <label>其他(&nbsp;{this.state.BuildOther && this.state.BuildOtherCom}&nbsp;)</label><br />
                                    {this.readOnlyCheckBox(this.state.BuildLocation)}
                                    <label>位置配置圖</label>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            
            <tr>
                <td rowSpan="2">重測後</td>
                <td colSpan="9">&nbsp;&nbsp;使用執照(&nbsp;{this.state.UseLicense}&nbsp;)
                    &nbsp;&nbsp;&nbsp;&nbsp;使字第(&nbsp;{this.state.UseNum}&nbsp;)號</td>
            </tr>
            <tr>
                <td colSpan="9">
                    <table id="copy_things_after">
                        <tbody>
                            <tr>
                                <td>
                                    {this.readOnlyCheckBox(this.state.UseFloorPlan)}
                                    <label>建築平面圖(&nbsp;{this.state.UseFloorPlan && this.state.UseFloor}&nbsp;)樓</label><br />
                                    {this.readOnlyCheckBox(this.state.UseCoastDefence )}
                                    <label>海防平面圖(&nbsp;{this.state.UseCoastDefence && this.state.UseCoastFloor}&nbsp;)樓</label><br />
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {this.readOnlyCheckBox(this.state.UseSewagePlan)}
                                    <label>廢汙水圖</label><br />
                                    {this.readOnlyCheckBox(this.state.UseAreaCal)}
                                    <label>面積計算表</label><br />
                                    {this.readOnlyCheckBox(this.state.UseNamebook)}
                                    <label>起造人名冊</label>
                                </td>
                                <td>
                                    {this.readOnlyCheckBox(this.state.UseOther)}
                                    <label>其他(&nbsp;{this.state.UserOther && this.state.UseOtherCom }&nbsp;)</label><br />
                                    {this.readOnlyCheckBox(this.state.UseLocation)}
                                    <label>位置配置圖</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td id="attachment_data">檢附資料</td>
                <td colSpan="6" >
                    {this.readOnlyCheckBox(this.state.ProfitReg)}
                    <label>營利事業登記簿</label><br />
                    {this.readOnlyCheckBox(this.state.BuildOwnPrint)}
                    <label>建物所有權狀影本</label><br />
                    {this.readOnlyCheckBox(this.state.BuildRegDoc)}
                    <label>建物登記簿謄本正本</label><br />
                    {this.readOnlyCheckBox(this.state.BuildMeaRes)}
                    <label>建物測量成果圖</label>
                </td>
                
                <td >領件簽章</td>
                <td colSpan="2">&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</td>
            </tr>
            <tr>
                <td rowSpan="3" id="apply_person">申請人<br />(所有權人)</td>
                <td >姓名及簽章</td>
                <td colSpan="3">{this.state.Name}</td>
                <td colSpan="2">身分證字號</td>
                <td colSpan="4">{this.state.Identity}</td>
            </tr>
            <tr>
                <td >連絡電話</td>
                <td colSpan="3">{this.state.Phone}</td>
                <td colSpan="2">傳真</td>
                <td colSpan="4">{this.state.Fax}</td>
            </tr>
            <tr>
                <td >住址</td>
                <td colSpan="10">{this.state.Address}</td>
            </tr>
            <tr>
                <td rowSpan="3" id="agent_person">代理人<br />(受委託人)</td>
                <td>姓名及簽章</td>
                <td colSpan="3">{this.state.ViceName}</td>
                <td colSpan="2">身分證字號</td>
                <td colSpan="4">{this.state.ViceIdentity}</td>
            </tr>
            <tr>
                <td>連絡電話</td>
                <td colSpan="3">{this.state.VicePhone}</td>
                <td colSpan="2">傳真</td>
                <td colSpan="4">{this.state.ViceFax }</td>
            </tr>
            <tr>
                <td >住址</td>
                <td colSpan="10">{this.state.ViceAddress}</td>
            </tr>
            </tbody>
        </table>
        <p>掛號號碼：</p>
        </div>
        </Col>
        <div style={{ maxWidth: 400 , margin: '0 auto 10px' }}>
            <Button bsStyle="primary" style={{height: '50px' ,fontSize: '18px'}} block type="submit" disabled={this.checkButton()}>送出</Button>
            <Button bsSize="large" style={{height: '50px' ,fontSize: '18px'}} onClick={this.printButtonClick} block>
                列印
            </Button>
        </div>
                    
            </Form>
            </Col>
        </Row>
        </div>
    }
}
export default PhoCopyDraw