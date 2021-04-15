import * as React from 'react'
import * as Interfaces from "../models/interfaces";
import { Test } from './Test';

import iconSet from "../assets/icomoon-selection.json";
import IcomoonReact, { iconList } from "icomoon-react";


export class TestsGroup extends React.Component<{ dto: Interfaces.IGroupDto }> {

    expanded = false;

    constructor(props: { dto: Interfaces.IGroupDto }) {
        super(props);

        this.toggleExpand = this.toggleExpand.bind(this);
    }

    toggleExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        e.nativeEvent.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        if (this.props.dto.groupChildren?.length || this.props.dto.leafChildren?.length) {
            this.expanded = !this.expanded;
            this.setState({});
        }
    }

    render() {
        const groups = this.props.dto.groupChildren?.map(item => <TestsGroup dto={item} />) ?? [];
        const leafItems = this.props.dto.leafChildren?.map(item => <Test dto={item} />) ?? [];
        const icon = this.expanded ? "folder-open" : "folder";

        return (
            <div className="tests-group" >
                <IcomoonReact iconSet={iconSet} color="#444" size={16} icon={icon} />
                <span onClick={this.toggleExpand} className={`tests-group-name ${this.expanded ? "expanded" : ""}`}>
                    {this.props.dto.name}
                </span>
                
                {this.expanded  &&
                    <div>
                        {groups.length > 0 &&
                            <div>
                            {groups}
                            </div>
                        }

                        {leafItems.length > 0 &&
                            <ul>
                                {leafItems}
                            </ul>
                        }
                    </div>
                }
                
            </div>
        );
    }
}