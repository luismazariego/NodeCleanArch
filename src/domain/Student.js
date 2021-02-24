module.exports = class Student {
  constructor(id = null, firstName, lastName, email, Enrollments) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.Enrollments = Enrollments;
  }
};
