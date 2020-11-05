window.addEventListener('DOMContentLoaded', function () {
    'use strict';
        let greeting = document.querySelector('.greeting'),
            weekDay = document.querySelector('.week-day'),
            time = document.querySelector('.time'),
            daysBeforeNE = document.querySelector('.days-before-NE'),
            currentHours = (new Date()).getHours();
            console.log(currentHours);

        //Приветствие
        let getGreeting = () => {
          
            if (currentHours >= 6 && currentHours < 12) {
            greeting.textContent = 'Доброе утро';
            }
        
            if (currentHours >= 12 && currentHours < 19) {
                greeting.textContent = 'Добрый день';
            }
        
            if (currentHours >= 19 && currentHours < 23) {
                greeting.textContent = 'Добрый вечер';
            }
        
            if (currentHours >= 0 && currentHours < 6) {
                greeting.textContent = 'Добрый ночи';
            }
        };

        getGreeting();

        //День недели
        let getWeekDay = (i) => {
            const listDaysWeek = [
            'воскресенье',
            'понедельник',
            'вторник',
            'среда',
            'четверг',
            'пятница',
            'суббота'
            ];

            weekDay.textContent = listDaysWeek[i];
        };

        let getDay = (new Date()).getDay();

        getWeekDay(getDay);

        //Текущее время
        setInterval(() => {
            
            let hours = new Date().getHours();
            
            let localTime = new Date().toLocaleTimeString(),
                timeFormat = hours % 12;
            
            if (timeFormat > 1) {
                timeFormat = 'PM';
            } else {
              timeFormat = 'AM';
            }
            time.textContent = `${localTime} ${timeFormat}`;
        }, 1000);

        //До NY осталось
        let daysLeftNewYear = () => {

            let dayNow = new Date(),
                nextDate = new Date(`${dayNow.getFullYear()}, December, 31`),
                msPerDay = 24*60*60*1000,
                daysLeft = Math.round((nextDate.getTime() - dayNow.getTime())/msPerDay);
                daysBeforeNE.textContent = daysLeft;
        };

        daysLeftNewYear();
});