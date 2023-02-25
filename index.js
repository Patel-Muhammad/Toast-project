const successBtn = document.querySelector('#success')
const errorBtn = document.querySelector('#error')
const warningBtn = document.querySelector('#warning')
const infoBtn = document.querySelector('#info')


const li = document.querySelectorAll('li')
console.log(li)

const x = document.querySelector('.fa-xmark')
x.addEventListener('click',()=>{
    document.querySelector('#toast-success').classList.remove('addStyle')
})

successBtn.addEventListener('click',()=>{
    if(document.querySelector('#toast-success').classList.contains('addStyle')){
        if(document.querySelector('#toast-error').classList.contains('addStyle')){
            document.querySelector('#toast-error').classList.remove('addStyle')
        }
        document.querySelector('#toast-success').classList.remove('addStyle')
    }
    else{
        document.querySelector('#toast-success').classList.add('addStyle')
    }
})


errorBtn.addEventListener('click',()=>{
    if(document.querySelector('#toast-error').classList.contains('addStyle')){
        document.querySelector('#toast-error').classList.remove('addStyle')
        if(document.querySelector('#toast-success').classList.contains('addStyle')){
            document.querySelector('#toast-success').classList.remove('addStyle')
        }
    }
    else{
        document.querySelector('#toast-error').classList.add('addStyle')
    }
})

warningBtn.addEventListener('click',()=>{
    if(document.querySelector('#toast-warning').classList.contains('addStyle')){
        if(document.querySelector('#toast-error').classList.contains('addStyle')){
            document.querySelector('#toast-error').classList.remove('addStyle')
        }
        document.querySelector('#toast-warning').classList.remove('addStyle')
    }
    else{
        document.querySelector('#toast-warning').classList.add('addStyle')
    }
})

infoBtn.addEventListener('click',()=>{
    if(document.querySelector('#toast-info').classList.contains('addStyle')){
        if(document.querySelector('#toast-error').classList.contains('addStyle')){
            document.querySelector('#toast-error').classList.remove('addStyle')
        }
        document.querySelector('#toast-info').classList.remove('addStyle')
    }
    else{
        document.querySelector('#toast-info').classList.add('addStyle')
    }
})

