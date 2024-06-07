import {
  saveEnrollment,
  updateEnrollment,
  deleteEnrollment,
  getEnrollment,
  getAllEnrollments,
} from "../repository/enrollment.repository.js";
import AppError from "../utils/appError.js";
import { sendEmail } from "../utils/email.js";

export const saveEnrollmentService = async data => {
  try {
    const enrollment = await saveEnrollment(data);
    return enrollment;
  } catch (err) {
    throw new AppError(err.message, err.status || 500);
  }
};

export const updateEnrollmentService = async (id, data) => {
  try {
    const enrollment = await updateEnrollment(id, data);

    if (enrollment.status === "approved") {
      const parentEmail = enrollment.fatherEmail;
      const parentPassword = "securePassword";

      const message = `Dear ${enrollment.fatherName},

Congratulations! Your child's enrollment has been approved.

You can now access the parent portal using the following credentials:

Username: ${parentEmail}
Password: ${parentPassword}

Thank you for choosing our service!

Best regards,
YourApp Team`;

      await sendEmail({
        email: parentEmail,
        subject: "Enrollment Approved",
        message,
      });
    }

    return enrollment;
  } catch (err) {
    throw new AppError(err.message, err.status || 500);
  }
};

export const deleteEnrollmentService = async id => {
  try {
    const affectedRows = await deleteEnrollment(id);
    return affectedRows;
  } catch (err) {
    throw new AppError(err.message, err.status || 500);
  }
};

export const getEnrollmentService = async id => {
  try {
    const enrollment = await getEnrollment(id);
    return enrollment;
  } catch (err) {
    throw new AppError(err.message, err.status || 500);
  }
};

export const getAllEnrollmentService = async () => {
  try {
    const enrollments = await getAllEnrollments();
    return enrollments;
  } catch (err) {
    throw new AppError(err.message, err.status || 500);
  }
};
