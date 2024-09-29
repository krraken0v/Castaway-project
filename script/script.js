window.addEventListener("DOMContentLoaded",function(){
    const submitButton = document.querySelector(".loginSubmit");
    const inputName = document.querySelector(".loginName");
    const modalHeader = document.querySelector(".modal_header");
    const modalButtonClose = document.querySelector(".buttonModalClose");
    const modal = document.querySelector(".modal");
    const inputEmail = document.querySelector(".loginEmail");
    const modalEmail = document.querySelector(".modal__email");
    
    submitButton.addEventListener("click",function(){
        modal.classList.add("modalShow");
        const inputValueName = inputName.value;
        const inputValueEmail = inputEmail.value;
        modalHeader.innerText = `Thank you! ${inputValueName}`;
        modalEmail.innerText = `Your E-Mail is: ${inputValueEmail}`;

    })
    modalButtonClose.addEventListener("click",function(){
        modal.classList.remove("modalShow");
    })
})