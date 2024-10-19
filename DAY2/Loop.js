console.log("I am a Loop");

for(let i=0;i<=10;i++)
{
    console.log(i);
}


let obj={
    name:"Harry",
    role :"programmer",
    company :"code with harry"
}

for(const key in obj)
{
    console.log(key);
}

//Print harry String 1 by 1

for(const c of "Harry")
{
    console.log(c);
}

// while Loop

let i=0;
while(i<=10)
{
    console.log(i);
    i++;
}

//do while Loop

let j=10;
do{
    console.log(j);
    j++;
}while(j<6);
