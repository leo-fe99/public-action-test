const core = require("@actions/core");

try {
  const variable = core.getInput("variable");
  const array = variable.split("\n")
  console.log(array[2])
  console.log(variable)
  console.log(typeof variable)
  try{
    console.log(variable[0])
  }
  catch(e){
    console.log("error")
  }
} catch (error) {
  core.setFailed(error.message);
}
