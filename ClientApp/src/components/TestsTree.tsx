import * as React from 'react'

import { Repository } from "../data/repository";
import { TestsTreeModel } from '../models/tests-tree-model';
import { TestsGroup } from './TestsGroup';
import { Test } from './Test';

export class TestsTree extends React.Component {
    repository: Repository;
    testsTree?: TestsTreeModel;

    constructor(props: any) {
        super(props);
        this.state = {
            currentCount: 0,
        };

        this.repository = new Repository();
    }

    async componentDidMount() {
        this.testsTree = new TestsTreeModel(await this.repository.getTestCaseTreeAsync());
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

        const groups = this.testsTree.groups?.map(item => <TestsGroup dto={item} />) ?? [];
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