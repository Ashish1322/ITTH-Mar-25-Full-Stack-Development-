var marks = {
  maths: 40,
  english: 30,
  totalMarks: function (studentName, studentAge) {
    console.log("Name", studentName);
    console.log("Age", studentAge);
    console.log(this.maths + this.english);
  },
};

var marks2 = {
  maths: 10,
  english: 10,
};

marks.totalMarks.call(marks2, "Ashsih", "Kumar");
marks.totalMarks.apply(marks2, ["Ashish", "Kumar"]);
