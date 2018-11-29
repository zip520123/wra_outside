import React, { Component } from 'react';
import {Row,Col,PageHeader,Form,ControlLabel,FormControl,FormGroup,Checkbox,Button} from 'react-bootstrap'

const readOnlyCheckBox = (state) =>{
    return <span style={{fontFamily: "Wingdings"}}>{state ? 'þ' : '¨'}</span>
}
class PublicLandApp extends Component {
    constructor(props , context){
        super(props, context)
        this.state = {
        }
    }
    render(){
        return <>aa</>
    }
}
export default PublicLandApp