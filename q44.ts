
make_s("letuce","Tomato","Olives","cheese","fries")
make_s("Grilled chicken","letuce","Onion","Olives","fries")
make_s("Olives","Mayoneese","fries","Onion","bbq chicken")

function make_s(...items){
 console.log("i will make you a yummy sandwich\n");
 for(let i=0;i<items.length;i++){
  console.log("adding "+items[i]+" to your sandwich");
 };
console.log("your sandwich is ready");
}

