document.getElementById('studentForm').addEventListener('Submit', function(event) {
    event.preventDefault();
  
    var fullname = document.getElementById('fullname').value;
    var dob = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var phonenumber = document.getElementById('phonenumber').value;
    var grade = document.getElementById('grade').value;
  
    var table = document.getElementById('studentTable');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
  
    cell1.innerHTML = fullname;
    cell2.innerHTML = dob;
    cell3.innerHTML = gender;
    cell4.innerHTML = phonenumber;
    cell5.innerHTML = grade;
  });