import React, { Component } from 'react';

class PublicLandAppSub2 extends Component {
    render(){
        return <><table id="public_land_consolidation" class="MsoNormalTable" border="1">
        <tbody>
            <tr>
                <td id="title" colspan="11" valign="top">
                    <p class="MsoNormal"><span id="title1">經濟部水利署臺北水源特定區管理局<b>公有地合併使用證明書</b></span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span id="title2">&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;
                            日北水建字第&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;號</span></p>
                </td>
            </tr>
            <tr>
                <td id="public" rowspan="8">
                    <p>
                        <span>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p><b>公</b></p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p><b>有</b></p>
                        </span>
                    </p>
                </td>
                <td id="public_land_mark" rowspan="5">
                    <p></p>
                    <p class="MsoNormal"><span>&nbsp;</span></p>
                    <p class="MsoNormal"><span>&nbsp;</span></p>
                    <p class="MsoNormal"><span>土</span></p>
                    <p class="MsoNormal">
                        <span>地</span></p>
                    <p class="MsoNormal"><span>標</span></p>
                    <p class="MsoNormal"><span>示</span></p>
                </td>
                <td id="public_district1">
                    <p class="MsoNormal"><span>區</span></p>
                </td>
                <td id="public_district2" colspan="3">
                    <p class="MsoNormal">
                        <span>&nbsp;{this.props.GroundDistrict}</span></p>
                </td>
                <td id="private" rowspan="8">
                    <p class="MsoNormal">
                        <span>&nbsp;</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><b><span>私</span></b></p>
                    <p><b><span>&nbsp;</span></b></p>
                    <p><b><span>&nbsp;</span></b></p>
                    <p><b><span>&nbsp;</span></b></p>
                    <p><b><span>&nbsp;</span></b></p>
                    <p><b><span>有</span></b></p>
                </td>
                <td id="private_land_mark" rowspan="5">
                    <p>
                        <span>&nbsp;</span></p>
                    <p>
                        <span>&nbsp;</span></p>
                    <p>
                        <span>土</span></p>
                    <p>
                        <span>地</span></p>
                    <p>
                        <span>標</span></p>
                    <p>
                        <span>示</span></p>
                </td>
                <td id="private_district1">
                    <p class="MsoNormal"><span>區</span></p>
                </td>
                <td id="private_district2" colspan="2">
                    <p class="MsoNormal"><span>&nbsp;{this.props.OwnGroundDistrict}</span></p>
                </td>
            </tr>
            <tr>
                <td id="public_segment1">
                    <p><span>段</span></p>
                </td>
                <td id="public_segment2" colspan="3">
                    <p class="MsoNormal"><span>&nbsp;{this.props.GroundSection}</span></p>
                </td>
                <td id="private_segment1">
                    <p><span>段</span></p>
                </td>
                <td id="private_segment2" colspan="2">
                    <p><span>&nbsp;{this.props.OwnGroundSection}</span></p>
                </td>
            </tr>
            <tr>
                <td id="public_smallsegment1">
                    <p><span>小段</span></p>
                </td>
                <td id="public_smallsegment2" colspan="3">
                    <p><span>&nbsp;{this.props.GroundSmallSec}</span></p>
                </td>
                <td id="private_smallsegment1">
                    <p class="MsoNormal"><span>小段</span></p>
                </td>
                <td id="private_smallsegment2" colspan="2">
                    <p><span>&nbsp;{this.props.OwnGroundSmallSec}</span></p>
                </td>
            </tr>
            <tr>
                <td id="public_land_number1">
                    <p><span>地號</span></p>
                </td>
                <td id="public_land_number2" colspan="3">
                    <p><span>&nbsp;{this.props.GroundLocnum}</span></p>
                </td>
                <td id="private_land_number1">
                    <p><span>地號</span></p>
                </td>
                <td id="private_land_number2" colspan="2">
                    <p><span>&nbsp;{this.props.OwnGroundLocnum}</span></p>
                </td>
            </tr>
            <tr>
                <td id="public_land_eye1">
                    <p><span>地目</span></p>
                </td>
                <td id="public_land_eye2" colspan="3">
                    <p><span>&nbsp;{this.props.GroundType}</span></p>
                </td>
                <td id="private_land_eye1">
                    <p><span>地目</span></p>
                </td>
                <td id="private_land_eye2" colspan="2">
                    <p><span>&nbsp;{this.props.OwnGroundType}</span></p>
                </td>
            </tr>
            <tr>
                <td id="public_area1" colspan="2">
                    <p><span class="text1">面積</span>
                        <span class="text2">(m</span><sup><span class="text2">2</span></sup><span class="text2">)</span></p>
                </td>
                <td id="public_area2" colspan="3">
                    <p><span>&nbsp;{this.props.Area}</span></p>
                </td>
                <td id="private_area1" colspan="2">
                    <p><span class="text1">面積</span>
                        <span class="text2">(m</span><sup><span class="text2">2</span></sup><span class="text2">)</span></p>
                </td>
                <td id="private_area2" colspan="2">
                    <p><span>&nbsp;{this.props.OwnArea}</span></p>
                </td>
            </tr>
            <tr>
                <td id="public_using_partitions1" colspan="2">
                    <p><span>使用分區</span></p>
                </td>
                <td id="public_using_partitions2" colspan="3">
                    <p><span>&nbsp;{this.props.UseBlock }</span></p>
                </td>
                <td id="private_using_partitions1" colspan="2">
                    <p><span>使用分區</span></p>
                </td>
                <td id="private_using_partitions2" colspan="3">
                    <p><span>&nbsp;{this.props.OwnUseBlock }</span></p>
                </td>
            </tr>
            <tr>
                <td id="public_owner1" colspan="2">
                    <p><span>所有權人</span></p>
                </td>
                <td id="public_owner2" colspan="3">
                    <p><span>&nbsp;{this.props.OwnerShip }</span></p>
                </td>
                <td id="private_owner1" colspan="2">
                    <p><span>所有權人</span></p>
                </td>
                <td id="private_owner2" colspan="3">
                    <p><span>&nbsp;{this.props.PriOwnerShip }</span></p>
                </td>
            </tr>
            <tr>
                <td id="apply_person" rowspan="4">
                    <p><b><span>&nbsp;</span></b></p>
                    <p><b><span>申</span></b></p>
                    <p><b><span>&nbsp;</span></b></p>
                    <p><b><span>請</span></b></p>
                    <p><b><span>&nbsp;</span></b></p>
                    <p><b><span>人</span></b></p>
                </td>
                <td id="name1" rowspan="2">
                    <p><span>姓</span></p>
                    <p><span>名</span></p>
                </td>
                <td id="name2" colspan="2" rowspan="2">
                    <p><span>&nbsp;{this.props.Name}</span></p>
                </td>
                <td id="birth1">
                    <p><span>出生年月日</span></p>
                </td>
                <td id="birth2">
                    <p><span>&nbsp;{this.props.BirthdayYear}年{this.props.BirthdayMonth}月{this.props.BirthdayDay }日</span></p>
                </td>
                <td id="description1" rowspan="4">
                    <p><b><span>&nbsp;</span></b></p>
                    <p><span>說</span></p>
                    <p><b><span>&nbsp;</span></b></p>
                    <p><b><span>&nbsp;</span></b></p>
                    <p><span>明</span></p>
                </td>
                <td id="description2" colspan="4" rowspan="4">
                <p class="MsoNormal">
                            <span>
                                一、上列基地正面路寬為<u>　　</u>公尺，依新北市畸零地使用規則
                                第<u>　　</u>條規定，最小寬度為<u>　　</u>公尺，最小深度為<u>　　</u>公尺。
                            </span>
                        </p>
                        <p class="MsoNormal">
                            <span>
                                二、本證明書僅供建築基地合併使用或調整地形之參考，
                                公有財產主管機關如需保留公用或依事業計畫或公有財產有關規定處理時，
                                不得以本證明書為對抗；如涉及私權糾紛者，
                                由申請人及公有財產主管機關依其他相關法令規定辦理。
                            </span>
                        </p>
                </td>
            </tr>
            <tr>
                <td id="id1">
                    <p><span>身分證編號</span></p>
                </td>
                <td id="id2">
                    <p><span>&nbsp;{this.props.Identity}</span></p>
                </td>
            </tr>
            <tr>
                <td id="phone1">
                    <p><span>電話</span></p>
                </td>
                <td id="phone2" colspan="4">
                    <p class="MsoNormal"><span>&nbsp;{this.props.Phone }</span></p>
                </td>
            </tr>
            <tr>
                <td id="address1">
                    <p><span>住</span></p>
                    <p><span>址</span></p>
                </td>
                <td id="address2" colspan="4">
                    <p class="MsoNormal"><span>&nbsp;{this.props.Address}</span></p>
                </td>
            </tr>
            <tr>
                <td id="text" colspan="11">
                    <p class="MsoNormal"><span>
                            上列畸零（裡）地有合併使用或調整地形之必要，請准予核發建議證明。</span></p>
                    <p>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span>　 此<span>&nbsp;
                            </span>致</span></p>
                            <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span id="director">局
                                &nbsp;&nbsp;長
                            </span>
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>校對</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>監印</span>
                        </p>
                </td>
            </tr>
            <tr>
                <td id="picture" colspan="10" rowspan="4">
                    <p class="MsoNormal">
                        <span>附<span>&nbsp;</span>圖：</span></p>
                    <p id="rule">
                        <span>比例尺：１／</span></p>
                </td>
                <td id="remark1">
                    <p><span>備<span lang="EN-US">&nbsp;&nbsp;&nbsp;</span>註</span></p>
                </td>
            </tr>
            <tr>
                <td id="remark2">
                    <p class="MsoNormal"><span>&nbsp;</span></p>
                </td>
            </tr>
            <tr>
                <td id="P_example1">
                    <p><span>圖<span>&nbsp;&nbsp;&nbsp;</span>例</span></p>
                </td>
            </tr>
            <tr>
                <td id="P_example2">
                    <p class="MsoNormal"><span>□道路
                        </span></p>
                    <p class="MsoNormal"><span>□道路境界線（建築線）</span></p>
                    <p class="MsoNormal"><span>□現有房屋</span><span>
                        </span></p>
                    <p class="MsoNormal"><span>□溝渠</span></p>
                    <p class="MsoNormal"><span>□有合併使用必要之私有土地</span></p>
                    <p class="MsoNormal"><span>□建議有合併使用必要之公有畸零地</span></p>
                    <p class="MsoNormal"><span>□建議有合併使用必要之公有裡地</span></p>
                    <p class="MsoNormal"><span>□</span></p>
                </td>
            </tr>

        </tbody>
    </table></>
    
    }

}
export default PublicLandAppSub2
