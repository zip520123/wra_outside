import React, { Component } from 'react';
class RightView extends Component {

    render() {
        const id = this.props.match.params.id

        return (
            <div>
                {(id === "建造執照申請") ? (
                <h3>是</h3>
            ):(
                <h3>{this.props.match.params.id}</h3>
            )}
            </div>
        )
    }
}
export default RightView