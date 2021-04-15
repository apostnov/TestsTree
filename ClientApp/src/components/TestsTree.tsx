import * as React from 'react'
import { Repository } from "../data/repository";
import * as Interfaces from "../models/interfaces";
import { TestsGroup } from './TestsGroup';
import { Test } from './Tests';

export class TestsTree extends React.Component {
    repository: Repository;
    testsTree?: Interfaces.ITestCaseTreeDto;

    constructor(props: any) {
        super(props);
        this.state = {
            currentCount: 0,
        };

        this.repository = new Repository();
    }

    async componentDidMount() {
        this.testsTree = await this.repository.getTestCaseTreeAsync();
        this.setState({});
    }

    componentWillUnmount() {
        // .....
    }

    render() {
        if (!this.testsTree) {
            return (
                <div>No data</div>
            );
        }

        const groups = this.testsTree.groupChildren?.map(item => <TestsGroup dto={item} />) ?? [];
        const leafItems = this.testsTree.leafChildren?.map(item => <Test dto={item} />) ?? [];

        return (
            <div>
                <h1>TestsTree</h1>
                {groups}
                
                <ul>
                    {leafItems}
                </ul>
            </div>
        );
    }

}