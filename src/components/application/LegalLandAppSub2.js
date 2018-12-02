import React, { Component } from 'react';
import './LegalLandAppSub2.css'
class LegalLandAppSub2 extends Component{
    render() {
        return <><table id="table" border="1">
        <tbody>
            <tr style={{pageBreakInside:'avoid',height:'57.4pt'}}>
                <td id="title" colspan="9">
                    <p id="text1">
                        <span>
                            經濟部水利署台北水源特定區管理局法定空地分割證明
                        </span>
                    </p>
                    <p id="text2">
                        <span>水臺建字第&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;號</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="text3" colspan="9">
                    <p class="text4">
                        <span>下列建築基地准予分割，其分割圖、法定空地位置及分割線、分割示意圖如附圖。</span>
                    </p>
                    <p class="text4"><span>此<span>&nbsp;</span>給 </span>
                    </p>
                    <p class="text5">
                        <span>&nbsp;</span>
                    </p>
                    <p class="text5"><span>申請人</span></p>
                    <p class="text5"><span>&nbsp;</span></p>
                    <p class="text5"><span>&nbsp;</span></p>
                    <p class="text5">
                        <span>局長<span>&nbsp;
                            </span></span>
                    </p>
                    <br /><br /><br />
                    <p id="text6">
                        <span>&nbsp;中華民國&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;
                            月&nbsp;&nbsp;&nbsp;&nbsp;日</span></p>
                </td>
            </tr>
            <tr>
                <td id="apply_person" rowspan="3">
                    <p>申</p>
                    <p>請</p>
                    <p>人</p>
                </td>
                <td id="name1" colspan="2">
                    <p>
                        <span>姓名</span>
                    </p>
                </td>
                <td id="name2">
                    <p>{this.props.Name}&nbsp;等&nbsp;{this.props.People}&nbsp;名</p>
                </td>
                <td id="birth1" colspan="2">
                    <p>
                        <span>出生</span>
                    </p>
                    <p>
                        <span>年月日</span>
                    </p>
                </td>
                <td id="birth2" colspan="3">
                    <p class="MsoNormal">
                        <span>&nbsp;{this.props.BirthdayYear}&nbsp;年&nbsp;{this.props.BirthdayMonth}&nbsp;月&nbsp;{this.props.BirthdayDay}&nbsp;日</span><span>&nbsp;生</span></p>
                </td>
            </tr>
            <tr>
                <td id="id1" colspan="2">
                    <p>
                        <span>
                            身分證
                        </span>
                    </p>
                    <p>
                        <span>
                            統一編號
                        </span>
                    </p>
                </td>
                <td id="id2">
                    <p>
                        <span>&nbsp;{this.props.Identity}</span>
                    </p>
                </td>
                <td id="phone1" colspan="2">
                    <p><span>電話</span></p>
                </td>
                <td id="phone2" colspan="3">
                    <p>
                        <span>&nbsp;{this.props.Phone}</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="address1" colspan="2">
                    <p>
                        <span>住址</span>
                    </p>
                </td>
                <td id="address2" colspan="6">
                    <p class="MsoNormal">
                        <span>&nbsp;{this.props.Address}</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="buliding_address" rowspan="2">
                    <p>
                        <span>建築地點</span>
                    </p>
                </td>
                <td id="land_number1" colspan="2">
                    <p>
                        <span>地號</span>
                        </ p>
                </td>
                <td id="land_number2" colspan="6">
                    <p>
                        <span>新北市&nbsp;{this.props.LocationDistrict}&nbsp;區&nbsp;{this.props.LocationSection}&nbsp;段&nbsp;{this.props.LocationSmallSec}&nbsp;小段
                            {this.props.LocationNum}&nbsp;地號&nbsp;{this.props.LocationDen}&nbsp;等&nbsp;{this.props.LocationBi}&nbsp;筆</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="land_address1" colspan="2">
                    <p>
                        <span>地址</span>
                    </p>
                </td>
                <td id="land_address2" colspan="6">
                    <p>
                        <span>新北市&nbsp;{this.props.AddressDistrict}&nbsp;區&nbsp;{this.props.AddressRoad}&nbsp;路&nbsp;{this.props.AddressLane}&nbsp;巷
                            {this.props.AddressNum}&nbsp;號</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="usage1" colspan="3">
                    <p>
                        <span>使用分區或編（指）定用途</span>
                    </p>
                </td>
                <td id="usage2" colspan="2">
                    <p>
                        <span>{this.props.Purpose}</span>
                    </p>
                </td>
                <td id="license_number1" colspan="3">
                    <p>
                        <span>原使用執照字號</span>
                    </p>
                </td>
                <td id="license_number2">
                    <p class="MsoNormal">
                        <span>北水使字第&nbsp;{this.props.LicenseNum}&nbsp;號</span></p>
                </td>
            </tr>
            <tr>
                <td id="base_area" colspan="2" rowspan="3">
                    <p class="MsoNormal">
                        <p>基</p>
                        <p>地</p>
                        <p>面</p>
                        <p>積</p>
                    </p>
                </td>
                <td id="arcade1">
                    <p class="MsoNormal">
                        <span>騎樓地</span>
                    </p>
                </td>
                <td id="arcade2" colspan="2">
                    <p class="MsoNormal">&nbsp;{this.props.Arcade}</p>
                </td>
                <td id="open_space1" colspan="2">
                    <p>
                        <span>
                            現有空地
                        </span>
                    </p>
                    <p>
                        <span>
                            面積
                        </span>
                    </p>
                </td>
                <td id="open_space2" colspan="2">
                    <p class="MsoNormal">
                        <span>{this.props.NowArea} ㎡</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="buliding_area1">
                    <p class="MsoNormal">
                        <p>
                            <span>
                                建築
                            </span>
                        </p>
                        <p>
                            <span>
                                面積
                            </span>
                        </p>
                    </p>
                </td>
                <td id="buliding_area2" colspan="2">
                    <p class="MsoNormal">㎡</p>
                </td>
                <td id="legal_space1" colspan="2">
                    <p>
                        <span>
                            法定空地
                        </span>
                    </p>
                    <p>
                        <span>
                            面積
                        </span>
                    </p>
                </td>
                <td id="legal_space2" colspan="2">
                    <p class="MsoNormal">
                        <span>{this.props.LawArea} ㎡</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="total1">
                    <p class="MsoNormal">
                        <p>
                            <span>合計</span>
                        </p>
                    </p>
                </td>
                <td id="total2" colspan="2">
                    <p class="MsoNormal">{this.props.TotalArea}㎡</p>
                </td>
                <td id="construction_rate1" colspan="2">
                    <p>
                        <span>
                            建蔽率
                        </span>
                    </p>
                </td>
                <td id="construction_rate2" colspan="2">
                    <p class="MsoNormal">
                        <span>{this.props.AreaRatio} %</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="remark1" colspan="2">
                    <p>
                        <span>備註事項</span>
                    </p>
                </td>
                <td id="remark2" colspan="7">
                    <p class="MsoNormal">
                        <span>&nbsp;</span>
                    </p>
                </td>
            </tr>
            
        </tbody>
    </table>
    <p id="text7">
        <span>建築基地分割後，各基地之資料依序填於下表。（不敷使用時於次頁繪製）</span>
    </p>
    <table id="table2" border="1">
        <tbody>
            <tr>
                <td id="base_number1">
                    <p class="MsoNormal">
                        <span>分割後各基地編號</span>
                    </p>
                </td>
                <td id="base_area_down1">
                    <p class="MsoNormal">
                        <span>基地面積</span>
                    </p>
                </td>
                <td id="buliding_area_down1">
                    <p class="MsoNormal">
                        <span>建築面積</span></p>
                </td>
                <td id="legal_area_down1">
                    <p class="MsoNormal">
                        <span>法定空地面積</span>
                    </p>
                </td>
                <td id="construction_rate_down1">
                    <p class="MsoNormal">
                        <span>建蔽率</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="base_number2">
                    <p>
                        <span></span>
                    </p>
                </td>
                <td id="base_area_down2">
                    <p class="MsoNormal">
                        <span>㎡</span></p>
                </td>
                <td id="buliding_area_down2">
                    <p class="MsoNormal">
                        <span>㎡</span>
                    </p>
                </td>
                <td id="legal_area_down2">
                    <p class="MsoNormal">
                        <span>㎡</span></p>
                </td>
                <td id="construction_rate_down2">
                    <p class="MsoNormal">
                        <span>%</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="base_number3">
                    <p>
                        <span></span>
                    </p>
                </td>
                <td id="base_area_down3">
                    <p class="MsoNormal">
                        <span>㎡</span></p>
                </td>
                <td id="buliding_area_down3">
                    <p class="MsoNormal">
                        <span>未建築</span>
                    </p>
                </td>
                <td id="legal_area_down3">
                    <p class="MsoNormal">
                        <span>未建築</span></p>
                </td>
                <td id="construction_rate_down3">
                    <p class="MsoNormal">
                        <span>未建築</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="base_number4">
                    <p>
                        <span></span>
                    </p>
                </td>
                <td id="base_area_down4">
                    <p class="MsoNormal">
                        <span>&nbsp;</span></p>
                </td>
                <td id="buliding_area_down4">
                    <p class="MsoNormal">
                        <span>&nbsp;</span>
                    </p>
                </td>
                <td id="legal_area_down4">
                    <p class="MsoNormal">
                        <span>&nbsp;</span></p>
                </td>
                <td id="construction_rate_down4">
                    <p class="MsoNormal">
                        <span>&nbsp;</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="base_number5">
                    <p>
                        <span></span>
                    </p>
                </td>
                <td id="base_area_down5">
                    <p class="MsoNormal">
                        <span>&nbsp;</span></p>
                </td>
                <td id="buliding_area_down5">
                    <p class="MsoNormal">
                        <span>&nbsp;</span>
                    </p>
                </td>
                <td id="legal_area_down5">
                    <p class="MsoNormal">
                        <span>&nbsp;</span></p>
                </td>
                <td id="construction_rate_down5">
                    <p class="MsoNormal">
                        <span>&nbsp;</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="base_number6">
                    <p>
                        <span></span>
                    </p>
                </td>
                <td id="base_area_down6">
                    <p class="MsoNormal">
                        <span>&nbsp;</span></p>
                </td>
                <td id="buliding_area_down6">
                    <p class="MsoNormal">
                        <span>&nbsp;</span>
                    </p>
                </td>
                <td id="legal_area_down6">
                    <p class="MsoNormal">
                        <span>&nbsp;</span></p>
                </td>
                <td id="construction_rate_down6">
                    <p class="MsoNormal">
                        <span>&nbsp;</span>
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    </>
    }
}
export default LegalLandAppSub2