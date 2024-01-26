const countValue=document.querySelector('#counter');//ye div wala element hai

const increment=()=>{
    //get the value from UI
    let value=parseInt(countValue.innerText);
    //update the value

    value=value+1;
    
    //set the value onto UI
    countValue.innerText=value;
};

const decrement=()=>{
    //get the value from UI
    let value=parseInt(countValue.innerText);
    //update the value
    
    value=value-1;
    
    
    //set the value onto UI
    countValue.innerText=value;
};

const reset=()=>{
    //get the value from UI
    let value=parseInt(countValue.innerText);
    //update the value
    value=0;
    //set the value onto UI
    countValue.innerText=value;
}