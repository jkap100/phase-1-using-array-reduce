const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const reducer = (prevVal, currVal) => prevVal + currVal;
const totalBatteries = batteryBatches.reduce(reducer);
