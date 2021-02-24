const Student = require("../../domain/Student");

module.exports = (StudentRepository) => {
  async function Execute(firstName, lastName, email) {
    return StudentRepository.getAll();
  }

  return {
      Execute
  };
};
