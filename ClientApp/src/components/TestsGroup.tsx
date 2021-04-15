import * as React from 'react'
import { TestGroupModel } from "../models/test-group-model";
import { Test } from './Test';

import iconSet from "../assets/icomoon-selection.json";
import IcomoonReact from "icomoon-react";


export class TestsGroup extends React.Component<{ dto: TestGroupModel }> {

    expanded = false;

    constructor(props: { dto: TestGroupModel }) {
        super(props);

        this.toggleExpand = this.toggleExpand.bind(this);
    }

    toggleExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        e.nativeEvent.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        if (this.props.dto.groups?.length || this.props.dto.leafChildren?.length) {
            this.expanded = !this.expanded;
            this.setState({});
        }
    }

    render() {
        const groups = this.props.dto.groups?.map(item => <TestsGroup dto={item} />) ?? [];
        const leafItems = this.props.dto.leafChildren?.map(item => <Test dto={item} />) ?? [];
        const icon = this.expanded ? "folder-open" : "folder";

        return (
            <div className="tests-group" >
                <IcomoonReact iconSet={iconSet} color="#888" size={16} icon={icon} />
                <span onClick={this.toggleExpand} className={`tests-group-name ${this.expanded ? "expanded" : ""}`}>
                    {this.props.dto.name}
                    (<span title="Total groups count">{this.props.dto.totalSubgroupsCount}</span>
                    /<span title="Total tests count">{this.props.dto.totalTestsCount}</span>)
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