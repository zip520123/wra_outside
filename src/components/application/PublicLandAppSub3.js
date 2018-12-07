import React, { Component } from 'react';
class PublicLandAppSub3 extends Component {
    render(){
        return <> <table id="public_land" border="1">
        <tbody>
            <tr>
                
                <td id="PublicLandAppSub1_title" colspan="18" >
                    <p class="MsoNormal"><span id="title1">經濟部水利署臺北水源特定區管理局<b>公有地合併使用證明書</b></span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span id="title2">&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;
                            日北水建字第&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;號</span></p>
                </td>
            </tr>
            <tr>
                <td id="public" colspan="2" rowspan="8">
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
                </td>
                <td id="public_land_mark" rowspan="5">
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
                <td id="public_district2" colspan="5">
                    <p class="MsoNormal">
                        <span>&nbsp;{this.props.GroundDistrict}</span>
                    </p>
                </td>
                <td id="private" rowspan="8" valign="top" style={{width: '27.0pt', height: '29.3pt', borderLeft: 'medium none', borderRight: '1.0pt solid windowtext', borderTop: 'medium none', borderBottom: '1.0pt solid windowtext', paddingLeft: '1.4pt', paddingRight: '1.4pt', paddingTop: '0cm', paddingBottom: '0cm'}}>
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
                <td id="private_land_mark" colspan="2" rowspan="5">
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
                <td id="private_district1" colspan="2">
                    <p class="MsoNormal"><span>區</span>
                    </p>
                </td>
                <td id="private_district2" colspan="4">
                    <p>
                        <p class="MsoNormal"><span>&nbsp;{this.props.OwnGroundDistrict}</span>
                        </p>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="public_segment1">
                    <p>
                        <span>段</span>
                    </p>
                </td>
                <td id="public_segment2" colspan="5">
                    <p>
                        <span>&nbsp;{this.props.GroundSection}</span>
                    </p>
                </td>
                <td id="private_segment1" colspan="2">
                    <p>
                        <span>段</span>
                    </p>
                </td>
                <td id="private_segment2" colspan="4">
                    <p class="MsoNormal">
                        <span>&nbsp;{this.props.OwnGroundSection}</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="public_smallsegment1">
                    <p class="MsoNormal">
                        <span>小段</span>
                    </p>
                </td>
                <td id="public_smallsegment2" colspan="5">
                    <p class="MsoNormal">
                        <span>&nbsp;{this.props.GroundSmallSec}</span></p>
                </td>
                <td id="private_smallsegment1" colspan="2">
                    <p class="MsoNormal">
                        <span>小段</span>
                    </p>
                </td>
                <td id="private_smallsegment2" colspan="4">
                    <p class="MsoNormal">
                        <span>&nbsp;{this.props.OwnGroundSmallSec}</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="public_land_number1">
                    <p>
                        <span>地號</span>
                    </p>
                </td>
                <td id="public_land_number2" colspan="5">
                    <p class="MsoNormal">
                        <span>&nbsp;{this.props.GroundLocnum}</span></p>
                </td>
                <td id="private_land_number1" colspan="2">
                    <p class="MsoNormal">
                        <span>地號</span></p>
                </td>
                <td id="private_land_number2" colspan="4">
                    <p class="MsoNormal">
                        <span>&nbsp;{this.props.OwnGroundLocnum}</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="public_land_eye1">
                    <p class="MsoNormal">
                        <span>地目</span></p>
                </td>
                <td id="public_land_eye2" colspan="5">
                    <p class="MsoNormal">
                        <span>&nbsp;{this.props.GroundType}</span>
                    </p>
                </td>
                <td id="private_land_eye1" colspan="2">
                    <p class="MsoNormal">
                        <span>地目</span>
                    </p>
                </td>
                <td id="private_land_eye2" colspan="4">
                    <p class="MsoNormal">
                        <span>&nbsp;{this.props.OwnGroundType}</span></p>
                </td>
            </tr>
            <tr>
                <td id="public_area1" colspan="2">
                    <p>
                        <span >面積</span><span >(m<sup>2</sup>)</span>
                    </p>
                </td>
                <td id="public_area2" colspan="5">
                    <p>
                        <span>&nbsp;{this.props.Area}</span>
                    </p>
                </td>
                <td id="private_area1" colspan="4">
                    <p>
                        <span >面積</span><span >(m<sup>2</sup>)</span>
                    </p>
                </td>
                <td id="private_area2" colspan="4">
                    <p>
                        <span>&nbsp;{this.props.OwnArea}</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="public_using_partition1" colspan="2">
                    <p>
                        <span>使用分區</span>
                    </p>
                </td>
                <td id="public_using_partition2" colspan="5">
                    <p>
                        <span>&nbsp;{this.props.UseBlock }</span>
                    </p>
                </td>
                <td id="private_using_partition1" colspan="4">
                    <p>
                        <span>使用分區</span>
                    </p>
                </td>
                <td id="private_using_partition2" colspan="4">
                    <p>
                        <span>&nbsp;{this.props.OwnUseBlock }</span></p>
                </td>
            </tr>
            <tr>
                <td id="public_owner1" colspan="2">
                    <p>
                        <span>所有權人</span>
                    </p>
                </td>
                <td id="public_owner2" colspan="5">
                    <p>
                        <span>&nbsp;{this.props.OwnerShip }</span></p>
                </td>
                <td id="private_owner1" colspan="4">
                    <p>
                        <span>所有權人</span></p>
                </td>
                <td id="private_owner2" colspan="4">
                    <p>
                        <span>&nbsp;{this.props.PriOwnerShip }</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="PublicLandAppSub1_apply_person" colspan="2" rowspan="3">
                    <p><b><span>申</span></b></p>
                    <p><b><span>&nbsp;</span></b></p>
                    <p><b><span>請</span></b></p>
                    <p><b><span>&nbsp;</span></b></p>
                    <p><b><span >人</span></b></p>
                </td>
                <td id="PublicLandAppSub1_name1" rowspan="2">
                    <p>
                        <span>姓</span>
                    </p>
                    <p>
                        <span>名</span>
                    </p>
                </td>
                <td id="PublicLandAppSub1_name2" colspan="2" rowspan="2">
                    <p>
                        <span>&nbsp;{this.props.Name}</span>
                    </p>
                </td>
                <td id="PublicLandAppSub1_birth1" colspan="3">
                    <p>
                        <span>出生年月日</span>
                    </p>
                </td>
                <td >
                    <p>
                        <span>&nbsp;{this.props.BirthdayYear}年{this.props.BirthdayMonth}月{this.props.BirthdayDay }日</span>
                    </p>
                </td>
                <td id="description1" rowspan="3">
                    <p>
                        <span>說</span>
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>
                        <span>明</span>
                    </p>
                </td>
                <td id="description2" colspan="8" rowspan="3">
                    <p>一、<span class="test"></span>上列基地正面路寬為<u>{this.props.GroundWidth}</u>公尺，依新北市畸零地使用規則第<u>{this.props.Rule}</u>條規定，最小寬度為<u>{this.props.Width }</u>公尺，最小深度為<u>{this.props.Depth}</u>公尺。</p>
                    <p>
                        二、本證明書僅供建築基地合併使用或調整地形之參考，公有財產主管機關如需保留公用或依事業計畫或公有財產有關規定處理時，
                        不得以本證明書為對抗；如涉及私權糾紛者，由申請人及公有財產主管機關依其他相關法令規定辦理。
                    </p>
                </td>
            </tr>
            <tr>
                <td id="PublicLandAppSub1_id1" colspan="3">
                    <p>
                        <span>身分證編號</span>
                    </p>
                </td>
                <td id="PublicLandAppSub1_id2" style={{width:'300px'}}>
                    <p>
                        <span>&nbsp;{this.props.Identity}</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="PublicLandAppSub1_address1">
                    <p>
                        <span>住</span>
                    </p>
                    <p>
                        <span>址</span>
                    </p>
                </td>
                <td id="PublicLandAppSub1_address2" colspan="6">
                    <p>
                        <span>&nbsp;{this.props.Address}</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="text" colspan="18">
                    <p>
                        <span>
                            上列畸零（裡）地經核有合併使用或調整地形之必要，請准予核發建議證明。
                        </span>
                    </p>
                    <p>
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;謹&nbsp;呈
                        </span>
                    </p>
                    <p>
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            局&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;長&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="undertaker1">
                    <p>承</p>
                    <p>辦</p>
                    <p>人</p>
                </td>
                <td id="undertaker2" colspan="5">
                    <p>&nbsp;</p>
                </td>
                <td  >
                    <p>複</p>
                    <p>&nbsp;</p>
                    <p>審</p>
                </td>
                <td colspan="2" >
                    <p>&nbsp;</p>
                </td>
                <td >
                    <p>課</p>
                    <p>&nbsp;</p>
                    <p>長</p>
                </td>
                <td colspan="5">
                    <p>&nbsp;</p>
                </td>
                <td >
                    <p>局</p>
                    <p>&nbsp;</p>
                    <p>長</p>
                </td>
                <td colspan="2">
                    <p>&nbsp;</p>
                </td>
            </tr>
            <tr>
                <td id="picture" colspan="15" rowspan="4">
                    <p id="picture_text1">
                        <span>附&nbsp;&nbsp;圖：</span>
                    </p>
                    <p id="picture_text2">
                        <span>比例尺：１／</span>
                    </p>
                </td>
                <td id="PublicLandAppSub1_remark1" colspan="3" valign="top">
                    <p>
                        <span>備&nbsp;&nbsp;&nbsp;&nbsp;註</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="PublicLandAppSub1_remark2" colspan="3">
                    <p>
                        <span style={{lineHeight : '8px',fontSize: '10px'}}>
                            本證明書之有效期間為八個月，在有效期間內核發本證明書之相關法令變更，致本證明書之內容與其抵觸時，本證明書失效。
                        </span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="p_example1" colspan="3">
                    <p>
                        <span>圖&nbsp;&nbsp;&nbsp;&nbsp;例</span>
                    </p>
                </td>
            </tr>
            <tr>
                <td id="p_example2" colspan="3">
                    <p>
                        <span class="one">□</span><span class="two">道路</span>
                    </p>
                    <p>
                        <span class="one">□</span><span class="two">道路境界線（建築線）</span>
                    </p>
                    <p>
                        <span class="one">□</span><span class="two">現有房屋</span>
                    </p>
                    <p>
                        <span class="one">□</span><span class="two">溝渠</span>
                    </p>
                    <p>
                        <span class="one">□</span><span class="two">有合併使用必要之私有土地</span>
                    </p>
                    <p>
                        <span class="one">□</span><span class="two">建議有合併使用必要之公有畸零地</span>
                    </p>
                    <p>
                        <span class="one">□</span><span class="two">建議有合併使用必要之公有裡地</span>
                    </p>
                    <p>
                        <span class="one">□</span></p>
                </td>
            </tr>
            
        </tbody>
    </table></>
    }
}
export default PublicLandAppSub3
