var babyNameDebug=false;
var babyNameSpecialCount=function(babyNameStr, babyNameChar){
	var babyNameCount=0;
	for(var i=0; i<babyNameStr.length; i++){
		if(babyNameStr.charAt(i)==babyNameChar) babyNameCount++;
	}
	if (babyNameDebug) document.getElementById("babyNameDebug").innerHTML=document.getElementById("babyNameDebug").innerHTML+' '+babyNameCount;
	return babyNameCount;
};
var babyNameProcess=function(){
	var babyNameList=document.getElementById("babyNameInput").value;
	if(babyNameList!=null&&babyNameList.length>0){
		var babyNameComma=babyNameSpecialCount(babyNameList,",");
		var babyNameNewLine=babyNameSpecialCount(babyNameList,"\n");
		var babyNameArr=[];
		if(babyNameComma>babyNameNewLine){
			babyNameArr=babyNameList.split(",");
		}else{
			babyNameArr=babyNameList.split("\n");
		}	
		var babyNameRes='Name your baby: '+(babyNameArr[Math.floor(Math.random()*babyNameArr.length)]).trim();
		document.getElementById("babyNameResult").innerHTML=babyNameRes;
	}
};
