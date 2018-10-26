import React, { Component } from 'react';
class TestClass extends Component {
    render (){
        const id = this.props.match.params.id
        return (
            <>{this.renderSwitch(id)}</>
        )
    }
    renderSwitch = (key) => {
        switch (key) {
            case '':
            break
            default:
            break
        }
        return <></>
    }
}
export default TestClass