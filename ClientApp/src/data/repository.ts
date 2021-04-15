import * as Interfaces from "../models/interfaces";

export class Repository {
    private readonly fooData: Interfaces.ITestCaseTreeDto = {
        groupChildren: [
            {
                id: 3000,
                name: "Task", 
                groupChildren: [{
                    id: 32000,
                    name: "Create"
                },{
                    id: 31000,
                        name: "Calendar",
                        groupChildren: [{
                            id: 32200,
                            name: "Sub calendar"
                        }],
                        leafChildren: [
                            {
                                id: 31063,
                                name: "Calendar 1",
                                passed: false
                            },
                            {
                                id: 31099,
                                name: "Calendar 2",
                                passed: true
                            },
                            {
                                id: 30100,
                                name: "Calendar 3",
                                passed: true
                            }
                        ]
                }, {
                    id: 30000,
                    name: "Invitation",
                    leafChildren: [
                        {
                            id: 30063,
                            name: "Invite user from regular",
                            passed: false
                        },
                        {
                            id: 30099,
                            name: "Premium, Invite user from regular",
                            passed: true
                        },
                        {
                            id: 30100,
                            name: "Premium, Invite user from domain",
                            passed: false
                        }
                    ]
                }],
            }, {
                id: 40000,
                name: "Account management",
                leafChildren: [
                    {
                        id: 40011,
                        name: "Account test 1",
                        passed: false
                    },
                    {
                        id: 40022,
                        name: "Account test 2",
                        passed: true
                    }
                ]
            }
            ],
        leafChildren: [
            {
                id: 111,
                name: "Top leaf test 1",
                passed: true
            },
            {
                id: 2222,
                name: "Top leaf test 2",
                passed: false
            },
        ]
    };

    getTestCaseTreeAsync(): Promise<Interfaces.ITestCaseTreeDto> {
        return Promise.resolve(this.fooData);
    }
}