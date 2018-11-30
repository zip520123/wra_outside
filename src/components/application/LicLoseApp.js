import React, { Component } from 'react';
import {Button,Row, Col,PageHeader , Form ,FormGroup,FormControl,ControlLabel} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './LicLoseApp.css'
class LicLoseApp extends Component {
    constructor(props , context){
        super(props, context)
        this.state = {
            selectDate: new Date()
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
            pdf.save("列印切結書.pdf");
        })

    }
    printButtonClick2 = () => {
        const input = document.getElementById('tableDiv2')
        html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG' ,2, 2);
            pdf.save("執照遺失申請書.pdf");
        })

    }
    render(){
        const selectDate = this.state.selectDate
        return <><div className='marginWrap'>
        <Row>
            <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
            
        <PageHeader style={{textAlign: 'center'}}> 執照遺失切結書
        <small onClick={ this.props.history.goBack }> 回上一頁</small></PageHeader>

            <Form style={{fontSize : '18px'}} action= {`${process.env.REACT_APP_DEVELOPMENT_JASON_IP}/api/SewageForm/LicenseDeclaration`} method="post" accept-charset="UTF-8" horizontal>
                    <Col componentClass={ControlLabel} smOffset={1}>
                        申請人 (*為必填欄位)
                    </Col>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                                *姓名:
                        </Col>
                        <Col sm={10}>
                            <FormControl name="Name" onChange={(e) =>{
                              this.setState({Name : e.target.value})
                            }} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            *住址:
                        </Col>
                        <Col sm={10}>
                            <FormControl name="Address" onChange={(e) =>{
                                this.setState({Address : e.target.value})
                            }}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                        *身分證字號:
                        </Col>
                        <Col sm={10}>
                            <FormControl name="Identity_num" onChange={(e) =>{
                                this.setState({Identity_num : e.target.value})
                            }}/>
                        </Col>
                    </FormGroup>   
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            *電話:
                        </Col>
                        <Col sm={10}>
                            <FormControl name="Phone" onChange={(e) =>{
                                this.setState({Phone  : e.target.value})
                            }}/>
                        </Col>
                    </FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            *出生年月日
                        </Col>
                        <Col componentClass={ControlLabel} sm={1}>
                            民國
                        </Col>
                        <Col componentClass="select" placeholder="" onChange={(e)=>{
                        this.setState({BirthdayYear : e.target.value})
                    }} sm={2}>
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
                            </Col>
                            <Col componentClass={ControlLabel} sm={1} style={{textAlign :'left'}}>
                            年
                            </Col>
                            <Col componentClass="select" placeholder=""  onChange={(e)=>{
                        this.setState({BirthdayMonth : e.target.value})
                    }}  sm={2}>
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
                            </Col>
                            <Col componentClass={ControlLabel} sm={1} style={{textAlign :'left'}}>
                            月
                            </Col>
                            <Col componentClass="select" placeholder=""  onChange={(e)=>{
                        this.setState({BirthdayDay : e.target.value})
                    }} sm={2}>
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
                            </Col>
                            <Col componentClass={ControlLabel} sm={1} style={{textAlign :'left'}}>
                            日
                            </Col>
                            <input type="hidden" id="Birthday" name="Birthday" value={selectDate.getFullYear()+ "/" +  (selectDate.getMonth() + 1) + "/" + selectDate.getDate()}></input>
                        <FormGroup>
                            <Col smOffset={1} componentClass={ControlLabel}>
                            聲明作廢 (*為必填欄位)
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col sm={2} componentClass={ControlLabel}>*刊登日</Col>
                            <Col sm={10}>
                            <DatePicker className='form-control'
                            dateFormat="yyyy/MM/dd"
                            selected={this.state.selectDate}
                            onChange={date => {
                                this.setState({
                                    selectDate: date
                                });
                                console.log(date)
                            }}
                            />
                            <input type="hidden" id="PublicationYear" name="PublicationYear" value={selectDate.getYear() - 11}></input>
                            <input type="hidden" id="PublicationMonth" name="PublicationMonth" value={ (selectDate.getMonth() + 1) }></input>
                            <input type="hidden" id="PublicationDay" name="PublicationDay" value={selectDate.getDate() }></input>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col sm={2} componentClass={ControlLabel}>*報紙名稱</Col>
                            <Col sm={10}>
                                <FormControl name="NewspaperName" onChange={(e) =>{
                                    this.setState({NewspaperName : e.target.value})
                                }}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                        <Col sm={2} componentClass={ControlLabel}>*原使用執照字</Col>
                        <Col sm={10}>
                            <FormControl name="Licenseword" onChange={(e) =>{
                                this.setState({Licenseword : e.target.value})
                            }}/>
                        </Col>
                        </FormGroup>
                        <Col xs={10} xsOffset={1} md={12} mdOffset={0}>
        <div id="tableDiv" style={{width : '780px' , margin: '0 auto'}}>
        <table id="content" class="MsoNormalTable" border="0">
            <tbody>
                <tr>
                    <td id="content_1">
                        <p id="title" >
                            <span>切　　　結　　　書</span></p>
                        <p class="content2" >
                            <span>因</span><span>保管不慎遺失貴局所核發之　</span>
                            <span>{this.state.Licenseword}</span><span>使用執照正本，業已刊登於　</span>
                            <span>{this.state.selectDate.getYear() - 11}年{(this.state.selectDate.getMonth() + 1)}月{this.state.selectDate.getDate()}日&nbsp;
                                {this.state.NewspaperName}</span><span>聲明作廢在案，今特向貴局申請補發使用執照正本乙份。爾後若涉及任何申報不實之情事，願負一切法律責任，惟口說無憑，特立此書以茲證明。</span></p>
                        <p id="content3" >
                            <span>此致</span></p>
                        <p class="content5"><span>經濟部水利署臺北水源特定區管理局</span></p>
                        <p class="content2">
                            <span>&nbsp;</span></p>
                        <p id="content4" >
                            <span>立書人：</span></p>
                        <p class="content2">
                            <span>&nbsp;</span></p>
                        <p class="content5"><span>
                                中華民國　　　年　　　月　　　日</span></p>
                        <p>&nbsp;</p>
                        <p>
                            &nbsp;</p>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        <div id="tableDiv2" style={{width : '780px' , margin: '0 auto'}}>
        <table id="content" class="MsoNormalTable" border="0">
            <tbody>
                <tr>
                    <td id="content_1">
                        <p id="title" class="MsoNormal">
                            <span>執照遺失申請書</span></p>
                        <p class="content2" >
                            <span>因</span><span>保管不慎遺失貴局所核發之　</span>
                            <span>{this.state.Licenseword}</span><span>使用執照正本，業已刊登於　{this.state.Licenseword}</span><span>使用執照正本，業已刊登於　</span>
                            <span>{this.state.selectDate.getYear() - 11}年{(this.state.selectDate.getMonth() + 1)}月{this.state.selectDate.getDate()}日&nbsp;
                                {this.state.NewspaperName}&nbsp;
                                </span><span>聲明作廢在案，今特向貴局申請補發使用執照正本乙份。</span></p>
                        <p id="content3" class="MsoNormal">
                            <span>此致</span></p>
                        <p class="content5"><span>經濟部水利署臺北水源特定區管理局</span></p>
                        <p class="content2">
                            <span>&nbsp;</span></p>
                        <p id="content4" class="MsoNormal">
                            <span>申請人：</span></p>
                        <p class="content2">
                            <span>&nbsp;</span></p>
                        <p class="content5"><span>
                                中華民國　　　年　　　月　　　日</span></p>
                        <p>&nbsp;</p>
                        <p>
                            &nbsp;</p>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
                        </Col>
        <div style={{ maxWidth: 400 , margin: '0 auto 10px' }}>
            <Button bsStyle="primary" style={{height: '50px' ,fontSize: '18px'}} block type="submit" disabled={this.checkButton()}>送出</Button>
            <Button bsSize="large" style={{height: '50px' ,fontSize: '18px'}} onClick={this.printButtonClick} block>
                列印切結書
            </Button>
            <Button bsSize="large" style={{height: '50px' ,fontSize: '18px'}} onClick={this.printButtonClick2} block>
            執照遺失申請書
            </Button>
        </div>
            </Form>
            </Col>
        </Row>
        </div></>
    }
}
export default LicLoseApp 