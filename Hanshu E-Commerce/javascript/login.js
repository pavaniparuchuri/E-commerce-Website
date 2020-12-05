var name1 = document.getElementById('name');
var pw = document.getElementById('pw');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var pwc = document.getElementById('pwc');

function store() {
    var p = pw.value;
    if(p.length<6 || p.length>12) {
        alert("Password must be 6 to 12 characters");
    }
    else if(p.search(/[0-9]/) == -1){
        alert("Password should have at least one numeric character");
    }
    else if(pw.value == pwc.value){
    localStorage.setItem('name', name1.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem('fname', fname.value);
    localStorage.setItem('lname', lname.value);
    localStorage.setItem('pwc', pwc.value);
    alert('Account created successfully')
    }
    else{
        alert('password and confirm password doesnt matches')
    }
}

function check() {

    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
    var storedfname = localStorage.getItem('fname');
    var storedlname = localStorage.getItem('lname');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if(userName.value != storedName || userPw.value != storedPw) {
        alert('ERROR');
    }else {
        window.open("products.html");
    }
}
