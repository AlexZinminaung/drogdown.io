const schoolBoxElement = document.getElementsByClassName("school-box");
const schoolContentElement = document.getElementsByClassName("school-contant");



for (let i = 0;i < schoolBoxElement.length; i++){
    const onSchoolLabel = () => {
        schoolContentElement[i].classList.toggle('active');
    }
    schoolBoxElement[i].addEventListener('click',onSchoolLabel);
}


