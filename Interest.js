function showPopup(imageSrc, description) {
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('popupDescription').innerText = description;
    document.getElementById('popup').style.display = 'flex'; // 팝업을 보이게 함
}

function closePopup() {
    document.getElementById('popup').style.display = 'none'; // 팝업을 숨김
}

const highlight = document.getElementById('highlight');

document.addEventListener('mousemove', (e) => {
    highlight.style.left = `${e.pageX}px`;
    highlight.style.top = `${e.pageY}px`;
});

