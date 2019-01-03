import React, { Component } from 'react';
import {Button,Row, Col,PageHeader , Form ,FormGroup,FormControl,ControlLabel, Modal} from 'react-bootstrap'
import './LegalLandApp.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import LegalLandAppSub1 from './LegalLandAppSub1'
import LegalLandAppSub2 from './LegalLandAppSub2'

class LegalLandApp extends Component {
    constructor(props , context){
        super(props, context)
        this.state = {
            showCheckModal : false
        }

    }
    checkButton = () => {
        return false
    }
    printButtonClick = (id) => {
        const input = document.getElementById(id)
        html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({format :[400,260]});
            pdf.addImage(imgData, 'PNG' ,2, 2);
            pdf.save("download.pdf");
        })
    }
    showModal = () => {
        this.setState({showCheckModal : true})
    }
    closeModal = () => {
        this.setState({showCheckModal : false})
    }
    modalSubmit = () => {
        let form = document.getElementById('form') 
        form.submit()
    }

    render(){
        return <><div className='marginWrap'>
            <Row>
                <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
                <PageHeader style={{textAlign: 'center'}}> 法定空地分割證明申請書
 <small onClick={ this.props.history.goBack }> 回上一頁</small></PageHeader>

                <h4>申請人</h4>
                    <Form id="form" style={{fontSize : '18px'}} action= {`${process.env.REACT_APP_DEVELOPMENT_JASON_IP}/api/SewageForm/EmptyLocationForm`} method="post" accept-charset="UTF-8" inline>
                        <FormGroup bsSize="lg" controlId="" >
                            <ControlLabel >*姓名:</ControlLabel>{' '}
                            <FormControl name="Name" onChange={(e) =>{
                              this.setState({Name : e.target.value})
                            }} />等
                            <FormControl name="People" onChange={(e) =>{
                              this.setState({People : e.target.value})
                            }} />人
                        </FormGroup>
                        <br />
                        <FormGroup bsSize="lg" controlId="">
                            <ControlLabel>*住址:</ControlLabel>{' '}
                            <FormControl name="Address" onChange={(e) =>{
                              this.setState({Address : e.target.value})
                            }}/>
                        </FormGroup>
                        <br />
                        <FormGroup bsSize="lg" controlId="">
                            <ControlLabel>*身分證字號:</ControlLabel>{' '}
                            <FormControl name="Identity" onChange={(e) =>{
                                this.setState({Identity : e.target.value})
                            }}/>
                        </FormGroup>
                        <br />
                        <FormGroup bsSize="lg" controlId="">
                            <ControlLabel>*電話:</ControlLabel>{' '}
                            <FormControl name="Phone" onChange={(e) =>{
                                this.setState({Phone  : e.target.value})
                            }}/>
                        </FormGroup>
                        <br />
                        <FormGroup bsSize="lg" controlId="">
                            <ControlLabel>出生年月日</ControlLabel>{' '}
                            <ControlLabel>民國</ControlLabel>
                            <FormControl componentClass="select" placeholder="" name="BirthdayYear" onChange={(e)=>{
                        this.setState({BirthdayYear : e.target.value})
                    }}>
                                <option value={null}></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                                <option value="51">51</option>
                                <option value="52">52</option>
                                <option value="53">53</option>
                                <option value="54">54</option>
                                <option value="55">55</option>
                                <option value="56">56</option>
                                <option value="57">57</option>
                                <option value="58">58</option>
                                <option value="59">59</option>
                                <option value="60">60</option>
                                <option value="61">61</option>
                                <option value="62">62</option>
                                <option value="63">63</option>
                                <option value="64">64</option>
                                <option value="65">65</option>
                                <option value="66">66</option>
                                <option value="67">67</option>
                                <option value="68">68</option>
                                <option value="69">69</option>
                                <option value="70">70</option>
                                <option value="71">71</option>
                                <option value="72">72</option>
                                <option value="73">73</option>
                                <option value="74">74</option>
                                <option value="75">75</option>
                                <option value="76">76</option>
                                <option value="77">77</option>
                                <option value="78">78</option>
                                <option value="79">79</option>
                                <option value="80">80</option>
                                <option value="81">81</option>
                                <option value="82">82</option>
                                <option value="83">83</option>
                                <option value="84">84</option>
                                <option value="85">85</option>
                                <option value="86">86</option>
                                <option value="87">87</option>
                                <option value="88">88</option>
                                <option value="89">89</option>
                                <option value="90">90</option>
                                <option value="91">91</option>
                                <option value="92">92</option>
                                <option value="93">93</option>
                                <option value="94">94</option>
                                <option value="95">95</option>
                                <option value="96">96</option>
                                <option value="97">97</option>
                                <option value="98">98</option>
                                <option value="99">99</option>
                                <option value="100">100</option>
                                <option value="101">101</option>
                                <option value="102">102</option>
                                <option value="103">103</option>
                                <option value="104">104</option>
                                <option value="105">105</option>
                                <option value="106">106</option>
                                <option value="107">107</option>
                            </FormControl>年
                            <FormControl componentClass="select" placeholder="" name="BirthdayMonth" onChange={(e)=>{
                        this.setState({BirthdayMonth : e.target.value})
                    }}>
                                <option value={null}></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </FormControl>月
                            <FormControl componentClass="select" placeholder="" name="BirthdayDay" onChange={(e)=>{
                        this.setState({BirthdayDay : e.target.value})
                    }}>
                                <option value={null}></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </FormControl>日
                        </FormGroup>
                        <h4>建築地點</h4>
                        <ControlLabel>*地號</ControlLabel>{' '}
                    <FormControl componentClass="select" placeholder="" name="LocationDistrict" onChange={e => {this.setState({LocationDistrict  : e.target.value})}}>
                        <option value={null}></option>
                        <option value="新店">新店</option>
                        <option value="雙溪">雙溪</option>
                        <option value="石碇">石碇</option>
                        <option value="坪林">坪林</option>
                        <option value="烏來">烏來</option>
                    </FormControl>區
                    <FormControl name="LocationSection" onChange={(e) =>{
                    this.setState({LocationSection  : e.target.value})
                    }}/>段
                    <FormControl name="LocationSmallSec" onChange={(e) =>{
                    this.setState({LocationSmallSec : e.target.value})
                    }}/>小段
                    <FormControl name="LocationNum" onChange={(e) =>{
                    this.setState({LocationNum : e.target.value})
                    }}/>地號
                    <FormControl name="LocationDen" onChange={(e) =>{
                    this.setState({LocationDen : e.target.value})
                    }}/>等
                    <FormControl name="LocationBi" onChange={(e) =>{
                    this.setState({LocationBi : e.target.value})
                    }}/>筆
                    <br />
                    <ControlLabel>*地址</ControlLabel>{' '}
                    <ControlLabel>新北市</ControlLabel>
                    <FormControl componentClass="select" placeholder="" name="AddressDistrict" onChange={e => {this.setState({AddressDistrict  : e.target.value})}}>
                        <option value={null}></option>
                        <option value="新店">新店</option>
                        <option value="雙溪">雙溪</option>
                        <option value="石碇">石碇</option>
                        <option value="坪林">坪林</option>
                        <option value="烏來">烏來</option>
                    </FormControl>區
                    <FormControl name="AddressRoad" onChange={(e) =>{
                    this.setState({AddressRoad : e.target.value})
                    }}/>路
                    <FormControl name="AddressLane" onChange={(e) =>{
                    this.setState({AddressLane : e.target.value})
                    }}/>巷
                    <FormControl name="AddressNum" onChange={(e) =>{
                    this.setState({AddressNum : e.target.value})
                    }}/>號
                    
                    <br /><ControlLabel>*使用分區或編(指)定用途:</ControlLabel>
                    <FormControl name="Purpose" onChange={(e) =>{
                    this.setState({Purpose : e.target.value})
                    }}/>
                    <br /><ControlLabel>*原使用執照字號:</ControlLabel>
                    <FormControl name="LicenseNum" onChange={(e) =>{
                    this.setState({LicenseNum : e.target.value})
                    }}/>
                    <h4>基地面積</h4>
                    <ControlLabel>*騎樓地</ControlLabel>
                    <FormControl name="Arcade" onChange={(e) =>{
                    this.setState({Arcade : e.target.value})
                    }}/>
                    <br />
                    <ControlLabel>*現有空地面積(m2)</ControlLabel>
                    <FormControl name="NowArea" onChange={(e) =>{
                    this.setState({NowArea : e.target.value})
                    }}/>
                    <br />
                    <ControlLabel>*建築面積(m2)</ControlLabel>
                    <FormControl name="BuildArea" onChange={(e) =>{
                    this.setState({BuildArea : e.target.value})
                    }}/>
                    <br />
                    <ControlLabel>*法定空地面積(m2)</ControlLabel>
                    <FormControl name="LawArea" onChange={(e) =>{
                    this.setState({LawArea : e.target.value})
                    }}/>
                    <br />
                    <ControlLabel>*合計(m2)</ControlLabel>
                    <FormControl name="TotalArea" onChange={(e) =>{
                    this.setState({TotalArea : e.target.value})
                    }}/>
                    <br />
                    <ControlLabel>*建蔽率%</ControlLabel>
                    <FormControl name="AreaRatio" onChange={(e) =>{
                    this.setState({AreaRatio : e.target.value})
                    }}/>
                    <br />
                    <ControlLabel>備註事項</ControlLabel>
                    <FormControl name="Remark" onChange={(e) =>{
                    this.setState({Remark : e.target.value})
                    }}/>
                    <Col xs={10} xsOffset={1} md={12} mdOffset={0}>
                    <hr/>
                        <div id="tableDiv" style={{width : '780px' , margin: '0 auto'}}>
                        <table class="Space_division_table" id="Space_division_table" border="1">
                <tbody>
                    <tr>
                        <td id="Space_division_title" colspan="14" rowspan="2">
                            <p class="MsoNormal">
                            <span>法 定 空 地 分 割 證 明 申 請 書</span></p>
                            <p id="date" class="MsoNormal">{(new Date()).getYear() + 1900}
                            <span>年<span >&nbsp;{(new Date()).getMonth() + 1}&nbsp;</span>月<span>&nbsp;{(new Date()).getDate()}&nbsp;</span>日</span></p></td>
                        <td id="receive_number1">
                            <p><span>收文字號</span></p>
                        </td>
                        <td colspan="3" id="receive_number2">
                            <p class="MsoNormal"><span>＊第<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>號</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td id="certificate_number1">
                            <p><span>發證字號</span></p>
                        </td>
                        <td id="certificate_number2" colspan="3">
                            <p class="MsoNormal"><span>＊第<span lang="EN-US">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>號</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td id="audit_signature" rowspan="6">
                            <p><span>審核簽章</span></p>
                        </td>
                        <td id="instruction1" colspan="5" rowspan="3">
                            <p><span>批<span>&nbsp;</span>示</span></p>
                        </td>
                        <td id="instruction2" rowspan="3">
                            <p class="MsoNormal"><span>※</span></p>
                        </td>
                        <td id="review_project" colspan="10">
                            <p class="MsoNormal"><b>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                            <span>審<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>查<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>項<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>目</span></b></p></td>
                        <td id="review_result">
                            <p class="MsoNormal">
                            <span>&nbsp; </span><b>
                            <span>審 查 結 果</span></b></p>
                        </td>
                        </tr>
                        <tr>
                            <td id="instruction3" colspan="10">
                            <p class="MsoNormal"><b>
                            <span>法定空地與建築物所佔地面連接寬度足夠。</span></b></p>
                        </td>
                        <td id="instruction4" >
                            <p class="MsoNormal"><span>＊</span></p>
                        </td>
                        </tr>
                        <tr>
                            <td id="instruction5" colspan="10">
                            <p class="MsoNormal"><b>
                            <span>建蔽率合於規定</span><span>（或<span>&nbsp; </span>年<span>&nbsp;
                            </span>月<span>&nbsp; </span>日前已領建照）</span></b></p>
                        </td>
                        <td id="instruction6">
                            <p class="MsoNormal"><span>＊</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td id="review_allow1" colspan="5" rowspan="2" >
                            <p class="MsoNormal"><span>覆<span>&nbsp;
                            </span>核</span></p>
                        </td>
                        <td id="review_allow2" rowspan="2">
                            <p class="MsoNormal"><span>※</span></p>
                        </td>
                        <td id="review_allow3" colspan="10">
                            <p class="MsoNormal"><b>
                            <span>基地均連接建築線並得以單獨申請建築。</span></b></p>
                        </td>
                            <td id="review_allow4">
                            <p class="MsoNormal"><span>＊</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="10" id="review_allow5">
                            <p class="MsoNormal"><b>
                            <span>建築物均具獨立出入口。</span></b></p>
                        </td>
                            <td id="review_allow6">
                            <p class="MsoNormal"><span>＊</span></p>
                        </td>
                        </tr>
                    <tr>
                        <td id="undertaker1" colspan="5">
                            <p class="MsoNormal"><span>承 辦 人</span></p>
                        </td>
                        <td id="undertaker2">
                            <p class="MsoNormal"><span>※</span></p>
                        </td>
                        <td id="undertaker3" colspan="10">
                            <p class="MsoNormal"><b>
                            <span>畸零地已協議調整地形或合併使用。</span></b></p>
                        </td>
                        <td id="undertaker4">
                            <p class="MsoNormal"><span>＊</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td id="text" colspan="18">
                            <p class="MsoNormal"><span>
                            下列基地申請發給法定空地准予分割證明。<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>此致<span>&nbsp; </span>經濟部水利署</span></p>
                            <p class="MsoNormal"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span><span>台北水源特定區管理局</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td id="attached_data1" colspan="4" rowspan="2">
                            <p class="MsoNormal">
                            <span>
                            </span><span>檢附文件</span></p>
                            <p class="MsoNormal">
                            <span>及書圖</span></p>
                        </td>
                        <td id="attached_data2" colspan="4">
                            <p class="MsoNormal">
                            <span>1.</span><span>使用執照謄本<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span></span>
                            <span>&nbsp;</span><span>
                            </span><span>&nbsp;<span>&nbsp;&nbsp;</span></span><span>份</span></p>
                        </td>
                        <td id="attached_data3" colspan="6">
                            <p class="MsoNormal">
                            <span>2.</span><span>擬分割圖<span>&nbsp;&nbsp;&nbsp;
                            </span></span><span>&nbsp;&nbsp;&nbsp;
                            </span>
                            <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>份</span></p>
                        </td>
                        <td id="attached_data4" colspan="4">
                            <p class="MsoNormal">
                            <span>3.</span><span>分割示意圖<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span></span><span>&nbsp;&nbsp;
                            </span><span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>份</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td id="attached_data5" colspan="4">
                            <p class="MsoNormal">
                            <span>4.</span><span>成立協議證明文件<span>&nbsp;&nbsp;
                            </span></span><span>&nbsp;&nbsp; </span>
                            <span>&nbsp;&nbsp;&nbsp;</span><span>份</span></p>
                        </td>
                        <td id="attached_data6" colspan="6">
                            <p class="MsoNormal">
                            <span>5.</span><span>建造執照<span>&nbsp;&nbsp;&nbsp;&nbsp;
                            </span></span><span>&nbsp; </span>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>份</span></p>
                        </td>
                        <td id="attached_data7" colspan="4">
                            <p class="MsoNormal">
                            <span>6.</span><span>其他<span>&nbsp;&nbsp;&nbsp;
                            </span></span><span>&nbsp;</span><span><span>&nbsp;&nbsp; 
                            &nbsp;</span></span><span>&nbsp;&nbsp;</span><span>份</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td id="apply_person" colspan="2" rowspan="3">
                            <p class="MsoNormal">
                            <span>申請人</span></p>
                        </td>
                        <td id="name1" colspan="3">
                            <p class="MsoNormal"><span>姓名</span></p>
                        </td>
                        <td id="name2" width="243" colspan="5">
                            <p class="MsoNormal">
                            <span>{this.state.Name}</span><span> 等<span>{this.state.People}</span> 人（如附名冊）</span></p>
                        </td>
                        <td id="birth1">
                            <p class="MsoNormal"><span>出生</span></p>
                            <p class="MsoNormal"><span>
                            年月日</span></p>
                        </td>
                        <td id="birth2" colspan="5">
                            <p class="MsoNormal">
                            <span>{this.state.BirthdayYear}年{this.state.BirthdayMonth}月{this.state.BirthdayDay}日</span></p>
                        </td>
                        <td id="space" colspan="2" rowspan="3">
                            <p class="MsoNormal">
                            <span>
                            &nbsp;</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td id="idnumber1" colspan="3">
                            <p class="MsoNormal"><span>身分證</span></p>
                            <p class="MsoNormal"><span>統一編號</span></p>
                        </td>
                        <td id="idnumber2" colspan="5">
                            <p class="MsoNormal"><span>{this.state.Identity}</span>
                            <span></span></p>
                        </td>
                        <td id="phone1">
                            <p class="MsoNormal"><span>電話</span></p>
                        </td>
                        <td id="phone2" colspan="5">
                            <p class="MsoNormal"><span> {this.state.Phone }</span><span></span></p>
                        </td>
                    </tr>
                    <tr>
                        <td id="address1" colspan="3">
                            <p class="MsoNormal"><span>住址</span></p>
                        </td>
                        <td id="address2" colspan="11">
                            <p class="MsoNormal"><span> {this.state.Address} </span><span>&nbsp;</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td id="buliding_address" colspan="2" rowspan="2">
                            <p class="MsoNormal">
                            <span>建築地點</span></p>
                        </td>
                        <td id="land_number1" colspan="3">
                            <p class="MsoNormal">
                            <span>地號</span></p>
                        </td>
                        <td id="land_number2" colspan="13">
                            <p class="MsoNormal">
                            新北市&nbsp;{this.state.LocationDistrict}區
                            &nbsp;{this.state.LocationSection}段&nbsp;{this.state.LocationSmallSec}
                             小段&nbsp;{this.state.LocationNum}地號&nbsp;{this.state.LocationDen}等&nbsp;{this.state.LocationBi}筆</p>
                        </td>
                    </tr>
                    <tr>
                        <td id="land_address1" width="63" colspan="3">
                            <p class="MsoNormal">
                            <span>地址</span></p>
                        </td>
                        <td id="land_address2" colspan="13">
                            <p class="MsoNormal">新北市 
                            &nbsp;{this.state.AddressDistrict}區&nbsp;{this.state.AddressRoad}路&nbsp;
                            {this.state.AddressLane}巷&nbsp;{this.state.AddressNum}號</p>
                        </td>
                    </tr>
                    <tr>
                        <td id="specified_use1" colspan="5">
                            <p class="MsoNormal">
                            <span>使用分區或編（指）定用途</span></p>
                        </td>
                        <td id="specified_use2" colspan="4">
                            <p class="MsoNormal">
                            <span>&nbsp;{this.state.Purpose}</span></p>
                        </td>
                        <td id="original_license_number1" colspan="4">
                            <p class="MsoNormal">
                            <span>原使用執照字號</span></p>
                        </td>
                        <td id="original_license_number2" colspan="5">
                            <p class="MsoNormal">
                            <span>北水使字第<span>&nbsp;{this.state.LicenseNum}
                            </span>號</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td id="base_area" width="34" colspan="3" rowspan="3">
                            <p class="MsoNormal">
                            <span>基地面積</span></p>
                        </td>
                        <td id="arcade1" colspan="2">
                            <p class="MsoNormal"><span>
                            騎樓地</span></p>
                        </td>
                        <td id="arcade2" colspan="4">
                            <p class="MsoNormal">
                            <span>&nbsp;{this.state.Arcade}</span></p>
                        </td>
                        <td id="existing_space1" colspan="3">
                            <p class="MsoNormal"><span>現有空地</span></p>
                            <p class="MsoNormal"><span>面積</span></p>
                        </td>
                        <td id="existing_space2" colspan="6">
                            <p class="MsoNormal">
                            <span>{this.state.NowArea} ㎡</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td id="buliding_area1" colspan="2">
                            <p class="MsoNormal" ><span>建築</span></p>
                            <p class="MsoNormal"><span>面積</span></p>
                        </td>
                        <td id="buliding_area2" colspan="4">
                            <p class="MsoNormal">
                            <span>{this.state.BuildArea} ㎡</span></p>
                        </td>
                        <td id="statutory_space1" colspan="3">
                            <p class="MsoNormal"><span>法定空地</span></p>
                            <p class="MsoNormal"><span>面積</span></p>
                        </td>
                        <td id="statutory_space2" colspan="6">
                            <p class="MsoNormal">
                            <span>{this.state.LawArea} ㎡</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td id="total1" colspan="2">
                            <p class="MsoNormal"><span>合計</span></p>
                        </td>
                        <td id="total2" colspan="4">
                            <p class="MsoNormal">
                            <span>{this.state.TotalArea } ㎡</span></p>
                        </td>
                        <td id="construction_rate1" colspan="3">
                            <p class="MsoNormal"><span>建蔽率</span></p>
                        </td>
                        <td id="construction_rate2" colspan="6">
                            <p class="MsoNormal">
                            <span>{this.state.AreaRatio} %</span></p>
                        </td>
                        </tr>
                        <tr>
                            <td id="remark1" colspan="3">
                            <p class="MsoNormal">
                            <span>備註事項</span></p>
                            </td>
                            <td id="remark2" colspan="15">
                                <p class="MsoNormal">
                                <span>&nbsp;{this.state.Remark}</span><span></span></p>
                            </td>
                        </tr>
                    </tbody>
            </table>
            <p class="Text1">
                <span>法定空地分割證明申請核發程序格式：</span>
            </p>
            <p class="Text2"><span>
                一、本核發程序及格式依「建築基地法定空地分割辦法」（以下簡稱本辦法）第七條第二項訂定之</span>
            </p>
            <p class="Text2"><span>
                    二、申請人申請法定空地分割證明應備具下列書圖文件：<span>(</span>一<span>)</span>申請書。<span>(</span>二<span>)</span>使用執照謄本或建造執照影本。<span>(</span>三<span>)</span>擬分割圖，其比例尺應與地籍圖相同。<span>(</span>四<span>)</span>壹樓平面及配置分割示意圖，應標示建築物最大投影範圍，其比例尺不得小於<span>1</span>／<span >200</span>。擬分割圖及分割示意圖均應標明分割線尺寸，及法定空地分割前後之面積。</span>
            </p>
            <p class="Text2"><span>
                    三、依本辦法第四條申請分割者，得免附分割示意圖，但超出空地為畸零地者，應檢附成立協議調整地形或合併建築使用之證明文件。</span>
            </p>
            <p class="Text2"><span>
                    四、已領有建造執照之基地申請分割者，得併同申領使用執照時為之，或於建築物主要結構體完成時，檢附竣工平面圖辦理。</span>
            </p>
            <p class="Text2"><span>
                    五、直轄市、縣（市）主管建築機關受理申請案件對於審查合於規定者，發給法定空地分割證明。</span>
            </p>
            <p class="Text3"><b><span>（附註）<span>1.</span>申請人應以土地所有權人名義為之，其在二人以上時應造列名冊。<span>2.</span>申請書中「＊」各欄，申請人請勿填寫。<span>3.</span>填寫字跡應力求清晰整齊，最好打字。</span></b></p>
        
                        </div>

                        <div id="tableDiv2" style={{width : '780px' , margin: '0 auto'}}>
                            <LegalLandAppSub1 {...this.state} />
                        </div>
                        <div id="tableDiv3" >
                            <LegalLandAppSub2 {...this.state} />
                        </div>
                        <div id="tableDiv4" style={{width : '780px' , margin: '0 auto'}}>
                            <LegalLandAppSub1 {...this.state} />
                        </div>
                        <hr/>
                    </Col>
                    
                    <div style={{ maxWidth: 400 , margin: '0 auto 10px' }}>
                        {/* <Button bsStyle="primary" style={{height: '50px' ,fontSize: '18px'}} block type="submit" disabled={this.checkButton()}>送出</Button> */}
                        <Button bsStyle="primary" style={{height: '50px' ,fontSize: '18px'}} block disabled={this.checkButton()} onClick={e=>this.showModal()}>送出</Button>
                        <Button bsSize="large" style={{height: '50px' ,fontSize: '18px'}} onClick={e=>this.printButtonClick('tableDiv')} block>
                            列印第１頁
                        </Button>
                        <Button bsSize="large" style={{height: '50px' ,fontSize: '18px'}} onClick={e=>this.printButtonClick('tableDiv2')} block>
                            列印第２頁
                        </Button>
                        <Button bsSize="large" style={{height: '50px' ,fontSize: '18px'}} onClick={e=>this.printButtonClick('tableDiv3')} block>
                            列印第３頁
                        </Button>
                        <Button bsSize="large" style={{height: '50px' ,fontSize: '18px'}} onClick={e=>this.printButtonClick('tableDiv4')} block>
                            列印第４頁
                        </Button>
                    </div>

                    </Form>
                </Col>
            </Row>
            <Modal show={this.state.showCheckModal} onHide={this.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>確定送出？</Modal.Title>
                </Modal.Header>
                
                <Modal.Footer>
                    <Button onClick={this.modalSubmit} bsStyle="primary">確定</Button>
                    <Button onClick={this.closeModal}>取消</Button>
                </Modal.Footer>
            </Modal>
        </div></>
    }
}
export default LegalLandApp