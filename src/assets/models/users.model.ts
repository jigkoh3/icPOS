export class UsersModel {
    users: Array<EmployeeModel>;
}

export class EmployeeModel {
    username: string;
    password: string;
    email: string;
    roles: Array<string>;
    firstName: string;
    lastName: string;
}