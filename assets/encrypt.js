let bk = 'e61f3793-901f-49ce-a8e3-4a52c70c3583';
let _bk = "";
console.log(bk);
for(let c=0;c<bk.length;c++)
{
    _bk += String.fromCharCode(bk.charCodeAt(c)+42);
}
console.log(_bk);
let nw = _bk;
let _nw = "";
for(let c=0;c<nw.length;c++)
{
    _nw += String.fromCharCode(nw.charCodeAt(c)-42);
}
console.log(_nw);