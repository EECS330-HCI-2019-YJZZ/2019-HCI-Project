
var name_list=[];
var loca=document.getElementById("event_location").value;
var memo=document.getElementById("event_memo").value;
var name=document.getElementById("event_name").value;
var hour=document.getElementById("hour").value;
var minute=document.getElementById("minute").value;
var minute_back;
var hour_back;
var name_back;
var loca_back;
var memo_back;
var date=document.getElementById("date").value;
var date_back;



function save(){
	date=document.getElementById("date").value;
	hour=document.getElementById("hour").value;
    minute=document.getElementById("minute").value;
	name=document.getElementById("event_name").value;
	loca=document.getElementById("event_location").value;
    memo=document.getElementById("event_memo").value;
}

function passvalueinadd(){
window.location.href='main.html?'+date+"&"+hour+"&"+minute+"&"+name+"&"+loca+"&"+memo;
}

function manyValues(){
var url=window.location.search;
if(url.indexOf("?")!=-1){
var str = url.substr(1);
   strs = str.split("&"); 
   var key=new Array(strs.length);
   var value=new Array(strs.length);
   for(i=0;i<strs.length;i++){
    key[i]=strs[i].split("=")[0]
    value[i]=unescape(strs[i].split("=")[1]); 
    if (key[i]==""){key[i]="&nbsp;"}
  } 
date_back=key[0];
hour_back=key[1];
minute_back=key[2];
name_back=key[3];
loca_back=key[4];
memo_back=key[5];
  document.getElementById("event-information").innerHTML="date:"+date_back+"&nbsp;&nbsp;time:"+hour_back+":&nbsp;"+minute_back+"\n"+"name:"+name_back+"&nbsp;&nbsp;location:"+loca_back+"&nbsp;&nbsp;memo:"+memo_back;
}
	
}

function edit(){
	window.location.href='add.html?'+date_back+"&"+hour_back+"&"+minute_back+"&"+name_back+"&"+loca_back+"&"+memo_back;
	
}


function refresh(){
	manyValues();
}

function selectChange()
{
  var sel=document.getElementById("hour");
  var option = new option("Text","hour");
  sel.add(option);
}  

function manyValuesinadd(){
var url=window.location.search;
if(url.indexOf("?")!=-1){
var str = url.substr(1);
   strs = str.split("&"); 
   var key=new Array(strs.length);
   var value=new Array(strs.length);
   for(i=0;i<strs.length;i++){
    key[i]=strs[i].split("=")[0]
    value[i]=unescape(strs[i].split("=")[1]); 
  } 
}
document.getElementById("date").value=key[0];
document.getElementById("hour").value=key[1];
document.getElementById("minute").value=key[2];
document.getElementById("event_name").value=key[3];
document.getElementById("event_location").value=key[4];
document.getElementById("event_memo").value=key[5];


	
}









