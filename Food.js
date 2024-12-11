document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    const pop = document.querySelector(".pop");
    const main = document.querySelector(".main");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    // 버튼 클릭 시 동작
    btn.addEventListener("click", () => {
        pop.style.display = "none"; // .pop 숨기기
        main.style.display = "block"; // .main 보이기
        header.style.display = "flex"; // 헤더 보이기
        footer.style.display = "flex"; // 푸터 보이기
    });
});
// 팝업 창 시작
const popupLinks = document.querySelectorAll('.popup');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupDescription = document.getElementById('popupDescription');

popupLinks.forEach(link =>{
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const imgSrc = this.querySelector('img').src;
        const description = this.getAttribute('data-description');

        popupImage.src = imgSrc;
        popupDescription.textContent = description;
        popup.style.display = 'flex';
    });
});

function closePopup(){
    popup.style.display = 'none';
}
// 팝업 끝