const core = require("@actions/core");

try {
  const variable = core.getInput("variable");
  console.log(variable)
  console.log(typeof variable)
  try{
    console.log(variable[0])
  }
  catch(e){
    console.log("eror")
  }
} catch (error) {
  core.setFailed(error.message);
}
