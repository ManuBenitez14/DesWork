// INICIALIZAR FIREBASE
var config = {
    apiKey: "AIzaSyB6MWmb1q7qKldC9Nb31fVOSan2-1dWxyY",
    authDomain: "deswork-22.firebaseapp.com",
    databaseURL: "https://deswork-22.firebaseio.com",
    projectId: "deswork-22",
    storageBucket: "deswork-22.appspot.com",
    messagingSenderId: "131476501063"
  };
  firebase.initializeApp(config);

 // OBTENER DATOS
  
 const email = document.getElementById('email');
 const passwd = document.getElementById('passwd');
 const btnLogin = document.getElementById('btnLogin');

 // LOGEAR AL PULSAR BOTON
 btnLogin.addEventListener('click', e => {
   const email1 = email.value;
   const pass = passwd.value;
   const auth = firebase.auth();

   const promise = auth.signInWithEmailAndPassword(email1,pass)

   .then(user => {
    location = 'home.html' //Url aqui
  }).catch(error => {
    console.error(error);
})
   promise.catch(e => console.log(e.message));
 })

 btnSignUp.addEventListener('click', e =>{
   const email1 = email.value;
   const pass = passwd.value;
   const auth = firebase.auth();

   const promise = auth.createUserWithEmailAndPassword(email1,pass);
   const promise1 = auth.s
   promise.catch(e => console.log(e.message));
 })





 // CERRAR SESION AL PULSAR EL BOTON
 btnLogout.addEventListener('click', e => {
   firebase.auth().signOut();
 })




 // DATOS DE USUARIO EN TIEMPO REAL

 firebase.auth().onAuthStateChanged(firebaseUser =>{
   if(firebaseUser){
     console.log(firebaseUser);
     btnLogout.classList.remove('hide');
   } else{
     console.log ('No estas Logeado');
     btnLogout.classList.add('hide');
   }
 })