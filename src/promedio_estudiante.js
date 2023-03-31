function getStudentAverage(students) {
  const studentsAvg = students.map((student) => ({
    name: student.name,
    average: Number(
      (student.grades.reduce((acc, currVal) => acc + currVal, 0) / student.grades.length).toFixed(2)
    ),
  }));

  const classAvg =
    studentsAvg.reduce((acc, student) => student.average + acc, 0) / studentsAvg.length;

  const result = { classAverage: Number(classAvg.toFixed(2)), students: studentsAvg };
  console.log(result);
  return result;
}

const students = [
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
];
getStudentAverage(students);


/*
Output: {
  classAverage: 88.17,
  students: [
    {
      name: "Pedro",
      average: 88.75
    },
    {
      name: "Jose",
      average: 88.5
    },
    {
      name: "Maria",
      average: 87.25
    }
  ]
}
*/