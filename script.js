//This the settimeeout example and callback function

/*
console.log("first")
setTimeout(()=>{
    console.log("Third>>>three sec delay")
},3000)
console.log("second")                    
*/

//callback function eg:                         defnition>>> a function within the function parameter 

/*
function foo(){
    console.log("callback 1")
}
function foo1(a){
    x = 1;
    y = 2;
    console.log("sum",x+y)                  //foo1() is called but foo() is not called so it is called inside foo1() with diffrent name
    a()                                    //this a() act as a function name for the function within parameter >>> a() = foo() 
}                                           
foo1(foo)
*/

//callback hell >>> pain of callback

setTimeout(()=>{
    console.log("10")
    document.getElementById("display").innerText="10"

    setTimeout(()=>{
        console.log("9")
        document.getElementById("display").innerText="9"

        setTimeout(()=>{
            console.log("8")
            document.getElementById("display").innerText="8"
    
            setTimeout(()=>{
                console.log("7")
                document.getElementById("display").innerText="7"
        
                setTimeout(()=>{
                    console.log("6")
                    document.getElementById("display").innerText="6"
            
                    setTimeout(()=>{
                        console.log("5")
                        document.getElementById("display").innerText="5"
                
                        setTimeout(()=>{
                            console.log("4")
                            document.getElementById("display").innerText="4"
                    
                            setTimeout(()=>{
                                console.log("3")
                                document.getElementById("display").innerText="3"
                        
                                setTimeout(()=>{
                                    console.log("2")
                                    document.getElementById("display").innerText="2"
                            
                                    setTimeout(()=>{
                                        console.log("1")
                                        document.getElementById("display").innerText="1"
                                
                                        setTimeout(()=>{
                                            document.getElementById("display").innerText="Happy Birthday 🎂"
                                    
                                            
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)