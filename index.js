const core = require("@actions/core");

try {
  const variable = core.getInput("variable");
  console.log(variable)
} catch (error) {
  core.setFailed(error.message);
}
