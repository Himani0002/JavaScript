function nice(name)
{
    console.log("Hey "+name);
}

nice("Himani")

function sum(a,b,c=3)
{
    console.log(a,b,c);
    return a+b+c;
}

console.log(sum(2,3));

const func1=(x)=>{
    console.log("I am arrow function",x)

}

func1(34);