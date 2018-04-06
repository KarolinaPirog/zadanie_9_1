function getTriangleArea(a, h) {
    if (a > 0 && h > 0){
        return a*h/2 ;       
    } else {
        return 'nieprawidłowe dane';
    }
}

console.log (getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(1, 5);
var triangle3Area = getTriangleArea(2, 4);

console.log ('wynik1: ' + triangle1Area);
console.log ('wynik2: ' + triangle2Area);
console.log ('wynik3: ' + triangle3Area);
