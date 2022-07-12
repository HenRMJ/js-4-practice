console.log('Your JS file is linked!');

// Refactor the following function to use a Promise instead
const studentAsleep = false;
const studentLearning = true;

function watchInstructorDemo(callback, errCallback) {
  //remove parameters from function and return a new Promise
  //promise takes in 2 parameters (resolve, reject)
  return new Promise((resolve, reject) => {
    if (studentAsleep) {
      //change callback and errorCallback to resolve and reject
        reject({
            event: "Student is sleeping.",
            message: "Instructor needs to be more fun.",
        });
      } else if (studentLearning === false) {
        reject({
          event: "Student is not learning.",
          message: "Instructor needs to be more fun.",
        });
      } else {
        resolve("We are all totally getting this!");
      };
  })
}

//separate the function into 2 to keep the functionality modular
//check your work
const success = (message) => {
  console.log(message);
}

watchInstructorDemo()
.then(success)
.catch((error) => {
  console.log(error);
})
