const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");

try {
  const nameToGreet = core.getInput("who-to-greet");
  const time = new Date().toTimeString();
  const jsonDataPath = "test.json";
  const jsonData = fs.readFileSync(jsonDataPath).toString();
  console.log(`Hello ${nameToGreet}!`);
  core.setOutput("time", time);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(jsonData);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
