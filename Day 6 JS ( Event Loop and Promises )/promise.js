// ************* SERVICE PROVIDERS ***********

// Just assume it's a third party service ( heavyComputation : it's a third party service)
function heavyComputation() {
  // it's doing a very heavy computation
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}

// WE have to optimise our heavyComputation method to not to block client's code executiong
function heavyComputationV2() {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(70);
    }, 3000);
  });

  return myPromise;
}
// Promsie : PENDING, COMPLETED, REJECTED

// ****************** CLIENT *****************
function normalMethod() {
  console.log("It's a normal metod");
}

function normalMethod2() {
  console.log("It's a normal metod 2");
}

// Blocking Code
// normalMethod();
// let sum = heavyComputation();
// console.log("Result of heavy calculation", sum);
// normalMethod2();

// Way 1: This is a way to consume a single promise
normalMethod();
heavyComputationV2()
  .then((result) => {
    console.log("Promsied Resolved", result);
  })
  .catch((err) => {
    console.log("Promsie Rejected", err);
  });
normalMethod2();
