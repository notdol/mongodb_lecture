var map = function(){
   emit(this.user.time_zone, this.user.location);
}

var reduce = function(key,values){
   var sum = {} ;
   for(var i = 0 ; i< values.length; i++){
    sum[values[i]] = 1;
   };
  var arr = [];
  for(var  k in sum ){
    arr.push(k);
  }
   return {locations: arr};
}

