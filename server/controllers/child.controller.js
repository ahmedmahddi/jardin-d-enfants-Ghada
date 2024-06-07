import {
  saveChildService,
  updateChildService,
  deleteChildService,
  getChildByIdService,
  getAllChildrenService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveChildController = async (req, res) => {
  try {
    const child = await saveChildService(req.body);
    res.json(Success(child, "Successfully child added."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateChildController = async (req, res) => {
  try {
    const child = await updateChildService(req.params.id, req.body);
    res.json(Success(child, "Successfully child updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteChildController = async (req, res) => {
  try {
    await deleteChildService(req.params.id);
    res.json(Success({}, "Successfully child deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getChildByIdController = async (req, res) => {
  try {
    const child = await getChildByIdService(req.params.id);
    res.json(Success(child, "Successfully fetched single child."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllChildrenController = async (req, res) => {
  try {
    const children = await getAllChildrenService();
    res.json(Success(children, "Successfully fetched all children."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
