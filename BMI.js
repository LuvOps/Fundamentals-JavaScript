const bmiMark = {
  fullName: "Mark Miller",
  mass: 79,
  height: 1.7,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const bmiJonh = {
  fullName: "Jonh Smith",
  mass: 79,
  height: 1.8,

  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(
  bmiMark.calcBmi() > bmiJonh.calcBmi()
    ? `'${bmiMark.fullName}'s BMI(${bmiMark.bmi}) is higher than ${bmiJonh.fullName}'s BMI (${bmiJonh.bmi})!'`
    : bmiMark.calcBmi() < bmiJonh.calcBmi()
    ? `'${bmiJonh.fullName}'s BMI(${bmiJonh.bmi}) is higher than ${bmiMark.fullName}'s BMI (${bmiMark.bmi})!'`
    : `'${bmiJonh.fullName} and ${bmiMark.fullName} has the same BMI  (${bmiMark.bmi})!'`
);
