let total: string | number = 200;
total = "4000";

function isNumber(value: string | number) {
  if (typeof value === "number") return true;
  return false;
}

// console.log(isNumber('200'));
export {};

const button = document.querySelector('button');