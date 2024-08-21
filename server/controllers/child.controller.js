// controllers/child.controller.js
import {
  createChild,
  getChildById,
  updateChild,
  deleteChild,
  getAllChildren,
} from "../services/child.service.js";

export const create = async (req, res) => {
  try {
    const child = await createChild(req.body);
    res.status(201).json(child);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const child = await getChildById(req.params.id);
    if (!child) {
      return res.status(404).json({ error: "Child not found" });
    }
    res.status(200).json(child);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const { page, limit } = req.query;

    const children = await getAllChildren(parseInt(page), parseInt(limit));
    res.status(200).json(children);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const child = await updateChild(req.params.id, req.body);
    res.status(200).json(child);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await deleteChild(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
