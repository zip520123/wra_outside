import React, { Component } from 'react';
import {Row,Col,PageHeader,Form,ControlLabel,FormControl,FormGroup,Table,Button,Modal} from 'react-bootstrap'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FieldGroup } from './../SewageApplication'
class PublicApply extends Component {
    constructor(props , context){
        super(props, context)
        this.state = {
            showCheckModal : false
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
            const pdf = new jsPDF({orientation: 'landscape',});
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
    render() {
        return <><div className='marginWrap'>
        <Row>
            <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
            <PageHeader style={{textAlign: 'center'}}>都市計畫使用分區(或公共設施用地)證明申請資料填報作業
            <small onClick={ this.props.history.goBack }> 回上一頁</small></PageHeader>

            <Form id="form" style={{fontSize : '18px'}} action= {`${process.env.REACT_APP_DEVELOPMENT_JASON_IP}/api/SewageForm/CityplanForm`} method="post" accept-charset="UTF-8" horizontal>
            <Col componentClass={ControlLabel} smOffset={1}>
                請在此輸入申請者之基本資料(*為必填欄位)
            </Col>
            <FieldGroup onChange={e =>{
                this.setState({Name : e.target.value})
                }} id="Name" 
                type="text"
                label="申請姓名"
                placeHolder="請輸入申請姓名"
                required={true}
            />
            <FieldGroup onChange={e =>{
                this.setState({Address : e.target.value})
                }} id="Address" 
                type="text"
                label="通訊地址"
                placeHolder="請輸入通訊地址"
                required={true}
            />
            <FormGroup>
                <Col sm={2} componentClass={ControlLabel}>
                電話號碼<span style={{color: 'red'}}>*</span>
                </Col>
                <Col componentClass={ControlLabel} sm={1} >
                    (
                 </Col>
                <Col sm={2}>
                    <FormControl name="Phone_district" onChange={(e) =>{
                        this.setState({Phone_district : e.target.value})
                        }} placeholder="請輸入區碼"/>
                </Col>
                <Col componentClass={ControlLabel} sm={1} style={{textAlign :'left'}}>
                    )
                </Col>
                <Col sm={2}>
                    <FormControl name="Phone_number" onChange={(e) =>{
                        this.setState({Phone_number : e.target.value})
                        }} placeholder="請輸入電話號碼"/>
                </Col>
                <Col componentClass={ControlLabel} sm={1} style={{textAlign :'left'}}>
                    #
                </Col>
                <Col sm={2}>
                    <FormControl name="Phone_extension" onChange={(e) =>{
                        this.setState({Phone_extension : e.target.value})
                        }} placeholder="請輸入分機"/>
                </Col>
            </FormGroup>
            <FieldGroup onChange={e =>{
                this.setState({Quantity : e.target.value})
                }} id="Quantity" 
                type="text"
                label="申請份數"
                placeHolder="請輸入申請份數"
                required={true}
            />
            <Col smOffset={1}
             componentClass={ControlLabel}>
                *請在此輸入土地坐落之地籍資料
            </Col>  
            <FormGroup>
                <Col sm={10} smOffset={1} >
                    <Table striped bordered condensed hover><thead>
                    <tr>
                    <th></th>
                    <th>行政區</th>
                    <th>地段</th>
                    <th>小段</th>
                    <th>地號</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>1 <span style={{color: 'red'}}>*</span></td>
                    <td><FormControl name="Adminplace1" onChange={(e) =>{
                        this.setState({Adminplace1  : e.target.value})
                        }} placeholder="請輸入行政區"/></td>
                    <td><FormControl name="Location1" onChange={(e) =>{
                        this.setState({Location1  : e.target.value})
                        }} placeholder="請輸入地段"/></td>
                    <td><FormControl name="SmallPart1" onChange={(e) =>{
                        this.setState({SmallPart1 : e.target.value})
                        }} placeholder="請輸入小段"/></td>
                    <td><FormControl name="LocationNum1" onChange={(e) =>{
                        this.setState({LocationNum1  : e.target.value})
                        }} placeholder="請輸入地號"/></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td><FormControl name="Adminplace2" onChange={(e) =>{
                        this.setState({Adminplace2 : e.target.value})
                        }} placeholder="請輸入行政區"/></td>
                    <td><FormControl name="Location2" onChange={(e) =>{
                        this.setState({Location2 : e.target.value})
                        }} placeholder="請輸入地段"/></td>
                    <td><FormControl name="SmallPart2" onChange={(e) =>{
                        this.setState({SmallPart2 : e.target.value})
                        }} placeholder="請輸入小段"/></td>
                    <td><FormControl name="LocationNum2" onChange={(e) =>{
                        this.setState({LocationNum2 : e.target.value})
                        }} placeholder="請輸入地號"/></td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td><FormControl name="Adminplace3" onChange={(e) =>{
                        this.setState({Adminplace3 : e.target.value})
                        }} placeholder="請輸入行政區"/></td>
                    <td><FormControl name="Location3" onChange={(e) =>{
                        this.setState({Location3 : e.target.value})
                        }} placeholder="請輸入地段"/></td>
                    <td><FormControl name="SmallPart3" onChange={(e) =>{
                        this.setState({SmallPart3 : e.target.value})
                        }} placeholder="請輸入小段"/></td>
                    <td><FormControl name="LocationNum3" onChange={(e) =>{
                        this.setState({LocationNum3 : e.target.value})
                        }} placeholder="請輸入地號"/></td>
                    </tr>
                    </tbody></Table>
                </Col>
            </FormGroup>
            <hr/>
            <Col componentClass='div' id="tableDiv" sm={10} smOffset={1} style={{width : '1080px' }}>
            
            <table id="table_county" border="1">
                <tr>
                    <td colspan="6">都市計畫土地使用分區(或公共設施用地)證明申請書</td>
                </tr>
                <tr id="person">
                    <td width="10%">姓名</td>
                    <td width="15%">{this.state.Name}</td>
                    <td width="8%">通訊地址</td>
                    <td width="30%">{this.state.Address}</td>
                    <td width="8%">電話號碼</td>
                    <td width="25%">({this.state.Phone_district}){this.state.Phone_number}#{this.state.Phone_extension} </td>
                </tr>
                <tr>
                    <td rowspan="3">土地座落</td>
                    <td colspan="5">
                        <table id="land_address_1" width="100%">
                            <tr>
                                <td width="1%">1.</td>
                                <td width="10%">{this.state.Adminplace1} 行政區</td>
                                <td width="10%">{this.state.Location1 } 段</td>
                                <td width="10%">{this.state.SmallPart1 } 小段</td>
                                <td width="10%">{this.state.LocationNum1} 地號</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td colspan="5">
                        <table id="land_address_2" width="100%">
                            <tr>
                                <td width="1%">2.</td>
                                <td width="10%">{this.state.Adminplace2} 行政區</td>
                                <td width="10%">{this.state.Location2 } 段</td>
                                <td width="10%">{this.state.SmallPart2 } 小段</td>
                                <td width="10%">{this.state.LocationNum2} 地號</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td colspan="5">
                        <table id="land_address_3" width="100%">
                            <tr>
                                <td width="1%">3.</td>
                                <td width="10%">{this.state.Adminplace3} 行政區</td>
                                <td width="10%">{this.state.Location3 } 段</td>
                                <td width="10%">{this.state.SmallPart3 } 小段</td>
                                <td width="10%">{this.state.LocationNum3} 地號</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td id="content" colspan="6">茲檢附地籍圖謄本正本（三個月內）乙份，請&nbsp;&nbsp;&nbsp;
                        貴局惠予核發都市計畫土地使用分區（或公共設施用地）證明書
                        共&nbsp;{this.state.Quantity}&nbsp;份。<br /><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此致<br /><br />
                        經濟部水利署臺北水源特定區管理局<br /><br /><br />
                    </td>
                </tr>
                <tr>
                    <td colspan="6" >申請人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（簽名蓋章）<br /><br /><br /><br /><br /><br /><br /></td>
                </tr>
                <tr>
                    <td id="notice" rowspan="2">注意事項：</td>
                    <td id="content_1" colspan="5">一、請將申請地號於地籍圖謄本內詳細打「〇」。</td>
                </tr>
                <tr>
                    <td id="content_2" colspan="5">二、所附地籍圖等資料將不予歸還。</td>
                </tr>
            </table>
            <hr/>
            </Col>
            
            <div style={{ maxWidth: 400 , margin: '0 auto 100px' , marginTop:'10px'}}>
                {/* <Button bsStyle="primary" style={{height: '50px' ,fontSize: '18px'}} block type="submit" disabled={this.checkButton()}>送出</Button> */}
                <Button bsStyle="primary" style={{height: '50px' ,fontSize: '18px'}} block disabled={this.checkButton()} onClick={e=>this.showModal()}>送出</Button>
                <Button bsSize="large" style={{height: '50px' ,fontSize: '18px'}} onClick={this.printButtonClick} block>
                    列印
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
export default PublicApply