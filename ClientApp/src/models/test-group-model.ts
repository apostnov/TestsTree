import * as Interfaces from "./interfaces";

export class TestGroupModel implements Interfaces.IGroupDto {
    id!: number;
    name!: string;
    leafChildren?: Interfaces.ILeafDto[];

    groups: TestGroupModel[] = [];
    totalSubgroupsCount = 0;
    totalTestsCount = 0;

    constructor(proto: Interfaces.IGroupDto) {
        this.id = proto.id;
        this.name = proto.name;
        this.leafChildren = proto.leafChildren;

        this.groups = proto.groupChildren?.map(group => new TestGroupModel(group)) ?? [];

        this.totalSubgroupsCount = this.groups.reduce((sum, group) => sum + group.totalSubgroupsCount, 0) + this.groups.length;
        this.totalTestsCount = this.groups.reduce((sum, group) => sum + group.totalTestsCount, 0) + (this.leafChildren?.length ?? 0);
    }
}