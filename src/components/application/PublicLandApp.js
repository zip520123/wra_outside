import React, { Component } from 'react';
import {Row,Col,PageHeader,Form,ControlLabel,FormControl,FormGroup,Modal,Button} from 'react-bootstrap'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PublicLandAppSub1 from './PublicLandAppSub1'
import PublicLandAppSub2 from './PublicLandAppSub2'
import PublicLandAppSub3 from './PublicLandAppSub3'
class PublicLandApp extends Component {
    constructor(props , context){
        super(props, context)
        this.state = {
            selectDate: new Date(),
            showCheckModal : false
        }
    }
    readOnlyCheckBox = (state) =>{
        return <span style={{fontFamily: "Wingdings"}}>{state ? 'þ' : '¨'}</span>
    }
    checkButton = () => {
        return false
    }
    printButtonClick = (id) => {
        const input = document.getElementById(id)
        html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({format:[400,260]});
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
        const selectDate = this.state.selectDate
        return <><div className='marginWrap'><Row>
        <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
        <PageHeader style={{textAlign: 'center'}}> 公有畸零地合併使用申請書
        <small onClick={ this.props.history.goBack }> 回上一頁</small></PageHeader>
        <Form id="form" style={{fontSize : '18px'}} action= {`${process.env.REACT_APP_DEVELOPMENT_JASON_IP}/api/SewageForm/CombineFloorForm`} method="post" accept-charset="UTF-8" inline>
            <h4>公有 (*為必填欄位)</h4>
            <FormGroup bsSize="lg" controlId="">
            <ControlLabel>*土地標示</ControlLabel>{' '}
            <FormControl componentClass="select" placeholder="" name="GroundDistrict" onChange={e => {this.setState({GroundDistrict : e.target.value})}}>
                <option value={null}></option>
                <option value="新店">新店</option>
                <option value="雙溪">雙溪</option>
                <option value="石碇">石碇</option>
                <option value="坪林">坪林</option>
                <option value="烏來">烏來</option>
            </FormControl>區
            <FormControl name="GroundSection" onChange={(e) =>{
            this.setState({GroundSection : e.target.value})
            }}/>段
            <FormControl name="GroundSmallSec" onChange={(e) =>{
            this.setState({GroundSmallSec : e.target.value})
            }}/>小段
            <FormControl name="GroundLocnum" onChange={(e) =>{
            this.setState({GroundLocnum : e.target.value})
            }}/>地號
            <FormControl name="GroundType" onChange={(e) =>{
            this.setState({GroundType : e.target.value})
            }}/>地目
            </FormGroup>
            <br />
            <FormGroup bsSize="lg" controlId="">
            <ControlLabel>*面積(m2)</ControlLabel>{' '}
                <FormControl name="Area" onChange={(e) =>{
                this.setState({Area : e.target.value})
                }}/>
            </FormGroup>
            <br />
            <FormGroup bsSize="lg">
                <ControlLabel>*使用分區</ControlLabel>{' '}
                <FormControl name="UseBlock" onChange={(e) =>{
                this.setState({UseBlock : e.target.value})
                }}/>
                <br />
                <ControlLabel>*所有權人</ControlLabel>{' '}
                <FormControl name="OwnerShip" onChange={(e) =>{
                this.setState({OwnerShip : e.target.value})
                }}/>
            </FormGroup>

            <h4>私有 (*為必填欄位)</h4>
            <FormGroup bsSize="lg" controlId="">
            <ControlLabel>*土地標示</ControlLabel>{' '}
            <FormControl componentClass="select" placeholder="" name="OwnGroundDistrict" onChange={e => {this.setState({OwnGroundDistrict : e.target.value})}}>
                <option value={null}></option>
                <option value="新店">新店</option>
                <option value="雙溪">雙溪</option>
                <option value="石碇">石碇</option>
                <option value="坪林">坪林</option>
                <option value="烏來">烏來</option>
            </FormControl>區
            <FormControl name="OwnGroundSection" onChange={(e) =>{
            this.setState({OwnGroundSection : e.target.value})
            }}/>段
            <FormControl name="OwnGroundSmallSec" onChange={(e) =>{
            this.setState({OwnGroundSmallSec : e.target.value})
            }}/>小段
            <FormControl name="OwnGroundLocnum" onChange={(e) =>{
            this.setState({OwnGroundLocnum : e.target.value})
            }}/>地號
            <FormControl name="OwnGroundType" onChange={(e) =>{
            this.setState({OwnGroundType : e.target.value})
            }}/>地目
            </FormGroup>
            <br />
            <FormGroup bsSize="lg" controlId="">
                <ControlLabel>*面積(m2)</ControlLabel>
                <FormControl name="OwnArea" onChange={(e) =>{
                this.setState({OwnArea : e.target.value})
                }}/>
            </FormGroup>
            <br/>
            <FormGroup bsSize="lg">
                <ControlLabel>*使用分區</ControlLabel>{' '}
                <FormControl name="OwnUseBlock" onChange={(e) =>{
                this.setState({OwnUseBlock : e.target.value})
                }}/>
                <br />
                <ControlLabel>*所有權人</ControlLabel>{' '}
                <FormControl name="PriOwnerShip" onChange={(e) =>{
                this.setState({PriOwnerShip : e.target.value})
                }}/>
            </FormGroup>
            <h4>申請人 (*為必填欄位)</h4>
                <FormGroup>
                    <ControlLabel >
                            *姓名:
                    </ControlLabel>
                    
                        <FormControl name="Name" onChange={(e) =>{
                            this.setState({Name : e.target.value})
                        }} />
                        
                </FormGroup>
                <FormGroup>
                    <ControlLabel >
                        *住址:
                    </ControlLabel>
                    <FormControl name="Address" onChange={(e) =>{
                        this.setState({Address : e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel >
                    *身分證字號:
                    </ControlLabel>
                    <FormControl name="Identity" onChange={(e) =>{
                        this.setState({Identity : e.target.value})
                    }}/>
                </FormGroup>   
                <FormGroup>
                    <ControlLabel componentClass={ControlLabel} sm={2}>
                        *電話:
                    </ControlLabel>
                    <FormControl name="Phone" onChange={(e) =>{
                        this.setState({Phone  : e.target.value})
                    }}/>
                </FormGroup>
                    <br />
                    <ControlLabel >
                        *出生年月日:
                    </ControlLabel>
                    <ControlLabel >
                        民國
                    </ControlLabel>
                        <FormControl componentClass="select" name="BirthdayYear" placeholder="" onChange={(e)=>{
                        this.setState({BirthdayYear : e.target.value})
                    }} >
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
                            </FormControl>
                            <ControlLabel style={{textAlign :'left'}}>
                            年
                            </ControlLabel>
                            <FormControl componentClass="select" name="BirthdayMonth" placeholder=""  onChange={(e)=>{
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
                            </FormControl>
                            <ControlLabel style={{textAlign :'left'}}>
                            月
                            </ControlLabel>
                            <FormControl componentClass="select" name="BirthdayDay" placeholder=""  onChange={(e)=>{
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
                            </FormControl>
                            <ControlLabel style={{textAlign :'left'}}>
                            日
                            </ControlLabel>
                            <br />
                
                    <h4>說明 (*為必填欄位)</h4>
                    <ControlLabel >
                    *本案基地正面路寬為
                    </ControlLabel>
                    <FormControl name="GroundWidth" onChange={(e) =>{
                        this.setState({GroundWidth : e.target.value})
                    }}/>公尺
                
                <br />
                <ControlLabel >
                *依新北市畸零地使用規則第
                </ControlLabel>
                <FormControl name="Rule" onChange={(e) =>{
                this.setState({Rule : e.target.value})
                }}/>條規定
                <br/>
                    <ControlLabel >
                    *最小寬度為
                    </ControlLabel>
                    <FormControl name="Width" onChange={(e) =>{
                        this.setState({Width : e.target.value})
                    }}/>公尺
                <br/>
                    <ControlLabel >
                    *最小深度為
                    </ControlLabel>
                    <FormControl name="Depth" onChange={(e) =>{
                        this.setState({Depth : e.target.value})
                    }}/>公尺
            <hr/>
            <Col xs={10} xsOffset={1} md={12} mdOffset={0}>
            <div id="tableDiv" style={{width : '780px' , margin: '0 auto'}}>
                <PublicLandAppSub1 {...this.state} />
            </div>
            </Col>
            <Col xs={10} xsOffset={1} md={12} mdOffset={0}>
            <div id="tableDiv2" style={{width : '780px' , margin: '0 auto'}}>
                <PublicLandAppSub2 {...this.state} />
            </div>
            </Col>
            <Col xs={10} xsOffset={1} md={12} mdOffset={0}>
            <div id="tableDiv3" style={{width : '780px' , margin: '0 auto'}}>
                <PublicLandAppSub3 {...this.state} />
            </div>
            <hr/>
            </Col>
            <div style={{ maxWidth: 400 , margin: '0px auto 10px'}}>
            <Button bsStyle="primary" style={{height: '50px' ,fontSize: '18px'}} block disabled={this.checkButton()} onClick={e=>this.showModal()}>送出</Button>
                {/* <Button bsStyle="primary" style={{height: '50px' ,fontSize: '18px'}} block type="submit" disabled={this.checkButton()}>送出</Button> */}
                <Button bsSize="large" style={{height: '50px' ,fontSize: '18px'}} onClick={e=>{this.printButtonClick('tableDiv')}} block>
                    列印第1頁
                </Button>
                <Button bsSize="large" style={{height: '50px' ,fontSize: '18px'}} onClick={e=>{this.printButtonClick('tableDiv2')}} block>
                    列印第2頁
                </Button>
                <Button bsSize="large" style={{height: '50px' ,fontSize: '18px'}} onClick={e=>{this.printButtonClick('tableDiv3')}} block>
                    列印第3頁
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
export default PublicLandApp