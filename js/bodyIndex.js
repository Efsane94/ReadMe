let btn1=document.querySelectorAll("#btn1");
for(let i=0; i<btn1.length; i++){
	$(btn1[0]).css("background","green");
	$(btn1[i]).click(function(){
		$(btn1).css("background","#b3b3b3");
		$(btn1[i]).css("background","green");
	})
}


let btn2=document.querySelectorAll("#btn2");
for(let i=0; i<btn2.length; i++){
	$(btn2[1]).css("background","green");
	$(btn2[i]).click(function(){
		$(btn2).css("background","#b3b3b3");
		$(btn2[i]).css("background","green");
	})
}


let btn3=document.querySelectorAll("#btn3");
for(let i=0; i<btn3.length; i++){
	$(btn3[1]).css("background","green");
	$(btn3[i]).click(function(){
		$(btn3).css("background","#b3b3b3");
		$(btn3[i]).css("background","green");
	})
}

let calc=document.querySelector(".btnCalc");
console.log(calc);
let result='<div class="resultForm">\
                <div class="text">\
                  <p>RESULT</p>\
                </div>\
                <div class="row">\
                   <div class="col" id="thinness">\
                   <img src="img/1.png">\
                   </div>\
                   <div class="col" id="normal">\
                   <img src="img/2.png">\
                   </div>\
                   <div class="col" id="overWeight">\
                   <img src="img/3.png">\
                   </div>\
                   <div class="col" id="obese">\
                   <img src="img/4.png">\
                   </div>\
                </div>\
                <div class="BMI">\
                   BMI :\
                </div>\
                <button class="btnCalc"  id="back" type="button">Back</button>\
            </div>'


$(calc).click(function(){
	if($("input[id=age]").val()!="" & $("input[id=height]").val()!="" & $("input[id=weight]").val()!=""){
	$(".info").css("display","none");
	$("form").append(result);
}else {

}

let weight=$("input[id=weight]").val();
let height=$("input[id=height]").val();

if($(btn2[0]).css("background","green")){
    // height=height*2.54;
}else{
	
}


if($(btn3[0]).css("background","green")){
	// weight=weight*0.4535;
}else{
	
}
let resultBIM=weight*10000/(height*height);




 
$(".BMI").append(resultBIM);
	if(resultBIM<18.5){
	$("#thinness img").attr("src","img/5.png");
}
else if(resultBIM>18.5 & resultBIM<25){
 $("#normal img").attr("src","img/6.png");
}
else if(resultBIM>25 & resultBIM<30){
 $("#overWeight img").attr("src","img/7.png");
}
else{
  $("#obese img").attr("src","img/8.png");
}




let back=document.querySelector("#back");
$(back).click(function(){
	$(".resultForm").css("display","none");
	$(".info").css("display","block");
})

})




// function massIndex(){
// 	if(resultBIM<18.5){
// 	let thin=$("#thinness").attr("src","img/5.jpg");
// 	return thin;
// }
// else if(resultBIM>18.5 & resultBIM<25){
//  let normal=$("#normal").attr("src","img/6.png");
//  return normal;
// }
// else if(resultBIM>25 & resultBIM<30){
//  let over=$("#overWeight").attr("src","img/7.png");
//  return over;
// }
// else{
//  let obese=$("#obese").attr("src","img/8.png");
//  return obese;
// }
// }





