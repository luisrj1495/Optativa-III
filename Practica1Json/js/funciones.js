function mostrarFormulario(){
//DAtos del formulario, de objeto js a Json

  var firstname=$("#firstname").val();
  var lastname=$("#lastname").val();
  var age=$("#age").val();
  var phone=$("#phone").val();
  var address=$("#address").val();

  var objetoJs2=new Object();

  objetoJs2.firstname=firstname;
  objetoJs2.lastname=lastname;
  objetoJs2.age=age;
  objetoJs2.phone=phone;
  objetoJs2.address=address;

  var obJson= JSON.stringify(objetoJs2);
  $("#mostrarFrm").html(obJson);

}



$(document).ready(function(){
//De un objeto json a un objeto js
var myJSON = '{ "firstname":"John","lastname":"Doe","age":21,"phone":123456, "address":"ucp"}';
var myObj= jQuery.parseJSON(myJSON);
$("#mostrarInfo1").append(myObj.firstname + " ");
$("#mostrarInfo1").append(myObj.lastname+ " ");
$("#mostrarInfo1").append(myObj.age+" ");
$("#mostrarInfo1").append(myObj.phone+ " ");
$("#mostrarInfo1").append(myObj.address);


//de un objeto js a un objeto Json

//otra forma de crear el objeto js
//var objetoJs = { "firstname":"John", "lastname": "Doe", "age":20, "phone":123456, "address":"Peter"};

var objetoJs= new Object();
objetoJs.firstname="Luis";
objetoJs.lastname="Ruiz";
objetoJs.age=21;
objetoJs.phone=3114754;
objetoJs.address="Calle14";


var objetoJson = JSON.stringify(objetoJs);
$("#mostrarInfo2").html(objetoJson);

});
