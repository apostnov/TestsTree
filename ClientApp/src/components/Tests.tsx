import * as React from 'react'
import * as Interfaces from "../models/interfaces";

export class Test extends React.Component<{ dto: Interfaces.ILeafDto }> {
    render() {
        return (
            <div>
                <a className="test-link" href="#"># {this.props.dto.id}</a>{this.props.dto.name}
            </span>
        );
    }
}