function findUserInDatabase() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Ashisih");
    }, 4000);
  });
}

function checkIfPaymentServiceIsUP() {
  return new Promise((res, rej) => {
    setTimeout(() => res("yes"), 2000);
  });
}

function completeThePaymentForUser() {
  // Doing some sort of payments
  console.log("Payment is done for given user");
}

// One way to do the stuff with consumeing nested promsis
// findUserInDatabase()
//   .then(() => {
//     checkIfPaymentServiceIsUP()
//       .then(() => {
//         completeThePaymentForUser();
//       })
//       .catch(() => {});
//   })
//   .catch(() => {});

// We can cosume multiple promsiesd parrallely
// Promise.all([findUserInDatabase(), checkIfPaymentServiceIsUP()])
//   .then((res) => {
//     completeThePaymentForUser();
//   })
//   .catch((err) => console.log("Error", err));

// Promise.any([findUserInDatabase(), checkIfPaymentServiceIsUP()])
//   .then((res) => {
//     completeThePaymentForUser();
//   })
//   .catch((err) => console.log("Error", err));

// Promise.race([findUserInDatabase(), checkIfPaymentServiceIsUP()])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log("Error", err));

// Let's assume all these are dependent
// It's not prefer to use then, cathc is there are lot of nested promises
findUserInDatabase()
  .then(() => {
    checkIfPaymentServiceIsUP()
      .then(() => {
        completeThePaymentForUser();
      })
      .catch(() => {});
  })
  .catch(() => {});
// If there are nested promsies go ahead with try catch and asyn await
async function consumingNestedPromises() {
  try {
    let result1 = await findUserInDatabase();
    let result2 = await checkIfPaymentServiceIsUP();
    completeThePaymentForUser();
  } catch (err) {
    console.log("Error occured", err);
  }
}

consumingNestedPromises();
