//function recieves 2 integers. If one of them is <=0, return 0, else return m*n
function paperwork(n, m) {
    if(n<0 || m<0){
      return 0;
    }else{
      return m*n;
    }
// return m > 0 && n>0 ? m*n:0
}
  