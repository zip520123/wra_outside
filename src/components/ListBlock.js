import React, { Component } from 'react';
import './ListBlock.css';
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
    return <div><a href={this.props.href} onClick={e => this.handleClick(e)}>{this.props.name}</a></div>
  }
}
class ListBlock extends Component {
  
  handleClick = (href) => {
    // this.props.clickHandler(href);
    // console.log(href)
  }
  render(){
    return (<PanelGroup accordion id="accordion-example">
    <Panel eventKey="1">
      <Panel.Heading>
        <Panel.Title toggle>環境教育類</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
      <Atag name="環境教育課程活動申請表" href="環境教育課程活動申請表" drawerOnClick={this.handleClick} />
      <Atag name="污水場參訪申請（線上申請）" href="污水場參訪申請（線上申請）" drawerOnClick={this.handleClick} />
      </Panel.Body>
    </Panel>
    <Panel eventKey="2">
      <Panel.Heading>
        <Panel.Title toggle>建築管理類</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
          <PanelGroup accordion id="accordion-example">
              <Panel eventKey="1">
              <Panel.Heading>
                <Panel.Title toggle>建築管理-建築管理</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <Atag name="建造執照申請" href="#" drawerOnClick={this.handleClick} />
                <Atag name="拆除執照申請" href="#" drawerOnClick={this.handleClick} />
                <Atag name="招牌廣告及樹立廣告許可申請" href="#" drawerOnClick={this.handleClick} />
                <Atag name="現有巷道認定申請" href="#" drawerOnClick={this.handleClick} />
                <Atag name="建築線申請" href="#" drawerOnClick={this.handleClick} />
                <Atag name="無障礙生活環境宣導專頁" href="#" drawerOnClick={this.handleClick} />
              </Panel.Body>
            </Panel>
            <Panel eventKey="2">
              <Panel.Heading>
                <Panel.Title toggle>建築管理-施工管理</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <Atag name="施工勘驗（放樣申報）" href="#" drawerOnClick={this.handleClick} />
                <Atag name="施工勘驗（開工申報）" href="#" drawerOnClick={this.handleClick} />
                <Atag name="施工勘驗（各層施工勘驗）" href="#" drawerOnClick={this.handleClick} />
                <Atag name="變更起、承、監造人申請" href="#" drawerOnClick={this.handleClick} />
                <Atag name="開工、竣工展期申請" href="#" drawerOnClick={this.handleClick} />
              </Panel.Body>
            </Panel>    
          </PanelGroup>
      </Panel.Body>
    </Panel>
    <Panel eventKey="3">
      <Panel.Heading>
        <Panel.Title toggle>水土保持類</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
        <Atag name="簡易水土保持申報書" href="#" drawerOnClick={this.handleClick} />
        <Atag name="山坡地土地可利用限度查定結果異議複查申請" href="#" drawerOnClick={this.handleClick} />
      </Panel.Body>
    </Panel>
    <Panel eventKey="4">
      <Panel.Heading>
        <Panel.Title toggle>污水下水道管理</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
        <Atag name="既有建築物自設污水處理設施（國有土地專用）申請 " href="#" drawerOnClick={this.handleClick} />
        <Atag name="污水下水道用戶排水設備接管 " href="#" drawerOnClick={this.handleClick} />
        <Atag name="專用下水道納管申請 " href="#" drawerOnClick={this.handleClick} />
      </Panel.Body>
    </Panel>
  </PanelGroup>)
  }
    // render(){
    //   return (
    //     <Accordion>
    //         <AccordionItem>
    //             <AccordionItemTitle>
    //                 <h3 className="u-position-relative">
    //                 環境教育類
    //                     <div className="accordion__arrow" role="presentation" />
    //                 </h3>
    //             </AccordionItemTitle>
    //             <AccordionItemBody>
    //               <Atag name="環境教育課程活動申請表" href="環境教育課程活動申請表" drawerOnClick={this.handleClick} />
    //               <Atag name="污水場參訪申請（線上申請）" href="污水場參訪申請（線上申請）" drawerOnClick={this.handleClick} />
    //               </AccordionItemBody>
    //         </AccordionItem>
    //         <AccordionItem>
    //             <AccordionItemTitle>
    //                 <h3 className=" u-position-relative u-margin-bottom-s">
    //                 建築管理類
    //                     <div className="accordion__arrow" role="presentation" />
    //                 </h3>
    //                 {/* <div>How to install the project</div> */}
    //             </AccordionItemTitle>
    //             <AccordionItemBody>
    //             <Accordion accordion={false}>
    //                     <AccordionItem>
    //                         <AccordionItemTitle>
    //                             <h3 className="u-position-relative">
    //                             建築管理-建築管理
    //                                 <div
    //                                     className="accordion__arrow"
    //                                     role="presentation"
    //                                 />
    //                             </h3>
    //                         </AccordionItemTitle>
    //                         <AccordionItemBody>
    //                           <Atag name="建造執照申請" href="建造執照申請" drawerOnClick={this.handleClick} />
    //                           <Atag name="拆除執照申請" href="拆除執照申請" drawerOnClick={this.handleClick} />
    //                           <Atag name="招牌廣告及樹立廣告許可申請" href="招牌廣告及樹立廣告許可申請" drawerOnClick={this.handleClick} />
    //                           <Atag name="現有巷道認定申請" href="現有巷道認定申請" drawerOnClick={this.handleClick} />
    //                           <Atag name="建築線申請" href="建築線申請" drawerOnClick={this.handleClick} />
    //                         </AccordionItemBody>
    //                     </AccordionItem>
    //                     <AccordionItem>
    //                         <AccordionItemTitle>
    //                             <h3 className="u-position-relative">
    //                                 污水場參訪申請（線上申請）
    //                                 <div
    //                                     className="accordion__arrow"
    //                                     role="presentation"
    //                                 />
    //                             </h3>
    //                         </AccordionItemTitle>
    //                         <AccordionItemBody>
                                
    //                         </AccordionItemBody>
    //                     </AccordionItem>
    //                     </Accordion>
    //             </AccordionItemBody>
    //         </AccordionItem>
    // </Accordion>
    // );
    // }
}
export default ListBlock