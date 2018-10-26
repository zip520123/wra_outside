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
    <Link to={`/form/archMenger`}><img className="imgButton" src={'/resource/archMenger.png'} alt=""/></Link>
  </Col>
  <Col xs={3}>
    <Link to={`/form/drtyWater`}><img className="imgButton" src={'/resource/drtyWater.png'} alt=""/></Link>
  </Col>
  <Col xs={3}>
    <Link to={`/form/envEdu`}><img className="imgButton" src={'/resource/envEdu.png'} alt=""/></Link>
  </Col>
  <Col xs={3}>
    <Link to={`/form/fileUse`}><img className="imgButton" src={'/resource/fileUse.png'} alt=""/></Link>
  </Col>
</Row>
<Row>
  <Col xs={3}>
  <Link to={`/form/waterFeedbake`}><img className="imgButton" src={'/resource/waterFeedbake.png'} alt=""/></Link>
  </Col>
  <Col xs={3}>
  <Link to={`/form/waterkeep`}><img className="imgButton" src={'/resource/waterkeep.png'} alt=""/></Link>
  </Col>
  <Col xs={3}>
  <Link to={`/form/followup`}><img className="imgButton" src={'/resource/followup.png'} alt=""/></Link>
  </Col>
  <Col xs={3}>
  <Link to={`/form/exampleForm`}><img className="imgButton" src={'/resource/exampleForm.png'} alt=""/></Link>
  </Col>
</Row></>
)
export default App;
