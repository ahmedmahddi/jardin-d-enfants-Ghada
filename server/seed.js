import sequelize from "./config/db.js";
import {
  createUserMockData,
  createChildrenMockData,
  createStaffMockData,
  createEnrollmentMockData,
  createEventMockData,
  createCurriculumMockData,
  createAttendanceMockData,
  createNotificationMockData,
  createCommunicationMockData,
  createParentPaymentMockData,
  createStaffPaymentMockData,
  createReportMockData,
  createEvaluationMockData,
  createNoticeboardMockData,
} from "./mockdata.js";

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Drop and recreate all tables

    console.log("Database synced");

    // Create Users
    const users = await createUserMockData();
    console.log("Users created:", users);

    // Create Children
    const children = await createChildrenMockData(users[2].id); // Assuming the third user is the parent
    console.log("Children created:", children);

    // Create Staff
    const staffs = await createStaffMockData(users[1].id); // Assuming the second user is the staff
    console.log("Staff created:", staffs);

    // Create Enrollments
    const enrollments = await createEnrollmentMockData();
    console.log("Enrollments created:", enrollments);

    // Create Events
    const events = await createEventMockData();
    console.log("Events created:", events);

    // Create Curriculums
    const curriculums = await createCurriculumMockData(users[1].id); // Assuming the second user is the teacher
    console.log("Curriculums created:", curriculums);

    // Create Attendances
    const attendances = await createAttendanceMockData(
      children.map(child => child.id)
    );
    console.log("Attendances created:", attendances);

    // Create Notifications
    const notifications = await createNotificationMockData(users[2].id); // Assuming the third user is the recipient parent
    console.log("Notifications created:", notifications);

    // Create Communications
    const communications = await createCommunicationMockData(
      users[1].id,
      users[2].id
    ); // Assuming communication between staff and parent
    console.log("Communications created:", communications);

    // Create Parent Payments
    const parentPayments = await createParentPaymentMockData(
      users[2].id,
      children.map(child => child.id)
    ); // Assuming the third user is the parent
    console.log("Parent Payments created:", parentPayments);

    // Create Staff Payments
    const staffPayments = await createStaffPaymentMockData(
      staffs.map(staff => staff.id)
    );
    console.log("Staff Payments created:", staffPayments);

    // Create Reports
    const reports = await createReportMockData(users[0].id); // Assuming the first user is the admin
    console.log("Reports created:", reports);

    // Create Evaluations
    const evaluations = await createEvaluationMockData(
      staffs.map(staff => staff.id)
    );
    console.log("Evaluations created:", evaluations);

    // Create Noticeboards
    const noticeboards = await createNoticeboardMockData(users[0].id); // Assuming the first user is the admin
    console.log("Noticeboards created:", noticeboards);

    console.log("Database seeding completed");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await sequelize.close();
  }
};

seedDatabase();
