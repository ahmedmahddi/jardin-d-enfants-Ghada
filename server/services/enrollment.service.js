import { Enrollment, User, Children } from "../models/index.js";
import { sendEmail } from "../utils/email.js";
import bcrypt from "bcryptjs";
import sequelize from "../config/db.js";

const logError = (functionName, error) => {
  console.error(`Error in ${functionName}:`, error.message);
};

const logSuccess = (functionName, message) => {
  console.log(`Success in ${functionName}: ${message}`);
};

export const createEnrollment = async enrollmentData => {
  const functionName = "createEnrollment";
  console.log(`${functionName} - Received enrollment data:`, enrollmentData);

  try {
    if (typeof enrollmentData.days === "string") {
      enrollmentData.days = JSON.parse(enrollmentData.days);
    }
    const enrollment = await Enrollment.create(enrollmentData);
    logSuccess(functionName, `Enrollment created with ID: ${enrollment.id}`);
    return enrollment;
  } catch (error) {
    logError(functionName, error);
    throw error;
  }
};

export const updateEnrollmentStatus = async ({ id, status }) => {
  const functionName = "updateEnrollmentStatus";
  console.log(`${functionName} - Received enrollment ID: ${id}`);
  console.log(`${functionName} - Received status: ${status}`);

  const transaction = await sequelize.transaction();

  try {
    const enrollment = await Enrollment.findByPk(id, { transaction });
    if (!enrollment) {
      const errorMessage = "Enrollment not found";
      logError(functionName, new Error(errorMessage));
      throw new Error(errorMessage);
    }

    enrollment.status = status;
    await enrollment.save({ transaction });

    if (status === "approved") {
      let parent = await User.findOne({
        where: { email: enrollment.parentEmail },
        transaction,
      });
      if (!parent) {
        const password = generateRandomPassword();
        const hashedPassword = await bcrypt.hash(password, 10);

        parent = await User.create(
          {
            name: enrollment.parentName,
            email: enrollment.parentEmail,
            password: hashedPassword,
            role: "parent",
          },
          { transaction }
        );

        await sendEmail({
          to: enrollment.parentEmail,
          subject: "Votre inscription est approuvée",
          message: `Cher/Chère ${enrollment.parentName},

Félicitations ! Votre enfant ${enrollment.childName} a été inscrit avec succès à Jardin d'enfant Ghada. Nous sommes ravis de vous accueillir parmi nous.

Voici vos identifiants pour vous connecter :

Email : ${enrollment.parentEmail}
Mot de passe : ${password}

Merci de votre confiance.

Cordialement,
L'équipe de Jardin d'enfant Ghada`,
        });
        logSuccess(
          functionName,
          `Email sent to new parent user: ${parent.email}`
        );
      } else {
        await sendEmail({
          to: enrollment.parentEmail,
          subject: "Votre inscription est approuvée",
          message: `Cher/Chère ${enrollment.parentName},

Félicitations ! Votre enfant ${enrollment.childName} a été inscrit avec succès à Jardin d'enfant Ghada. Nous sommes ravis de vous accueillir parmi nous.

Merci de votre confiance.

Cordialement,
L'équipe de Jardin d'enfant Ghada`,
        });
        logSuccess(
          functionName,
          `Email sent to existing parent user: ${parent.email}`
        );
      }

      const child = await Children.create(
        {
          childName: enrollment.childName,
          birthdate: enrollment.birthdate,
          age: enrollment.age,
          address: enrollment.address,
          city: enrollment.city,
          state: enrollment.state,
          gender: enrollment.gender,
          days: enrollment.days,
          parentId: parent.id,
          parentName: enrollment.parentName,
          parentPhone: enrollment.parentPhone,
          parentEmail: enrollment.parentEmail,
          parentWork: enrollment.parentWork,
          secondPersonName: enrollment.secondPersonName,
          secondPersonPhone: enrollment.secondPersonPhone,
          medications: enrollment.medications,
        },
        { transaction }
      );

      await transaction.commit();
      logSuccess(
        functionName,
        `Enrollment approved and child created with ID: ${child.id}`
      );
      return { enrollment, child, parent };
    }

    await transaction.commit();
    logSuccess(functionName, `Enrollment status updated to: ${status}`);
    return enrollment;
  } catch (error) {
    await transaction.rollback();
    logError(functionName, error);
    throw error;
  }
};

function generateRandomPassword() {
  return Math.random().toString(36).slice(-8);
}

export const getAllEnrollments = async (page, limit) => {
  const functionName = "getAllEnrollments";
  try {
    const offset = (page - 1) * limit;
    const { rows: enrollments, count: totalItems } =
      await Enrollment.findAndCountAll({
        offset,
        limit,
      });
    logSuccess(functionName, `Retrieved ${enrollments.length} enrollments`);
    return {
      enrollments,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
    };
  } catch (error) {
    logError(functionName, error);
    throw error;
  }
};

export const getEnrollmentById = async id => {
  const functionName = "getEnrollmentById";
  try {
    const enrollment = await Enrollment.findByPk(id);
    if (!enrollment) {
      const errorMessage = "Enrollment not found";
      logError(functionName, new Error(errorMessage));
      throw new Error(errorMessage);
    }
    logSuccess(functionName, `Enrollment retrieved with ID: ${enrollment.id}`);
    return enrollment;
  } catch (error) {
    logError(functionName, error);
    throw error;
  }
};

export const deleteEnrollment = async id => {
  const functionName = "deleteEnrollment";
  console.log(`${functionName} - Received enrollment ID: ${id}`);

  const transaction = await sequelize.transaction();

  try {
    const enrollment = await getEnrollmentById(id);
    if (!enrollment) {
      const errorMessage = "Enrollment not found";
      logError(functionName, new Error(errorMessage));
      throw new Error(errorMessage);
    }
    await enrollment.destroy({ transaction });
    await transaction.commit();
    logSuccess(functionName, `Enrollment deleted with ID: ${enrollment.id}`);
    return enrollment;
  } catch (error) {
    await transaction.rollback();
    logError(functionName, error);
    throw error;
  }
};
