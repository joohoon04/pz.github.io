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


// 원형 모양의 커서
const content = document.querySelector('.content')
const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')

content.onmousemove = function (e) {
    const x = e.pageX - content.offsetLeft
    const y = e.pageY - content.offsetTop
    
    content.style.setProperty('--x', x + 'px')
    content.style.setProperty('--y', y + 'px')
}
content1.onmousemove = function (e) {
    const x = e.pageX - content1.offsetLeft
    const y = e.pageY - content1.offsetTop
    
    content1.style.setProperty('--x', x + 'px')
    content1.style.setProperty('--y', y + 'px')
}
content2.onmousemove = function (e) {
    const x = e.pageX - content2.offsetLeft
    const y = e.pageY - content2.offsetTop
    
    content2.style.setProperty('--x', x + 'px')
    content2.style.setProperty('--y', y + 'px')
}