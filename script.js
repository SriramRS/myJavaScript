var obj={
  name : "my object",
  myfunc: function(){
    document.writeln("called using method inside object");
  }
}

if(obj.name === "my object")
{
  //obj.myfunc();
}

var utilities={
  printAllMembers : function(objj){

    objj.myfunc();
    document.writeln("<br>"+objj.name);

  }
}

utilities.printAllMembers(obj);
