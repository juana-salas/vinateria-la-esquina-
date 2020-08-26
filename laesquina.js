var firebaseConfig = {
  apiKey: "AIzaSyB2PHvhbQhkaRj5X4AIqFRupvxSqNt2w-U",
  authDomain: "vinateriajose-8a1f1.firebaseapp.com",
  databaseURL: "https://vinateriajose-8a1f1.firebaseio.com",
  projectId: "vinateriajose-8a1f1",
  storageBucket: "vinateriajose-8a1f1.appspot.com",
  messagingSenderId: "499922676205",
  appId: "1:499922676205:web:8321b764d57932766cdfe4",
  measurementId: "G-VZTWX6SGPL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  //registron al almacen de datos
var dbService = firebase.database();
//Nombre de l bASE DE datos
var referencia = dbService.ref('registros');
function inabilitar(){
document.getElementById("email").disabled=true;
document.getElementById("password").disabled=true;
document.getElementById("edad").disabled=true;
document.getElementById("telefono").disabled=true;
document.getElementById("nombre").disabled=true;
document.getElementById("sexo").disabled=true;
}
function registros(){
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let edad = document.getElementById("edad").value;
let telefono = document.getElementById("telefono").value;
let nombre = document.getElementById("nombre").value;
let sexo = document.getElementById("sexo").value;

//pergunto si ay datos
if(email){
  referencia.push({
    email : email,
    password : password,
    edad : edad,
    telefono : telefono,
    nombre: nombre,
    sexo : sexo
  })
  .then(() =>{
    const toast = Swal.mixin({
      toast: true, 
      position: "center",
      showConfirmButton: false,
      timer:3000,
      width: 400,
    })
    toast({
      type: "success",
      title: "Los datos se registraron correctamente"
    })
  inabilitar();
})
  .catch(() => {
    const toast = Swal.mixin({
      toast : true,
      position: "center",
      showConfirmButton: false,
      timer: 3000,
      width: 400
    })
    toast({
      type: "erros",
      title: "Algo no funciono, verifica tu informacion"
    })
  })
  }else{
    const toast= Swal.mixin({
      toast: true,
      position: "center",
      showConfirmButton: false,
      timer: 3000,
      width: 400
    })
    toast({
      type: "error",
      title: "Algo esta mal"
    })
  }
}
var referenciapedidos = dbService.ref('pedidos');
function inabilitar(){
  document.getElementById("producto").disabled=true;
  document.getElementById("cantidad").disabled=true;
  }  
function detalle(){
  
  let producto = document.getElementById("producto").value;
  let cantidad = document.getElementById("cantidad").value;
 
  //pergunto si ay datos
  if(producto){
    
    referenciapedidos.push({
      producto: producto,
      cantidad : cantidad
    })
    .then(() =>{
      const toast = Swal.mixin({
        toast: true, 
        position: "center",
        showConfirmButton: false,
        timer:3000,
        width: 400,
      })
      toast({
        type: "success",
        title: "Los datos se registraron correctamente"
      })
    inabilitar();
  })
    .catch(() => {
      const toast = Swal.mixin({
        toast : true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        width: 400
      })
      toast({
        type: "erros",
        title: "Algo no funciono, verifica tu informacion"
      })
    })
    }else{
      const toast= Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        width: 400
      })
      toast({
        type: "error",
        title: "Algo esta mal"
      })
    }
  }  
var referenciauser = dbService.ref('usuarios');
function inabilitar(){
  document.getElementById("usuario").disabled=true;
  document.getElementById("password").disabled=true;
  }  
  function inicio(){
    
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
   
    //pergunto si ay datos
    if(usuario){
      referenciauser.push({
        nombre: nombre,
        password : password
      })
      .then(() =>{
        const toast = Swal.mixin({
          toast: true, 
          position: "center",
          showConfirmButton: false,
          timer:3000,
          width: 400,
        })
        toast({
          type: "success",
          title: "Los datos se registraron correctamente"
        })
      inabilitar();
    })
      .catch(() => {
        const toast = Swal.mixin({
          toast : true,
          position: "center",
          showConfirmButton: false,
          timer: 3000,
          width: 400
        })
        toast({
          type: "erros",
          title: "Algo no funciono, verifica tu informacion"
        })
      })
      }else{
        const toast= Swal.mixin({
          toast: true,
          position: "center",
          showConfirmButton: false,
          timer: 3000,
          width: 400
        })
        toast({
          type: "error",
          title: "Algo esta mal"
        })
      }
    }  