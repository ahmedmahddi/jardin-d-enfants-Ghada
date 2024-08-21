import bcrypt from "bcryptjs";
import {
  User,
  Children,
  Staff,
  Enrollment,
  Event,
  Curriculum,
  Attendance,
  Notification,
  Communication,
  ParentPayment,
  StaffPayment,
  Report,
  Evaluation,
  Noticeboard,
} from "./models/index.js";

const createUserMockData = async () => {
  const hashedPassword = await bcrypt.hash("password123", 10);

  const users = await User.bulkCreate([
    {
      name: "Admin User",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin",
    },
    {
      name: "Staff User",
      email: "staff@example.com",
      password: hashedPassword,
      role: "staff",
    },
    {
      name: "Parent User",
      email: "parent@example.com",
      password: hashedPassword,
      role: "parent",
    },
  ]);

  return users;
};

const createChildrenMockData = async parentId => {
  const children = await Children.bulkCreate([
    {
      firstName: "Child1",
      lastName: "One",
      birthdate: new Date(2018, 0, 1),
      age: 6,
      address: "123 Main St",
      city: "Sometown",
      state: "CA",
      gender: "Masculin",
      days: ["Monday", "Wednesday", "Friday"],
      parentId,
    },
    {
      firstName: "Child2",
      lastName: "Two",
      birthdate: new Date(2018, 0, 1),
      age: 6,
      address: "123 Main St",
      city: "Sometown",
      state: "CA",
      gender: "Femenin",
      days: ["Tuesday", "Thursday"],
      parentId,
    },
  ]);

  return children;
};

const createStaffMockData = async userId => {
  const staffs = await Staff.bulkCreate([
    {
      name: "Teacher A",
      position: "Teacher",
      email: "teachera@example.com",
      phone: "1234567890",
      userId,
    },
    {
      name: "Teacher B",
      position: "Teacher",
      email: "teacherb@example.com",
      phone: "0987654321",
      userId,
    },
  ]);

  return staffs;
};

const createEnrollmentMockData = async () => {
  const enrollments = await Enrollment.bulkCreate([
    {
      childName: "Child1 One",
      birthdate: new Date(2018, 0, 1),
      age: 6,
      address: "123 Main St",
      city: "Sometown",
      state: "CA",
      gender: "Masculin",
      days: ["Monday", "Wednesday", "Friday"],
      parentName: "Parent One",
      parentPhone: "1234567890",
      parentEmail: "parent@example.com",
      parentWork: "Job1",
      secondPersonName: "Second Person",
      secondPersonPhone: "0987654321",
      medications: "None",
      status: "approved",
    },
    {
      childName: "Child2 Two",
      birthdate: new Date(2018, 0, 1),
      age: 6,
      address: "123 Main St",
      city: "Sometown",
      state: "CA",
      gender: "Femenin",
      days: ["Tuesday", "Thursday"],
      parentName: "Parent One",
      parentPhone: "1234567890",
      parentEmail: "parent@example.com",
      parentWork: "Job1",
      secondPersonName: "Second Person",
      secondPersonPhone: "0987654321",
      medications: "None",
      status: "pending",
    },
  ]);

  return enrollments;
};

const createEventMockData = async () => {
  const events = await Event.bulkCreate([
    {
      title: "Event1",
      description: "Description for Event1",
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      title: "Event2",
      description: "Description for Event2",
      startDate: new Date(),
      endDate: new Date(),
    },
  ]);

  return events;
};

const createCurriculumMockData = async teacherId => {
  const curriculums = await Curriculum.bulkCreate([
    {
      title: "Math",
      description: "Math curriculum",
      teacherId,
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      title: "Science",
      description: "Science curriculum",
      teacherId,
      startDate: new Date(),
      endDate: new Date(),
    },
  ]);

  return curriculums;
};

const createAttendanceMockData = async childIds => {
  const attendances = await Attendance.bulkCreate([
    { childId: childIds[0], date: new Date(), status: "present" },
    { childId: childIds[1], date: new Date(), status: "absent" },
  ]);

  return attendances;
};

const createNotificationMockData = async recipientId => {
  const notifications = await Notification.bulkCreate([
    {
      title: "Notification1",
      message: "Message for Notification1",
      recipientId,
      sentAt: new Date(),
    },
    {
      title: "Notification2",
      message: "Message for Notification2",
      recipientId,
      sentAt: new Date(),
    },
  ]);

  return notifications;
};

const createCommunicationMockData = async (senderId, recipientId) => {
  const communications = await Communication.bulkCreate([
    {
      senderId,
      recipientId,
      message: "Message from Staff to Parent",
      sentAt: new Date(),
    },
    {
      senderId: recipientId,
      recipientId: senderId,
      message: "Message from Parent to Staff",
      sentAt: new Date(),
    },
  ]);

  return communications;
};

const createParentPaymentMockData = async (parentId, childIds) => {
  const parentPayments = await ParentPayment.bulkCreate([
    {
      parentId,
      childId: childIds[0],
      amount: 100.0,
      date: new Date(),
      status: "paid",
    },
    {
      parentId,
      childId: childIds[1],
      amount: 100.0,
      date: new Date(),
      status: "unpaid",
    },
  ]);

  return parentPayments;
};

const createStaffPaymentMockData = async staffIds => {
  const staffPayments = await StaffPayment.bulkCreate([
    {
      staffId: staffIds[0],
      totalSalary: 1000.0,
      advanceTaken: 200.0,
      remainingSalary: 800.0,
      date: new Date(),
    },
    {
      staffId: staffIds[1],
      totalSalary: 1000.0,
      advanceTaken: 300.0,
      remainingSalary: 700.0,
      date: new Date(),
    },
  ]);

  return staffPayments;
};

const createReportMockData = async generatedById => {
  const reports = await Report.bulkCreate([
    {
      title: "Report1",
      content: "Content for Report1",
      generatedBy: generatedById,
    },
    {
      title: "Report2",
      content: "Content for Report2",
      generatedBy: generatedById,
    },
  ]);

  return reports;
};

const createEvaluationMockData = async staffIds => {
  const evaluations = await Evaluation.bulkCreate([
    {
      staffId: staffIds[0],
      date: new Date(),
      evaluator: "Evaluator 1",
      performance: "Excellent",
      feedback: "Great job!",
      score: 5,
    },
    {
      staffId: staffIds[1],
      date: new Date(),
      evaluator: "Evaluator 2",
      performance: "Good",
      feedback: "Keep it up!",
      score: 4,
    },
  ]);

  return evaluations;
};

const createNoticeboardMockData = async postedById => {
  const noticeboards = await Noticeboard.bulkCreate([
    {
      title: "Notice1",
      content: "Content for Notice1",
      datePosted: new Date(),
      postedBy: postedById,
    },
    {
      title: "Notice2",
      content: "Content for Notice2",
      datePosted: new Date(),
      postedBy: postedById,
    },
  ]);

  return noticeboards;
};

export {
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
};
