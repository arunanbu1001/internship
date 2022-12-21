var api_url = 'https://onprem.boodskap.io/api/micro/service/MIPPCMEXKG/StudentGet/StudentGet'

 

function dis(){

    var jsonQuery = {

      query: "{\n  \"size\":100\n}",

      type: "RECORD",

    };

      $.ajax({

        url: api_url,

     

        type:'POST',

        data:JSON.stringify(jsonQuery),

        contentType: 'application/json',

        success: function(data) {

          console.log(data);

                                     

                       }

                  });

                }

    dis();