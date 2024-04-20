//parameters: aPple,maNgo,BAnana
//return:APPLE,MANGO,BANANA.

function convertToUppercase(data :string):string {
    const stringInUpperCase=  data.toUpperCase();
    return stringInUpperCase;
}
convertToUppercase("mAnGo");
console.log(convertToUppercase("mAnGo"))
console.log(convertToUppercase("aPpLe"))
console.log(convertToUppercase("bANana"))

function convertToLowerCase(data :string) :string {
    const stringInLowerCase= data.toLowerCase();
    return stringInLowerCase;
}
console.log(convertToLowerCase("mAnGo"))
console.log(convertToLowerCase("APPle"))
console.log(convertToLowerCase("PINAPPLE"));

let amount={
    140:"6 eggs",
    80:"bread",
    220:"milk",
    120:"tea",
    40:"pancake",
}

function item(data:number):number{
const item= [data] ;
return data;
}
console.log()