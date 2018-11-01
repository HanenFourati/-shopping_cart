function add(i) { 
   let qte=document.getElementById('quantity'+i).innerHTML;
   let price=document.getElementById('item-price'+i).innerHTML;
   let origine=document.getElementById('item-price'+i).getAttribute('value');
   let n=parseInt(qte);
   let p=parseInt(price);
   let o=parseInt(origine);
   n++;
   p=p+o;
   document.getElementById('item-price'+i).innerHTML=p+"$";
   document.getElementById('quantity'+i).innerHTML=n;
   let tp=document.getElementById('pricetot').innerHTML;
   let tpn=parseInt(tp);
   let s=tpn+o;
   document.getElementById('pricetot').innerHTML=s+"$";

   let sh=document.getElementById('shipping').innerHTML;
   let shn=parseInt(sh);
   let a=shn+4;
   document.getElementById('shipping').innerHTML=a+"$";

   let tol=document.getElementById('total').innerHTML;
   let tt=parseInt(tol);
   let t=a+s;
   document.getElementById('total').innerHTML=t+"$";

}
function soustraction(i){
    let qte=document.getElementById('quantity'+i).innerHTML;
    let price=document.getElementById('item-price'+i).innerHTML;
    let origine=document.getElementById('item-price'+i).getAttribute('value');
    let n=parseInt(qte);
    let p=parseInt(price);
    let o=parseInt(origine);
    n--;
    p=p-o;
    document.getElementById('item-price'+i).innerHTML=p+"$";
    document.getElementById('quantity'+i).innerHTML=n;
    let tp=document.getElementById('pricetot').innerHTML;
    let tpn=parseInt(tp);
    let s=tpn-o;
    document.getElementById('pricetot').innerHTML=s+"$";

    let sh=document.getElementById('shipping').innerHTML;
   let shn=parseInt(sh);
   let a=shn-4;
   document.getElementById('shipping').innerHTML=a+"$";

   let tol=document.getElementById('total').innerHTML;
   let tt=parseInt(tol);
   let t=a+s;
   document.getElementById('total').innerHTML=t+"$";
}

function delet_item(i){
    let price=document.getElementById('item-price'+i).innerHTML;
let p=parseInt(price);
let tp=document.getElementById('pricetot').innerHTML;
let tpn=parseInt(tp);
let s=tpn-p;

let qte=document.getElementById('quantity'+i).innerHTML;
let n=parseInt(qte);
let sh=document.getElementById('shipping').innerHTML;
let shn=parseInt(sh);
let a=0;
for(let k=1;k<=n;k++)
{
a=shn-4;
}
document.getElementById('shipping').innerHTML=a+"$";

let tol=document.getElementById('total').innerHTML;
let tt=parseInt(tol);
let t=a+s;
document.getElementById('total').innerHTML=t+"$";

document.getElementById('pricetot').innerHTML=s+"$";

    var node = document.getElementById("clothes"+i);
if (node.parentNode) {
  node.parentNode.removeChild(node);
}



}