"use strict";

const {
  User,
  Children,
  Staff,
  Enrollment,
  Event,
  Invoice,
} = require("../models/index.js"); // Use require instead of import

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Seeding Users
    await User.bulkCreate([
      {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "hashed_password1", // Password should be hashed
        role: "parent",
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "hashed_password2",
        role: "admin",
      },
    ]);

    // Seeding Staff
    await Staff.bulkCreate([
      {
        name: "Alice Johnson",
        position: "Teacher",
        email: "alice.johnson@example.com",
        phone: "555-555-5555",
      },
      {
        name: "Bob Williams",
        position: "Caretaker",
        email: "bob.williams@example.com",
        phone: "555-555-5556",
      },
    ]);

    // Seeding Children
    await Children.bulkCreate([
      {
        childName: "Tommy Doe",
        birthdate: "2015-06-10",
        age: 8,
        address: "123 Main St",
        city: "New York",
        state: "NY",
        gender: "Masculin",
        days: ["Monday", "Wednesday"],
        parentId: 1, // Corresponds to 'John Doe' in the User table
        parentName: "John Doe",
        parentPhone: "555-555-1234",
        parentEmail: "john.doe@example.com",
        parentWork: "Software Developer",
        secondPersonName: "Sarah Doe",
        secondPersonPhone: "555-555-5678",
        medications: "None",
      },
    ]);

    // Seeding Enrollment
    await Enrollment.bulkCreate([
      {
        childName: "Tommy Doe",
        birthdate: "2015-06-10",
        age: 8,
        address: "123 Main St",
        city: "New York",
        state: "NY",
        gender: "Masculin",
        days: ["Monday", "Wednesday"],
        parentName: "John Doe",
        parentPhone: "555-555-1234",
        parentEmail: "john.doe@example.com",
        parentWork: "Software Developer",
        secondPersonName: "Sarah Doe",
        secondPersonPhone: "555-555-5678",
        medications: "None",
        status: "approved",
      },
    ]);

    // Seeding Events
    await Event.bulkCreate([
      {
        title: "School Opening",
        description: "The school opens for the new year.",
        startDate: new Date(),
        endDate: new Date(),
        googleCalendarEventId: "abcdef12345",
      },
      {
        title: "Parent-Teacher Meeting",
        description: "Discuss the child's progress.",
        startDate: new Date(),
        endDate: new Date(),
        googleCalendarEventId: "ghijkl67890",
      },
    ]);

    // Seeding Invoices
    await Invoice.bulkCreate([
      {
        status: "unpaid",
        amount: 1500.0,
        childId: 1, // Corresponds to 'Tommy Doe' in the Children table
        parentId: 1, // Corresponds to 'John Doe' in the User table
        parentEmail: "john.doe@example.com",
        childName: "Tommy Doe",
        issueDate: new Date(),
        dueDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
        archived: false,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Undo the seed data
    await queryInterface.bulkDelete("Invoices", null, {});
    await queryInterface.bulkDelete("Events", null, {});
    await queryInterface.bulkDelete("Enrollments", null, {});
    await queryInterface.bulkDelete("Children", null, {});
    await queryInterface.bulkDelete("Staff", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
