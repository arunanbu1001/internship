$(document).ready(function () {
  dis();
});

var api_url = "https://onprem.boodskap.io";
var token = "7d6c4abd-9476-4bec-b6fc-58f36476acee";
var record = "2003";
var subm = document.getElementById("upt")



function dis() {
  var jsonQuery = {
    query: '{\n  "size":100\n}',
    type: "RECORD",
    specId: 2003,
  };
  $.ajax({
    url: api_url + "/api/elastic/search/query/" + token + "/RECORD?specId=2003",

    type: "POST",
    data: JSON.stringify(jsonQuery),
    contentType: "application/json",

    success: function (data) {
      var jsn = JSON.parse(data.result);
      var l = jsn.hits.hits;

      console.log(l);
      var n = $("#table-2");
      l.forEach((li) => {
        x = li._source;
       id = li._id;

        // console.log(id);

        // console.log(x);

        n.append(
          "<tr><td>" +
            x.firstname +
            "</td><td>" +
            x.secondname +
            "</td><td>" +
            x.email +
            "</td><td>" +
            x.phone +
            "</td><td>" +
            x.address +
            "</td><td>" +
            x.peraddress +
            "</td><td>" +
            x.city +
            "</td><td>" +
            x.state +
            "</td><td><button onclick='edit(\"b        " +id +"\")'>Edit</button></td>" +
            "</td><td><button onclick='update(\"" +id +"\")'>Update</button></td>" +
            "</td><td><button onclick='delete1(\"" +id +"\")'>Delete</button></td><tr>"
        );

        // return x
      });
    },
    error: function (data) {
      alert("Error!");
    },
  });
}

//     function reload(){
//       fname.val("");
//       sname.val("");
//       email.val("");
//       phone.val("");
//       address.val("");
//       peraddress.val("");
//       city.val("");
//       state.val("");
// }

function delete1(id) {
  // console.log(id);

  Swal.fire({
    title: "Are you sure?",
    text: "You won't delete the data!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        url: api_url + "/api/record/delete/" + token + "/" + record + "/" + id,
        type: "DELETE",

        success: function () {
         document.location.reload();
         dis()
         
        },
        error: function (xhr, textStatus, errorThrown) {
          console.log("Error in Operation");
        },
      });

      Swal.fire("Deleted!", "Your data has been deleted.", "success");
    }
  });
}

var fname = $("#fname");
var sname = $("#sname");
var email = $("#email");
var pnum = $("#pnum");
var address = $("#address");
var paddress = $("#paddress");
var city = $("#city");
var state = $("#state");

function edit(id) {
  console.log(id);
  $.ajax({
    url:api_url +"/api/record/get/" +token +"/" +record + "/" + id,
      
    method: "GET",
    dataType: "json",
    success: function () {
      console.log(x.firstname);
      fname.val(x.firstname);
      sname.val(x.secondname);
      email.val(x.email);
      pnum.val(x.phone);
      address.val(x.address);
      paddress.val(x.peraddress);
      city.val(x.city);
      state.val(x.state);
   
    },
    error: function () {
      alert("error");
    },
  });
}
  // console.log(sub(id));
  // subm.addEventListener('click',sub(id))
  function update(id) {
    console.log(id);
    var payload = {
      address: $("#address").value,
      city: $("#city").value,
      email: $("#email").value,
      firstname: $("#fname").value,
      peraddress: $("#paddress").value,
      phone: $("#pnum").value,
      secondname: $("#sname").value,
      state: $("#state").value,
    };
    // console.log(payload);
    $.ajax({
      url:api_url + "/api/record/insert/static/" + token + "/" + record +
        "/" +
        id,
      type: "POST",
      dataType: "json",
      data: JSON.stringify(payload),
      contentType: "text/plain",
      success: function () {
       // console.log(id);
      console.log("Connected!");

     },
      error: function (xhr, textStatus, errorThrown) {
        console.log("Error in Operation");
      },
    });
  }

  
  // var fname = (document.querySelector("#fname").value = id.firstname);

  // var sname = (document.querySelector("#sname").value = id.secondname);
  // var email = (document.querySelector("#email").value = id.email);
  // var pnum = (document.querySelector("#pnum").value = id.phone);
  // var address = (document.querySelector("#address").value = id.address);
  // var paddress = (document.querySelector("#paddress").value = id.peraddress);
  // var city = (document.querySelector("#city").value = id.city);
  // var state = (document.querySelector("#state").value = id.state);

  
  

// var api_url = 'https://onprem.boodskap.io'
// var token = 'a36d8d51-50cd-4dcc-bbec-ef4b76e514fe'
// var record = '2003'


