import {IUser}  from "../interfaces/user.interfaces";
import ItemModel from "../models/item";



const getUsers = async () => {
    const responseItem = await ItemModel.find({});
    return responseItem;
};


const getUser = async (id:string) => {
    const responseItem = await ItemModel.findOne({_id:id});
    return responseItem;
};

const updateUser = async (id:string, data: IUser) => {
    const responseItem = await ItemModel.findOneAndUpdate({_id:id}, data, {new: true});
    return responseItem;
};

const deleteUser = async (id:string) => {
    const responseItem = await ItemModel.findByIdAndRemove({_id:id});
    return responseItem;
};

const insertUser = async (item: IUser) => {
    const responseItem = await ItemModel.create(item);
    
    return responseItem;
};

export {
    insertUser, 
    getUser, 
    getUsers, 
    updateUser, 
    deleteUser
};