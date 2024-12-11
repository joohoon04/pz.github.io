const mainElements = document.querySelectorAll('.Growth, .Food, .Interest, .Travel, .Hobby, .People, .Affected, .Special, .Future');

mainElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        // 모든 요소에 .blurred 클래스 추가
        mainElements.forEach(el => {
            el.classList.add('blurred');
        });
        // 호버 중인 요소만 .blurred 클래스 제거
        element.classList.remove('blurred');
    });

    element.addEventListener('mouseleave', () => {
        // 마우스가 떠나면 모든 요소에서 .blurred 클래스 제거
        mainElements.forEach(el => {
            el.classList.remove('blurred');
        });
    });
});