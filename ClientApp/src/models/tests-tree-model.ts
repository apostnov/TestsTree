import * as Interfaces from "./interfaces";
import { TestGroupModel } from "./test-group-model";

export class TestsTreeModel implements Interfaces.ITestCaseTreeDto {
    totalSubgroupsCount = 0;
    totalTestCount = 0;

    groups: TestGroupModel[] = [];

    leafChildren?: Interfaces.ILeafDto[];

    constructor(proto: Interfaces.ITestCaseTreeDto) {
        this.leafChildren = proto.leafChildren;

        this.groups = proto.groupChildren?.map(group => new TestGroupModel(group)) ?? [];
        this.totalSubgroupsCount = this.groups.reduce((sum, group) => sum + group.totalSubgroupsCount, 0) + this.groups.length;
        this.totalTestCount = this.groups.reduce((sum, group) => sum + group.totalTestsCount, 0) + this.totalTestCount;
    }
}