export class User {
    id?: number;
    lastName: string;
    firstName: string;
    email: string;
    telephone: string;
    password: string;
    roleId: number;
    isAccountValidate: boolean;
    permissions: string[];
}
