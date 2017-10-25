/*var str = ' 1';
var num = 2;
console.log(num * str);
var x = 2
x = x + 42;
console.log(x);
x = 2;
x--
console.log(x);

var x = 2;
x == 2 ? console.log('tak i est') : console.log('Net 3to He Tak');

var x = 2
if (x === 'hghg') {
  console.log('true');
}

else {
  console.log ('false');
}

var a = 2 + 2;
switch (a) {
  case 3:
  alert ('маловато');
  break;
  case 4:
  alert ('norm');
  break;
  case 5:
  alert ('perebor');
  break;
  default:
  alert ('4e To He To');
}
var i;
for (i = 0; i < 10; i++) {
  alert( i );
}

while (i < 5) {
  i += 1;
  console.log(i);
}

var i = 5;
do {
  i += 1;
  console.log(i);
} while (i < 5);

var data = ['name', 'dog', 'spring', 'orange'];
console.log(data.length);
console.log(data[2]);

for (var i = 0; i < data.length; i++) {
  console.log(data[i]);
}

function goGogo(x, y, z, cb) {
  console.log(3333);
  return;
}
goGogo (1, 'ghjg', {'a', 'b'});


var x = function(x, y, z, a) {
  console.log(4444);
}

(function() {
  console.log(55555);
})()

function sum (a, b) {
  var c = a + b;
  return c;
  console.log(4444);
}
console.log(sum (1, 5));

function multy (a, b) {
  if ((typeof a !== 'number') || (typeof b !== 'number')) {
    return('Nel3ya umnojat stroki')
  }
  return a * b;
}
console.log(multy (1, 'ddd'));
console.log(multy (2, 7));

var x = function (a, b) {
  return 'noName';
}
console.log(x);
//calculate (x);

(function () {
  console.log(4444)
})();

function go (a) {
  if (a == 5) {
    return;
  }
  console.log(a);
  a++;
  go(a);
}

go(3);*/
function findString(arr) {
 for (var i = 0; i < arr.length; i++) {
   if(typeof arr[i] == 'string') {alert (arr[i]);}
   else {console.log(arr[i]);}
 }
}
findString([1, 2, 3, 'string1', 5, 6]);
