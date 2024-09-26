const {
  createStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
  getAllStaff,
} = require("../services/staff.service.js");

exports.create = async (req, res) => {
  try {
    const staff = await createStaff(req.body);
    res.status(201).json(staff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const staff = await getStaffById(req.params.id);
    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json(staff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const { page, limit } = req.query;

    const staffList = await getAllStaff(parseInt(page), parseInt(limit));
    res.status(200).json(staffList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedStaff = await updateStaff(req.params.id, req.body);
    res.status(200).json(updatedStaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await deleteStaff(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
