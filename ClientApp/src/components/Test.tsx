import * as React from 'react'
import * as Interfaces from "../models/interfaces";

import iconSet from "../assets/icomoon-selection.json";
import IcomoonReact from "icomoon-react";

export class Test extends React.Component<{ dto: Interfaces.ILeafDto }> {
    render() {
        const icon = this.props.dto.passed ? "checkmark" : "cancel-circle";
        const color = this.props.dto.passed ? "#0f0" : "#f00";

        return (
            <div>
                <IcomoonReact iconSet={iconSet} color={`${color}`} size={16} icon={icon} />

                <a className="test-link" href="#"># {this.props.dto.id}</a> {this.props.dto.name}
            </div>
        );
    }
}