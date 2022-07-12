console.log('Your JS file is linked!');

// Refactor the following function to use a Promise instead
const studentAsleep = true;
const studentLearning = true;

const watchinstructorDemo = () => {
  return new Promise ((resolve, reject) => {
    if (studentAsleep) {
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
    }
  })
}

const functionSuccess = (message) => {
  console.log(message);
}

watchinstructorDemo()
  .then(functionSuccess)
  .catch((error) => console.log(error.message))
