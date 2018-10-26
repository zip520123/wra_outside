import React, { Component } from 'react';
import {
  Route,
  Link,
  // Switch,
  Redirect
} from 'react-router-dom';
// import { BrowerRouter as Router , Route , Link } from 'react-router-dom'
import './css/App.css';
import TopNav from "./components/TopNav";
// import ListBlock from "./components/ListBlock.js"
import BottomView from "./components/BottomView"
import RightView from "./components/RightView"
import ListBlock , { ArchBlock ,EnvBlock ,DirtyWater,WaterSource , WaterKeepBlock , FileBlock} from "./components/ListBlock"
import icon from './css/logo.png';
import archMengerImage from './css/archMenger.png'
import drtyWater from './css/drtyWater.png'
import envEdu from './css/envEdu.png'
import exampleForm from './css/exampleForm.png'
import fileUse from './css/fileUse.png'
import followup from './css/followup.png'
import waterFeedbake from './css/waterFeedbake.png'
import waterkeep from './css/waterkeep.png'
import { PanelGroup ,Panel , Row , Col} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tab : 0 
    }
  }
  tabChange = (key) => {
      this.setState((state,props)=>{
        return {tab : key}
      })
    } 
  render() {
    return (<>
        <header>
            <Link to={`/`}><h1 id="topH1"><img id="headerImage" src={icon} alt="logo"/>臺北水源特定區管理局申辦e櫃台</h1></Link>
        </header>
        <div style={{width : '90%', margin:'auto'}}>
          <div className="marginWrap">
            {/* <TopNav activeTab={this.state.tab} tabChangeHandler={(key) => this.tabChange(key)}/> */}
            <Route exact path="/" component={Home} />
            <Route path="/form/:id" component={PanelWraper}></Route>
            <Route path="/form/*/:id" component={RightView}></Route>
          
          </div>
      </div>
      </>
    );
  }
}
class PanelWraper extends Component {
  render () {
    const id = this.props.match.params.id
    return (<PanelGroup id="formlist" >
    <Panel eventKey="1" defaultExpanded>
      {this.renderSwitch(id , this.props.match)}
    </Panel>
  </PanelGroup>
      )
  }
  renderSwitch = (key , match) => {
    switch (key) {
      case 'archMenger':
        return <ArchBlock match={match}/>
      case 'drtyWater':
        return <DirtyWater match={match}/>
      case 'envEdu':
        return <EnvBlock match={match}/>
      case 'waterFeedbake':
        return <WaterSource match={match}/>
      case 'fileUse':
        return <FileBlock match={match}/>
      case 'waterkeep':
        return <WaterKeepBlock match={match}/>
      default:
        break
    }
  }
}

const Home = () =>(<>
  <Row >
  <Col xs={3}>
    <Link to={`/form/archMenger`}><img className="imgButton" src={archMengerImage} alt=""/></Link>
  </Col>
  <Col xs={3}>
    <Link to={`/form/drtyWater`}><img className="imgButton" src={drtyWater} alt=""/></Link>
  </Col>
  <Col xs={3}>
    <Link to={`/form/envEdu`}><img className="imgButton" src={envEdu} alt=""/></Link>
  </Col>
  <Col xs={3}>
    <Link to={`/form/fileUse`}><img className="imgButton" src={fileUse} alt=""/></Link>
  </Col>
</Row>
<Row>
  <Col xs={3}>
  <Link to={`/form/waterFeedbake`}><img className="imgButton" src={waterFeedbake} alt=""/></Link>
  </Col>
  <Col xs={3}>
  <Link to={`/form/waterkeep`}><img className="imgButton" src={waterkeep} alt=""/></Link>
  </Col>
  <Col xs={3}>
  <Link to={`/form/followup`}><img className="imgButton" src={followup} alt=""/></Link>
  </Col>
  <Col xs={3}>
  <Link to={`/form/exampleForm`}><img className="imgButton" src={exampleForm} alt=""/></Link>
  </Col>
</Row></>
)
export default App;
