//this is the decryption for Secure RG
//use at your own risk!
//this algorithm by Kevin Sisco (kevinsisco61784@gmail.com)
function srgdecrypt()
{
var R = Math.random();
var totalR = r+1*7;

var a = 5;
var b = a+31;
var c = a ^ b;
//Xor
var d = c ^ a*a+b;
var e = d+a+b*b;
var f = e*2*a+a*c;
var g = a+e+b+c*e-2;
var h = e+d;
var i = h*h*h;
var j = i+a+b*a;
var k = a*j+d;
var l = a+b*e+2;
var m = a ^ e;
var n = a*l;
var o = m*n+b;
var p = a ^ n;
var q = a*2+c+a;
var r = o+g;
var s = o*r;
var t = a+s;
var u = t*t*t*t+a*c;
var v = b+100*t;
var w = v+a;
var x = a*u+w;
var y = a+h*w;
var z = a+b+c+d+e+f+g+h+i+j+k*l*m*n+o+p+q+r+s+t*u*v+w*x+y*y*y*y*y*y*totalR+a*a;
do {
z-0.1;
z/2;
}
while (z > 2);
//now to output
document.write(z);
}
//note
//will return #IND value on most computers
//hint, let's work together to increase processing power!
  Enter file contents here
