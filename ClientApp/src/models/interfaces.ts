export interface ITree {
    groupChildren?: IGroupDto[];
    leafChildren?: ILeafDto[];
}

export interface IGroupDto extends ITree {
    id: number;
    name: string;
}

export interface ILeafDto {
    id: number;
    name: string;
    passed: boolean;
}

export interface ITestCaseTreeDto extends ITree{
}