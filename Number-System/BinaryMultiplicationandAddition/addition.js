
function AbsoluteValue(x){
	return x>=0?x:-x;
}

function cropZeros(Str){
	var n = Str.length;
	var ret = ""; 
	var  flag = 0;
	for(var i=0;i<n;i++){
		if(Str[i]=='1')
			flag = 1;
		if(flag)
			ret += Str[i];
	}
	return ret;
}

function padZeros(Str, num) {
	var Offset = "";
	for(var i=0;i<num;i++){
		Offset += "0";
	}
	return Offset+Str;
}

function reverseString(Str) {
	var ret = "";
	for(var i=0;i<Str.length;i++)
		ret = Str[i] + ret;
	return ret;
}

function BinaryAddition(Value1, Value2) {
	var Rev1 = reverseString(Value1);
	var Rev2 = reverseString(Value2);
	var Carry = 0;
	var ret = "";
	for(var i=0;i<Rev1.length;i++){
		var Val = Carry + (Rev1[i]-'0') + (Rev2[i]-'0');
		var x = Val%2;
		Carry = ~~(Val/2);
		ret += x;
	}
	if(Carry)
		ret += Carry;
	ret = reverseString(ret);
	return ret;
}
$(document).ready(function(){
	drawStates();
});

function drawStates(){


  	$("#MainDiv").html("");
  	var startx = 40;
  	var starty =  40;
  	for(var i=0;i<20;i++){
  		var topVal = starty + i*46;
  		for(var j=0;j<33;j++){
  			var leftVal = startx + j*46;
  			console.log(topVal,leftVal);
  			var Randnum = Math.random();
  			Randnum*=100;
  			Randnum = parseInt(Randnum);
  			var OorI;
  			if(Randnum%2==1)
  				OorI = "I";
  			else
  				OorI = "O";
  			$("#MainDiv").append('<div id="d1" style="top:' + topVal + 'px;left:' + leftVal + 'px">' + OorI + '</div>');
  		}
  	}

}


function DoAddition () {

	/*$(document).ready(function(){
		$("#TopDiv").fadeOut(200);
	});*/


	console.log("Inside DoAddition");
	var Value1 = document.getElementById("Val1").value;
	var Value2 = document.getElementById("Val2").value;
	
	Value1 = cropZeros(Value1);
	Value2 = cropZeros(Value2);

	var len1 = Value1.length;
	var len2 = Value2.length;
	
	var diff = AbsoluteValue(len1 - len2);

	if(len1<len2)
		Value1 = padZeros(Value1, diff);
	else
		Value2 = padZeros(Value2, diff);

	len1 = Value1.length;
	len2 = Value2.length;
	
	console.assert(len1==len2);
	console.log("Value1 = " + Value1);
	console.log("Value2 = " + Value2);

	var Ans = BinaryAddition(Value1, Value2);
	
	drawStates();

	alert("Addition" + Ans);
	//alert(Value2+Value1);
}