// function dis(){
//     var jsonQuery = {
//       query: "{\n  \"size\":100\n}",
//       type: "RECORD",
//       specId: 2003
//     };
//       $.ajax({
//         url: api_url+"/api/elastic/search/query/"+token+"/RECORD?specId=2003",
      
//         type:'POST',
//         data:JSON.stringify(jsonQuery),
//         contentType: 'application/json',
//         success: function(data) {
//             var l  = JSON.parse(data.result).hits.hits
//             // console.log( typeof(l));
//             l.forEach(li)
//                 function li(datas){
//                     var x=datas._source
                   
//                     // console.log(x);
//             var n = document.querySelector(".table-2");
//         var a = document.createElement("tr");
//         var b = document.createElement("td");
//         var c = document.createElement("td");
//         var d = document.createElement("td");
//         var e = document.createElement("td");
//         var f = document.createElement("td");
//         var g = document.createElement("td");
//         var h = document.createElement("td");
//         var i = document.createElement("td");
//         var s = document.createElement("td");
//         var but1=document.createElement("button")
//         var t = document.createElement("td");
//         var but2=document.createElement("button")

//         s.append(but1);
//         t.append(but2);
//         a.append(b);
//         a.append(c);
//         a.append(d);
//         a.append(e);
//         a.append(f);
//         a.append(g);
//         a.append(h);
//         a.append(i);
//         a.append(s);
//         a.append(t);
//         n.append(a);
        
           
//         b.innerText = x.firstname;
//         c.innerText = x.secondname;
//         d.innerText = x.email;
//         e.innerText = x.phone;
//         f.innerText = x.address;
//         g.innerText = x.peraddress;
//         h.innerText = x.city;
//         i.innerText = x.state;
//         but1.innerText="edit"
//         but2.innerText="delete"

//         // DELETE


//         but2.addEventListener("click",delete1)
//         function delete1(){
//             // console.log(datas._id);
//             Swal.fire({
//                   title: "Are you sure?",
//                   text: "You won't delete the data!",
//                   icon: "warning",
//                   showCancelButton: true,
//                   confirmButtonColor: "#3085d6",
//                   cancelButtonColor: "#d33",
//                   confirmButtonText: "Yes, delete it!",
//                 }).then((result) => {
//                   if (result.isConfirmed) {
//          $.ajax({
//            url: api_url+'/api/record/delete/'+token+'/'+record+'/'+(datas._id),
//             type: 'DELETE',
                
//               success: function(result) {
//                   alert("deleted succesfully")
//                   n.innerHTML=''
//                   dis()
//                 }
//            });
          
//            Swal.fire("Deleted!", "Your data has been deleted.", "success");
//                }
//              });
//            }


           
            
//                 // UPDATE
//                 but1.addEventListener("click",update)
//                 function update(){
//                     // console.log(datas._source);
//                 var fname = document.querySelector("#fname").value=datas._source.firstname;
//                 // console.log(fname);
//                 var sname = document.querySelector("#sname").value=datas._source.secondname;
//                 var email = document.querySelector("#email").value=datas._source.email;
//                 var pnum = document.querySelector("#pnum").value=datas._source.phone;
//                 var address = document.querySelector("#address").value=datas._source.address;
//                 var paddress = document.querySelector("#paddress").value=datas._source.peraddress;
//                 var city = document.querySelector("#city").value=datas._source.city;
//                 var state = document.querySelector("#state").value=datas._source.state;
//                 var btn=document.getElementById('upt');
//                 btn.addEventListener('click',sub);
//                 function sub(){
//                 var payload = {
//                   address:document.querySelector("#address").value,
//                   city: document.querySelector("#city").value,
//                   email:document.querySelector("#email").value,
//                   firstname:document.querySelector("#fname").value,
//                   peraddress:document.querySelector("#paddress").value,
//                   phone:document.querySelector("#pnum").value,
//                   secondname:document.querySelector("#sname").value,
//                   state:document.querySelector("#state").value,
//                 };
//                 console.log(payload);
//                   $.ajax({
//                       url: api_url+'/api/record/insert/static/'+token+'/'+record+'/'+datas._id,
//                       type: 'POST',
//                       dataType: 'json',
//                       data: JSON.stringify(payload),
//                       contentType: "text/plain",
//                       success: function (data) {
//                         document.location.reload()
//                           console.log("Connected!");
//                           alert("Data Updated")

                          
                          
//                        },
//                       error: function (xhr, textStatus, errorThrown) {
//                           console.log('Error in Operation');
//                       }
//                   });
//                 }
//               }
                
//         }
//     },
//          error: function(data) {
//             alert("Error!");
//         }
//     })
//     }
   
