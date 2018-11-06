import React, { Component } from 'react';
import {PanelGroup,Panel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Atag extends Component {
  handleClick = (e) => {
    e.preventDefault();
    // this.props.drawerOnClick(this.props.href)
    console.log(this.props.href)
  }
  render(){
    return <div><Link to={`/form/${this.props.name}`}>{this.props.name}</Link></div>
  }
}
const ALink = ({name , match}) => (
  <div><Link to={`${match.url}/${name}`}><h4>{name}</h4></Link></div>
)
ALink.defaultProps = {
  match : {
    url : ""
  }
};
export const DivLink = ({name , match , cellStyle , centerTextStyle}) => (
    <Link to={`${match.url}/${name}`}>
        <div style={cellStyle}>
            <h1 style={centerTextStyle}>{name}</h1>
        </div> 
    </Link>
)
export const AWhite = ({url , name}) => (
  <a style={{color: 'white'}} href={url} target="_blank" rel="noopener noreferrer">{name}</a>
) 
export const ABlank = ({url , name}) => ( <div>
  <a href={url} target="_blank" rel="noopener noreferrer"><h4>{name}</h4></a>
</div>)
export const ArchBlock = ({match}) => (<><Panel.Heading>
<Panel.Title toggle>建築管理類</Panel.Title>
</Panel.Heading>
<Panel.Body collapsible>
    <PanelGroup accordion id="accordion-example">
        <Panel eventKey="1">
        <Panel.Heading >
          <Panel.Title toggle>建築管理-建築管理</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
          <ALink match={match} name="建造執照申請" />
          <ALink match={match} name="拆除執照申請" />
          <ALink match={match} name="招牌廣告及樹立廣告許可申請" />
          <ALink match={match} name="現有巷道認定申請" />
          <ALink match={match} name="建築線申請" />
          <ALink match={match} name="無障礙生活環境宣導專頁" />
        </Panel.Body>
      </Panel>
      <Panel eventKey="2">
        <Panel.Heading>
          <Panel.Title toggle>建築管理-施工管理</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
          <ALink match={match} name="施工勘驗（放樣申報）" />
          <ALink match={match} name="施工勘驗（開工申報）" />
          <ALink match={match} name="施工勘驗（各層施工勘驗）" />
          <ALink match={match} name="變更起、承、監造人申請" />
          <ALink match={match} name="開工、竣工展期申請" />
        </Panel.Body>
      </Panel>    
    </PanelGroup>
</Panel.Body></>

)
export const EnvBlock = () => (
  <>
  <Panel.Heading>
        <Panel.Title toggle>環境教育類</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
      <ABlank url="http://child.wratb.gov.tw/Learn_wratb/reserve.aspx" name="環境教育課程活動申請表" />
      <ABlank url="http://child.wratb.gov.tw/SewageApplication/" name="污水場參訪申請（線上申請）" />
      </Panel.Body>
      </>
)
export const DirtyWater = ({match}) => (
  <>
    <Panel.Heading>
        <Panel.Title toggle>污水下水道管理</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
        <ABlank url="https://www.wratb.gov.tw/media/18063/放流水申請表.odt" name="處理水申請"></ABlank>
        <ALink match={match} name="既有建築物自設污水處理設施（國有土地專用）申請" />
        <ALink match={match} name="污水下水道用戶排水設備接管" />
        <ALink match={match} name="專用下水道納管申請" />
      </Panel.Body>
  </>
)
export const WaterSource = () => (
  <>
    <Panel.Heading>
        <Panel.Title toggle>水源保育與回饋</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
        <ABlank url="http://child.wratb.gov.tw/ct_welfare/WRAllowance" name="水源保育與回饋" />
        
      </Panel.Body>
  </>
)
export const WaterKeepBlock = ({match}) => (
  <><Panel.Heading>
  <Panel.Title toggle>水土保持類</Panel.Title>
</Panel.Heading>
<Panel.Body collapsible>
  <ALink match={match} name="簡易水土保持申報書" />
  <ALink match={match} name="山坡地土地可利用限度查定結果異議複查申請" />
</Panel.Body></>
)
export const FileBlock = ({match}) => (
  <>
    <Panel.Heading>
        <Panel.Title toggle>檔案應用</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
        <ALink match={match} name="檔卷應用申請" />
      </Panel.Body>
  </>
)
class ListBlock extends Component {
  
  handleClick = (href) => {
    // this.props.clickHandler(href);
    // console.log(href)
  }
  render(){
    return (<PanelGroup accordion id="accordion">
    <Panel eventKey="1">
      <ArchBlock />
    </Panel>
    <Panel eventKey="2">
      <EnvBlock />
    </Panel>
    <Panel eventKey="3">
      <DirtyWater />
    </Panel>
    <Panel eventKey="4">
      <WaterKeepBlock />
    </Panel>
    <Panel eventKey="5">
      <WaterSource />
    </Panel>
    <Panel eventKey="6">
      <FileBlock />
    </Panel>
  </PanelGroup>)
  }
}
export default ListBlock