var api_url = 'https://onprem.boodskap.io'
var token = '7d6c4abd-9476-4bec-b6fc-58f36476acee'
var record = '2003'

function add() {
  var fname = document.querySelector("#fname").value;
  var sname = document.querySelector("#sname").value;
  var email = document.querySelector("#email").value;
  var pnum = document.querySelector("#pnum").value;
  var address = document.querySelector("#address").value;
  var paddress = document.querySelector("#paddress").value;
  var city = document.querySelector("#city").value;
  var state = document.querySelector("#state").value;
  var email1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var phone1=/^\d{10}$/;                                    
               

  if (fname == "" ) {
   alert("Please enter your name properly.");
   return false;
}
if (sname == "" ) {
  alert("Please enter your name properly.");
  return false;
}
if (email == "" || !email1.test(email)) {
  alert("Please enter a valid e-mail address.");
  return false;
}
if (address == "") {
  alert("Please enter your address.");
  return false;
}
if (pnum == "" || !phone1.test(pnum)) {
  alert("Please enter valid phone number.");
  return false;
}
  var payload = {
    address: address,
    city: city,
    email: email,
    firstname: fname,
    peraddress: paddress,
    phone: pnum,
    secondname: sname,
    state: state,
  };
    $.ajax({
        url: api_url+'/api/record/insert/dynamic/'+token+'/'+record,
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(payload),
        contentType: "text/plain",
        success: function (data) {
           alert("succes")
                  
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
        }
    });
}