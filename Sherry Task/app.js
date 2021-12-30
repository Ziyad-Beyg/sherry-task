
let signUpEmailEL
let signUpPasswordEL
let signInEmailEL
let signInPasswordEL
let modelEL = document.getElementById('modelDivID')
let logInModelELTrue = document.getElementById('logInModelDivIDTrue')
let logInModelELFalse = document.getElementById('logInModelDivIDFalse')

let SignUpModelELEmpty = document.getElementById('modelDivEmpty')
let LogInModelEmpty = document.getElementById('logInModelDivEmpty')

let mainEl = document.getElementById('mainDiv1')
let mainEl2 = document.getElementById('mainDiv2')

// function signUpFunction(){

//     signUpEmailEL = document.getElementById('email')
//     signUpPasswordEL = document.getElementById('password')
    

//     if(signUpEmailEL.value == '' || signUpEmailEL.value == ' ' || signUpEmailEL.value == '  ' ){

//         setTimeout(()=>{
//             SignUpModelELEmpty.style.display = "flex"
//         },1000)
//         setTimeout(()=>{
//             SignUpModelELEmpty.style.display = "none"
//         },3000)

//     }
//     else if(signUpPasswordEL.value == '' || signUpPasswordEL.value == ' ' || signUpPasswordEL.value == '  ' ){

//         setTimeout(()=>{
//             SignUpModelELEmpty.style.display = "flex"
//         },1000)
//         setTimeout(()=>{
//             SignUpModelELEmpty.style.display = "none"
//         },3000)

//     }
//     else{

//         setTimeout(()=>{
//             modelEL.style.display = "flex"
//         },1000)
    
//         setTimeout(()=>{
//             modelEL.style.display = "none"
//             mainEl.style.display = "none"
//             mainEl2.style.display = "flex"
//         },3000)
    
//         console.log(signUpEmailEL.value, signUpPasswordEL.value)

//     }

// }

function signInFunction(){
    
    signInEmailEL = document.getElementById('email')
    signInPasswordEL = document.getElementById('password') 

    if(signInEmailEL.value == 'sherry@gmail.com' && signInPasswordEL.value == '123456'){

        window.location.href = './StopWatch/stopWatch.html'

    }
    else if(signInEmailEL.value != 'sherry@gmail.com' && signInPasswordEL.value != '123456'){

        alert("INCORRECT EMAIL / PASSWORD")

    }
    // else{

    //     if(signUpEmailEL.value === signInEmailEL.value && signUpPasswordEL.value === signInPasswordEL.value){

    //         setTimeout(()=>{
    //             logInModelELTrue.style.display = "flex"
    //         },1000)
    //         setTimeout(()=>{
    //             logInModelELTrue.style.display = "none"
    //             mainEl2.style.display = "none"
    //             mainEl.style.display = "flex"

    //             signUpEmailEL.value = ''
    //             signUpPasswordEL.value = ''
    //             signInEmailEL.value = ''
    //             signInPasswordEL.value = ''
    //         },3000)
    //         console.log("IF BLOCK OF LOGIN",signInEmailEL.value, signInPasswordEL.value)

    //     }
    //     else{

    //         setTimeout(()=>{
    //             logInModelELFalse.style.display = "flex"
    //         },1000)
    //         setTimeout(()=>{
    //             logInModelELFalse.style.display = "none"
    //         },3000)
            
            
    //         console.log("ELSE IF BLOCK OF LOGIN",signInEmailEL.value, signInPasswordEL.value)
    //     } 
        
    // }

    signInEmailEL.value = ''
    signInPasswordEL.value = '' 
}