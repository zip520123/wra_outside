import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
// import { BrowerRouter as Router , Route , Link } from 'react-router-dom'
import './css/App.css';
import TopNav from "./components/TopNav";
import BottomView from "./components/BottomView"
import RightView from "./components/RightView"
import FilePageView from "./components/FilePageView"
import HomePage from "./components/HomePage"
import { ArchBlock ,EnvBlock ,DirtyWater,WaterSource , WaterKeepBlock , FileBlock} from "./components/ListBlock"
import icon from './css/logo.png';
import archMengerImage from './css/archMenger.png'
import drtyWater from './css/drtyWater.png'
import envEdu from './css/envEdu.png'
import exampleForm from './css/exampleForm.png'
import fileUse from './css/fileUse.png'
import followup from './css/followup.png'
import waterFeedbake from './css/waterFeedbake.png'
import waterkeep from './css/waterkeep.png'
import WaterKeepView from './components/WaterKeepView'
import DirtyWaterView from './components/DirtyWaterView'
import WaterKeepBackView from './components/WaterKeepBackView'
import EnvEduView from './components/EnvEduView'
import { PanelGroup ,Panel , Row , Col} from 'react-bootstrap';
import ArchView from './components/ArchView'
import ExampleForm from './components/ExampleForm'
import FormSearchView from './components/FormSearchView'
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
        <div style={{width : '100%' , height : '98.5%', margin:'auto'}}>
            <Route exact path="/" component={HomePage} />
            <Route path="/fileUse" component={FilePageView}></Route>
            <Route path="/waterKeepView" component={WaterKeepView}></Route>
            <Route path="/dirtyWaterView" component={DirtyWaterView}></Route>
            <Route path="/waterKeepBack" component={WaterKeepBackView}></Route>
            <Route path="/arch" component={ArchView}></Route>
            <Route path="/envEdu" component={EnvEduView}></Route>
            <Route path="/exampleForm" component={ExampleForm}></Route>
            <Route path="/formSearch" component={FormSearchView}></Route>
            {/* <Route path="/form/:id" component={PanelWraper}></Route>
            <Route path="/form/:class/:id" component={RightView}></Route> */}
            
      </div>
      </>
    );
  }
}
const NoMatch = ({match}) => (
  <p>NoMatch </p>
)
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
    <Link to={`/fileUse`}><img className="imgButton" src={fileUse} alt=""/></Link>
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
