// HR VS IT Department
// You are given an array of objects representing a collection of employees, each with a name, salary, and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000.

// Array.prototype.reduce()
// Array.prototype.push()
// Array.prototype.keys()
// Array.prototype.map()
// Array.prototype.filter()

const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

const departmentAverageSalary = Object.values(
  employees.reduce((acc, { department, salary }) => {
    acc[department] = acc[department] || { department, totalSalary: 0, count: 0 };
    acc[department].totalSalary += salary;
    acc[department].count += 1;
    return acc;
  }, {})
).map(({ department, totalSalary, count }) => ({
  department,
  avgSalary: totalSalary / count,
}));

const highSalaryDepartments = departmentAverageSalary.filter(({ avgSalary }) => avgSalary > 65000);

console.log(highSalaryDepartments);