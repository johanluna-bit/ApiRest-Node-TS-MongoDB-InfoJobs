import { Request, Response, request } from "express";
import dbConnect from "../config/mongo";
import {
  insertUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../services/item";
import { handleHttp } from "../utils/error.handle";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getUser(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getUsers();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateUser(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertUser(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteUser(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };