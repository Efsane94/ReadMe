$.ajax({
  url:"json/data.json",
  success:function(data){
    $(data.Woman).each(function(index, el) {
       let dataRow=
      `<div class="col-md-3">
          <div class="item"  data="${el.ProductId}" data-toggle="modal" data-target="#productDetails"> 
          <img src="${el.ProductImages[0]}" class="img-fluid">
          <h6 class="text-secondary my-2">${el.ProductName}</h6>
          <h6 class="text-body my-2">${el.ProductPrice}</h6>
          </div>
       </div>`
    $("#products .row").append(dataRow)
  
    });
    $(".item").click(function(event) {
      let dataRow=""
      $("#productDetailsBody").html("")
      let _id=$(this).attr("data");
       $(data.Woman).each(function(index, el) {
         if(el.ProductId==_id){
           
           $(el.ProductImages).each(function(index, img) {
             dataRow+=`<img src="${img}" class="img-fluid col-md-4 my-2">`
           });
          
          $("#productDetailsTitle").html(el.ProductName)
          $("#productDetailsBody").append(dataRow)

         }
       });
    });

  },
  fail:function(){
    console.log("error")
  }
})