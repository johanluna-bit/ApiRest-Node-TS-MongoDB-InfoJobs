export interface IUser {
    id:number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    description: string;
    typeUser: "freelancer" | "client";
};