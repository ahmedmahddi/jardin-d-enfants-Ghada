const {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentById,
  updateEnrollmentStatus,
  deleteEnrollment,
} = require("../services/enrollment.service.js");

const createEnrollmentHandler = async (req, res) => {
  try {
    const enrollment = await createEnrollment(req.body);
    res.status(201).json(enrollment);
  } catch (error) {
    console.error("Error creating enrollment:", error);
    res.status(500).json({ error: error.message });
  }
};

const getAllEnrollmentsHandler = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const enrollmentsData = await getAllEnrollments(
      parseInt(page),
      parseInt(limit)
    );
    res.status(200).json(enrollmentsData);
  } catch (error) {
    console.error("Error fetching enrollments:", error);
    res.status(500).json({ error: error.message });
  }
};

const getEnrollmentByIdHandler = async (req, res) => {
  try {
    const enrollment = await getEnrollmentById(req.params.id);
    res.status(200).json(enrollment);
  } catch (error) {
    console.error("Error fetching enrollment:", error);
    res.status(404).json({ error: error.message });
  }
};

const updateEnrollmentStatusHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const enrollment = await updateEnrollmentStatus({ id, status });
    res.status(200).json(enrollment);
  } catch (error) {
    console.error("Error updating enrollment status:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteEnrollmentHandler = async (req, res) => {
  try {
    await deleteEnrollment(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting enrollment:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createEnrollmentHandler,
  getAllEnrollmentsHandler,
  getEnrollmentByIdHandler,
  updateEnrollmentStatusHandler,
  deleteEnrollmentHandler,
};
