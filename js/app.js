let studentDataArray = [];

sub.addEventListener("click", (e) => {
  e.preventDefault();

  let fullName, dob, gender, phone, grade;

  fullName = document.getElementById("fullname").value;
  dob = document.getElementById("date_of_birth").value;
  phone = document.getElementById("phone_number").value;
  grade = document.getElementById("grade").value;
  gender = document.getElementById("gender").value;

  let newRow = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerHTML = fullName;
  newRow.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerHTML = dob;
  newRow.appendChild(td2);

  let td3 = document.createElement("td");
  td3.innerHTML = gender;
  newRow.appendChild(td3);

  let td4 = document.createElement("td");
  td4.innerHTML = phone;
  newRow.appendChild(td4);

  let td5 = document.createElement("td");
  td5.innerHTML = grade;
  newRow.appendChild(td5);

  document.querySelector("#tables").appendChild(newRow);

  let studentData = {
    fullName: fullName,
    dob: dob,
    gender: gender,
    phone: phone,
    grade: grade,
  };

  studentDataArray.push(studentData);

  localStorage.setItem("studentData", JSON.stringify(studentDataArray));
});
let storedStudentData = localStorage.getItem("studentData");

if (storedStudentData) {
  let studentDataArray = JSON.parse(storedStudentData);

  console.log(studentDataArray);
} else {
  console.log("No student data found in local storage.");
}
