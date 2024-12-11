function showPopup(imageSrc, description, colorClass) {
    const popup = document.getElementById('popup');
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('popupDescription').innerText = description;

    popup.className = 'popup_wrap';
    if (colorClass) {
        popup.classList.add(colorClass);
    }

    popup.style.display = 'flex'; // 팝업을 보이게 함

    // 🎉 애니메이션 멈추기
    document.querySelector('.main').classList.add('paused');
}

function closePopup() {
    document.getElementById('popup').style.display = 'none'; // 팝업을 숨김

    // 🎉 애니메이션 다시 시작하기
    document.querySelector('.main').classList.remove('paused');
}
