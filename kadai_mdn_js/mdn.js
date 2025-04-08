const date = new Date();
console.log(date.toLocaleDateString('ja-JP', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
}));
