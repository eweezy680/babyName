var babyName_debug=false;

function babyName_specialCount(babyName_str, babyName_char){
	var babyName_count=0;
	for(var i=0; i<babyName_str.length; i++){
		if(babyName_str.charAt(i)==babyName_char) babyName_count++;
	}
	if (babyName_debug) document.getElementById("babyNameDebug").innerHTML=document.getElementById("babyNameDebug").innerHTML+' '+babyName_count;
	return babyName_count;
}

var babyName_process=function (){
	var babyName_list=document.getElementById("babyNameInput").value;
	if(babyName_list!=null&&babyName_list.length>0){
		var babyName_comma=babyName_specialCount(babyName_list,",");
		var babyName_newLine=babyName_specialCount(babyName_list,"\n");
		var babyName_arr=[];
		if(babyName_comma>babyName_newLine){
			babyName_arr=babyName_list.split(",");
		}else{
			babyName_arr=babyName_list.split("\n");
		}	
		document.getElementById("babyNameResult").innerHTML='Name your baby: '+babyName_arr[Math.floor(Math.random()*babyName_arr.length)];
	}
};
