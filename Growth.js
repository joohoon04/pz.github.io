document.addEventListener("DOMContentLoaded", function(){
    const times = document.querySelectorAll(".click");
    const observer = new IntersectionObserver((sections) => {
        sections.forEach(section => {
            if(section.isIntersecting){
                section.target.classList.add("show");
            }else{
                section.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.1  });

    times.forEach(time => {
        observer.observe(time);
    });
});

function showPopup(imageSrc, description) {
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('popupDescription').innerText = description;
    document.getElementById('popup').style.display = 'flex'; // 팝업을 보이게 함
}

function closePopup() {
    document.getElementById('popup').style.display = 'none'; // 팝업을 숨김
}

function showPopup(imageSrc, description, colorClass) {
    const popup = document.getElementById('popup');
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('popupDescription').innerText = description;
    
    popup.className = 'popup_wrap';
    if (colorClass) {
        popup.classList.add(colorClass);
    }

    popup.style.display = 'flex'; // 팝업을 보이게 함
}

function closePopup() {
    document.getElementById('popup').style.display = 'none'; // 팝업을 숨김
}