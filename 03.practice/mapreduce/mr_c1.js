var map = function(){
   emit(this.user.time_zone,1);
}

var reduce = function(key,values){
   var sum = 0 ;
   for(var i = 0 ; i< values.length; i++){
    sum += values[i];
   }
   return sum;
}
