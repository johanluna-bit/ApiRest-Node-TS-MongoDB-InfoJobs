export interface IJob {
    title: string;
    description: string;
    budged: Number;
    plublicationDate: Date;
    state: boolean;
    typeUser: "freelancer" | "client";
};