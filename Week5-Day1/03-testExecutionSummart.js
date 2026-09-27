/* Create a TypeScript object literal named testExecutionSummary to represent the execution
results of an automation test suite. */
var testExecutionSummary = {
    suiteName: "Regression",
    totalTests: 15,
    passedTests: 10,
    failedTests: 0,
    executionTime: "1 Hour 30 Mins"
};
console.log(testExecutionSummary);
console.log("Pass Percentage is ".concat(((testExecutionSummary.passedTests / testExecutionSummary.totalTests) * 100).toFixed(2), "%"));
if (testExecutionSummary.totalTests === (testExecutionSummary.passedTests + testExecutionSummary.failedTests)) {
    console.log("Test Execution is completed");
}
else {
    console.log("Test Execution is in progress");
}
if (testExecutionSummary.failedTests === 0) {
    console.log("Test Execution Successfull");
}
else {
    console.log("Execution Completed with Failures");
}
