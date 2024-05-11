'use strict';
const onSwitch = document.querySelector('.btn');

onSwitch.addEventListener('click',function(){
    document.body.classList.toggle('lit-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className === 'lit-theme'){
        this.textContent = 'Dark';
    }
    else{
        this.textContent = 'Light';
    }

    console.log('current class name: '+ className);
});