import * as React from 'react'
import * as Interfaces from "../models/interfaces";
import { Test } from './Tests';

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

        this.expanded = !this.expanded;

        this.setState({});
    }

    render() {
        const groups = this.props.dto.groupChildren?.map(item => <TestsGroup dto={item} />) ?? [];
        const leafItems = this.props.dto.leafChildren?.map(item => <Test dto={item} />) ?? [];

        return (
            <div className="tests-group" onClick={this.toggleExpand}>
                <div>
                    {this.props.dto.name}
                </div>
                
                {this.expanded  &&
                    <div>
                        {groups.length > 0 &&
                            <div>
                                groups
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