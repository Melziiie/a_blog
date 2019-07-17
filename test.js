function aaa(){
    
    bbb().then(()=>{

    })
    .catch();
    bbb();
    console.log('run aaa')
     bbb();
    console.log('runed bbb')
}

function bbb(){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            console.log('run bbb')
            reject("error")
        },
         1000)
    })
    
}

//main
aaa().catch((err)=>{
    console.log('code is die')
    
    console.log(err)
});