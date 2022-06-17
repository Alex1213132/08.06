function say_hi() {
  var fname = document.getElementById('first_name').value;
  var lname = document.getElementById('last_name').value;

  console.log('Hello ' + fname + ' ' + lname);

}

document.getElementById('say').addEventListener('click', say_hi);