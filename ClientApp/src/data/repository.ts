import * as Interfaces from "../models/interfaces";

export class Repository {
    private readonly fooData: Interfaces.ITestCaseTreeDto = {
        groupChildren: [
            {
                id: 3000,
                name: "Task", 
                groupChildren: [{
                    id: 31000,
                    name: "Calendar"
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
            }
            ],
        leafChildren: [
            {
                id: 111,
                name: "Top leaf test 1",
                passed: false
            },
            {
                id: 2222,
                name: "Top leaf test 2",
                passed: true
            },
        ]
    };

    getTestCaseTree(): number[] {
        //return Promise.resolve([1, 2, 3, 4]);
        //return new Promise((resolve, reject) => {
        //    resolve([1, 2, 3, 4]);
        //});

        return [1,2,3, 5];
    }

    getTestCaseTreeAsync(): Promise<Interfaces.ITestCaseTreeDto> {
        return Promise.resolve(this.fooData);
    }
}