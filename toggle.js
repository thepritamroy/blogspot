document.querySelector('.js-btn-container').addEventListener('click',()=>{
    if(document.querySelector('.js-main-mode-change')){
        document.querySelector('.js-main').classList.remove('js-main-mode-change')
    }else{
        document.querySelector('.js-main').classList.add('js-main-mode-change')
    }
    
    if(document.querySelector('.js-btn-container-rotate')){
        document.querySelector('.js-btn-container').classList.remove('js-btn-container-rotate')
    }else{
        document.querySelector('.js-btn-container').classList.add('js-btn-container-rotate')
    }
    if(document.querySelector('.js-toggle-btn-right')){
        document.querySelector('.js-toggle-btn').classList.remove('js-toggle-btn-right')
    }else{
    document.querySelector('.js-toggle-btn').classList.add('js-toggle-btn-right')
    }
    if(document.querySelector('.js-btn-right')){
        document.querySelector('.js-btn').classList.remove('js-btn-right')
    }else{
    document.querySelector('.js-btn').classList.add('js-btn-right')
    }
})

