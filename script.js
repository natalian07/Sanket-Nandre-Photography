const firebaseConfig = {
    apiKey: "AIzaSyB1hEsC8DrvwpvlMzck-tWZAgUT2Y-TB0A",
    authDomain: "enquireform-sanket.firebaseapp.com",
    databaseURL: "https://enquireform-sanket-default-rtdb.firebaseio.com",
    projectId: "enquireform-sanket",
    storageBucket: "enquireform-sanket.appspot.com",
    messagingSenderId: "635744832894",
    appId: "1:635744832894:web:db619997c5766a5dc8b72f"
  };

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var enquireFormDB = firebase.database().ref("enquireForm");

document.getElementById('enquireForm').addEventListener("submit" , submitForm);


function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var subject = getElementVal('subject');
    var details = getElementVal('details');

    // console.log(name, emailid, subject, details);
    saveMessages(name, emailid, subject, details);
    
    //enable alert 
    document.querySelector('.alert').style.display = "block";

    //remove the alert 
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 3000);

    //reset the form 
    document.getElementById('enquireForm').reset();
}

const saveMessages = (name, emailid, subject, details) => {
    var newEnquireForm = enquireFormDB.push();

    newEnquireForm.set({
        name : name,
        emailid : emailid,
        subject : subject,
        details : details
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};