let course_arr = [
    {
      id: 1,
     title: "Introduction to JavaScript",
  category: "Programming",
  description: "This course provides an in-depth introduction to JavaScript, covering variables, loops, functions, and modern ES6 features.",
  duration: "8 weeks",
  instructor: {
    name: "John Doe",
    email: "john.doe@university.com",
    phone: "555-123-4567"
      },
    },
  ];

  // 1. Adding a new job
  function addCourse(course) {
    // Automatically assign a unique id by checking the last id in the list
    const newId = course_arr.length > 0 ? course_arr[course_arr.length - 1].id + 1 : 1;
    course.id = newId;
    course_arr.push(course);
    console.log("Job added successfully:", course);
  }
  addCourse({
    title: "Introduction to ReactJS",
    category: "Programming",
    description: "This course provides an in-depth introduction to ReactJS, covering variables, loops, functions, and modern ES6 features.",
    duration: "10 weeks",
    instructor: {
        name: "John",
        email: "john@university.com",
        phone: "555-123-4567"
    },
  });
  function findById(id) {
    const numericId = Number(id); // Converts the ID to a number
    const course = course_arr.find((item) => item.id === numericId); // Finds the car with the matching ID
    return course || false; // Returns the car or false if not found
  }
// 3. Updating a course by id
course_arr[1].title = "Introduction to NodeJS";
course_arr[1].description = "This course provides an in-depth introduction to NodeJS, covering variables, loops, functions, and modern ES6 features.";
  
function deleteCourseByTitle(courseArray, courseTitle) {
    // Find the index of the course with the given title
    let index = courseArray.findIndex(course_arr => course_arr.title === courseTitle);

    // If the course is found, remove it from the array
    if (index !== -1) {
        course_arr.splice(index, 0); // Removes the course from the array
        return `Course '${courseTitle}' has been deleted.`;
    } else {
        // If the course is not found, return an appropriate message
        return `Course '${courseTitle}' not found.`;
    }
}
function logAllJobKeys(course_arr) {
    course_arr.forEach((job, index) => {
      console.log(`Job ${index + 1}:`);
      Object.keys(job).forEach(key => {
        console.log(`${key}:, job[key]`);
      });
      console.log(course_arr);
      console.log('-------------------'); // separator for clarity between jobs
      console.log("findById :", findById(1).title);
      console.log('-------------------'); // separator for clarity between jobs
      console.log(deleteCourseByTitle(course_arr, "Introduction to NodeJS"));
     


    });
  }
  logAllJobKeys(course_arr);