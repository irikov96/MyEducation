//recieves string. If string starts with (R or r)=> print plays banjo or does not play banjo.
function areYouPlayingBanjo(name) {
   
    if(name.startsWith("R")||name.startsWith('r')){
      return name + " plays banjo";
    }else{
    return name + " does not play banjo";
  }
  }
  let print = areYouPlayingBanjo("Ricky")
  console.log(print);