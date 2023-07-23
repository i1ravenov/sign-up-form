const pw = document.querySelector('#pass');
const cf = document.querySelector('#conf');
const mg = document.getElementById('message');

pw.classList.add('error');
cf.classList.add('error');

var check = function () {
  if (pw.value === cf.value) {
    mg.innerHTML = '';
    pw.classList.remove('error');
    cf.classList.remove('error');
  } else {
    mg.innerHTML = '* Passwords do not match';
    pw.classList.add('error');
    cf.classList.add('error');
  }
}