const daysContainer = document.querySelector('.days');
const monthYearElement = document.getElementById('month-year');
const prevButton = document.getElementById('prev-month');
const nextButton = document.getElementById('next-month');
const todayButton = document.getElementById('today-button');

const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');

let currentDate = new Date();
const originalDate = new Date(); 

const monthlyDescriptions = {
    6: {
        4: {
            description: '저의 생일입니다~!',
            image: './img/me.jpg'
        },
        6: { 
            description: '제 친구 윤솔양의 생일입니다~!', 
            image: './img/Special1.jpg'
        }
    },
    7:{
        4:{
            description: '저의 친한 형인 정우형의 생일입니다~!',
            image: './img/Special2.png'
        }
    },
    12: {
        25: { 
            description: '크리스마스입니다!', 
            image: './img/Special3.png'
        },
        31: { 
            description: '2024년의 마지막 날입니다. 다들 고생하셨습니다~!', 
            image: './img/Special4.png'
        }
    }
};

//달력 생성 함수
function createCalendar(date) {
    daysContainer.innerHTML = ''; 
    
    const year = date.getFullYear();
    const month = date.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    updateMonthYear(year, month);

    for (let i = 0; i < firstDayOfMonth; i++) {
        const blankElement = document.createElement('div');
        blankElement.classList.add('blank');
        daysContainer.appendChild(blankElement);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i;

        dayElement.addEventListener('click', () => {
            openPopup(i, year, month + 1);
        });

        daysContainer.appendChild(dayElement);
    }

    const totalCells = firstDayOfMonth + daysInMonth;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let i = 0; i < remainingCells; i++) {
        const blankElement = document.createElement('div');
        blankElement.classList.add('blank');
        daysContainer.appendChild(blankElement);
    }
}

//년/월 정보 업데이트 함수
function updateMonthYear(year, month) {
    monthYearElement.textContent = `${year}년 ${month + 1}월`;
}

function openPopup(day, year, month) {
    popupTitle.textContent = `${year}년 ${month}월 ${day}일`;
    
    const monthData = monthlyDescriptions[month] || {};
    const dayData = monthData[day] || {};
    
    const description = dayData.description || '이 날에 대한 특별한 설명이 없습니다.';
    const imageUrl = dayData.image || 'https://via.placeholder.com/300x200.png?text=기본+이미지';
    
    popupDescription.textContent = description;
    document.querySelector('.popup-image').src = imageUrl;
    popup.classList.add('show');
}

function closePopup() {
    popup.classList.remove('show');
}

prevButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    createCalendar(currentDate);
});

nextButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    createCalendar(currentDate);
});

todayButton.addEventListener('click', () => {
    currentDate = new Date(originalDate);
    createCalendar(currentDate); 
});

closePopupButton.addEventListener('click', closePopup);

createCalendar(currentDate);