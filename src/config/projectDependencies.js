const InMemoryDatabaseServices = require("../infrastructure/persistence/InMemory/InMemoryDatabaseServices");
const UniversityCrmServices = require("../infrastructure/externalServices/UniversityCrmService");

module.exports = (() => {
  return {
    DatabaseService: new InMemoryDatabaseServices(),
    CrmServices: new UniversityCrmServices(),
  };
})();
