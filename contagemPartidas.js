let lines = gets().split("\n");
 
var numberOfMatches = parseInt(lines.shift);
 
let n = parseInt(lines.shift());
let totalMatches = 0;
    while(n>1){
        if( n % 2 == 0             ){
          n = n / 2;  
          totalMatches = totalMatches + n ;
        }else{
        n = (n - 1) / 2; 
        totalMatches = totalMatches + n + 1 ;
        }
    }
print(totalMatches);