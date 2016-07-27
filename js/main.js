// Ф-я clickMenu() добавляем обработчики события на игровое меню

function clickMenu() {
	var btnMenu = document.querySelectorAll('.value-menu');
	for (var i = 0; i < btnMenu.length; i++) {
		btnMenu[i].onclick = active;
	};
};

// Ф-я gameFieldActive() добавляем обработчики события на ячейки игрового поля

function gameFieldActive() {
	var gameCell = document.querySelectorAll('.cell');
	for (var i = 0; i < gameCell.length; i++) {
        if ( !(gameCell[i].classList.contains('color-color')) ) {
		  gameCell[i].addEventListener('click', activeClass);
        };

        gameCell[i].addEventListener('click', counter);
	};
};

// Ф-я gameFieldActiveDelete() удаляет обработчики события с игрового поля

function gameFieldActiveDelete() {
	var gameCell = document.querySelectorAll('.cell');
	for (var i = 0; i < gameCell.length; i++) {
		  gameCell[i].removeEventListener('click', activeClass);
	};
};

// Ф-я active(click) передаёт значения из игрового меню в ячейки игрового поля

function active(click) {
	var btn = click.target;
	var gameCell = document.querySelectorAll('.cell');
	var controlMenu = document.getElementById('control-menu');
	
	var gameField = document.querySelector('.table-container');

	gameCell.forEach( function(item, i, gameCell) {
		if ( item.classList.contains('active') && !(item.classList.contains('color-color')) ) {
			if (item.innerHTML = btn.innerHTML) {
				item.classList.remove('active');
				if (item.innerHTML == 'X') {
				item.innerHTML = '';
				item.classList.remove('active');
				}
			};
            
			controlMenu.classList.remove('view');
			
            counterValuesFunction();
			viewResultsGame();
			comunicationLogic();
		};
	});
};

// Ф-я activeClass() передаёт ячейкам игрового поля класс 'active' и 'view'

function activeClass(click) {
	var clickCell = click.target;
	var gameCell = document.querySelectorAll('.cell');
	var controlMenu = document.getElementById('control-menu');
	
	gameCell.forEach(function(item, i, gameCell) {
		if ( item.classList.contains('active') ) {
			item.classList.remove('active');
		}; 
	});
    clickCell.classList.toggle('active');
	controlMenu.classList.toggle('view');
};

// 
// Ф-я для переключения уровней игры
//

// Ф-я gameLevelList() добавляем обработчики клика на элементы списка "Выбрать уровень"

var selectLvlBtn = document.getElementById('select-lvl');
var levelList = document.querySelector('.game-lvl-list');

function gameLevelList() {
	var gameList = document.querySelectorAll('.game-list');
    
	for (var i = 0; i < gameList.length; i++) {
		gameList[i].onclick = lvlGame;
    };
};

// Ф-я lvlGame(click) отвечает за передачу данных из массива в игровое поле. Переключение уровней

function lvlGame(click) {
    var clickList = click.target;
    var gameCell = document.querySelectorAll('.cell');
    var j = clickList.id;
	var tableContainer = document.querySelector('.table-container');
	var gameField = document.querySelector('.table-container');
    
    gameFieldActiveDelete();
    classActiveViewDelete();
    
    for (var i = 0; i < gameCell.length; i++) {
        gameCell[i].innerHTML = gameLevel[j][i];
        gameCell[i].classList.remove('color-color');
        gameCell[i].classList.remove('active');
        if ( gameLevel[j][i] !== '') {
            gameCell[i].classList.add('color-color');
        }
    };
    
    selectLvlBtn.classList.remove('active-color');
    levelList.setAttribute('hidden','hidden');
    tableContainer.removeAttribute('hidden');
    gameFieldActive();
	gameField.style.background = '';
	updateBackground();
	
    var imgBlock = document.getElementById('image-communication');
    
    feedback.startGame();
    setTimeout(feedback.deleteImg, 10000);
};

// обработчик отвечает за отображение списка уровней

selectLvlBtn.addEventListener('click', function(){
    if ( levelList.hasAttribute('hidden') ) {
        levelList.removeAttribute('hidden');
    };
});

gameLevelList();
clickMenu();


// 
// Определяем координаты курсора над полем и передаём их всплывающему меню
//

function cursorCoordinates() {
	var map = document.querySelector('.table-container');
	
	map.onmousedown = coords;
}

function coords(eventObj) {
	var controlMenu = document.getElementById('control-menu');
	
	var x = eventObj.clientX;
	var y = eventObj.clientY;
	
	controlMenu.style.top = y + 'px';
	controlMenu.style.left = x + 'px';
}

cursorCoordinates();

// 
// Ф-я будет удаляет active класс с ячеек и удаляет класс view с игрового меню
//

function classActiveViewDelete() {
    var controlMenu = document.getElementById('control-menu');
    var gameCell = document.querySelectorAll('.cell');
    
    for (var i = 0; i < gameCell.lenght; ++i) {
        gameCell[i].classList.remove('active');
    };
    
    controlMenu.classList.remove('view');
};

// 
// Функции startGame() и clickStartBtn() вешают обработчик события на кнопку старта и
// добавляет атрибут hidden стартовой страничке
//

function clickStartBtn() {
    var startGameBtn = document.getElementById('btn-new-game');
    
    startGameBtn.onclick = startGame;
};

function startGame() {
    var startGamePage = document.querySelector('.first-page');
    
    startGamePage.setAttribute('hidden', 'hidden');
    selectLvlBtn.classList.add('active-color');
};

clickStartBtn();

// 
// Функции hihohoPage() и clickHihohoPageBtn() вешают обработчик события на кнопку HihohoGaming и
// добавляет атрибут hidden 
//

function clickHihohoPageBtn() {
    var hihohoPageBtn  = document.getElementById('hihoho-gaming');
    
    hihohoPageBtn.onclick = hihohoPage;
};

function hihohoPage() {
    var hihohoPage = document.querySelector('.hihoho-gaming-page');
    var hihohoPageBtn  = document.getElementById('hihoho-gaming');
    
    if ( hihohoPage.hasAttribute('hidden') ) {
        hihohoPage.removeAttribute('hidden');
        hihohoPageBtn.classList.add('active-color');
        selectLvlBtn.classList.remove('active-color');
    } else {
        hihohoPage.setAttribute('hidden', 'hidden');
        hihohoPageBtn.classList.remove('active-color');
    };
};

clickHihohoPageBtn();

// 
// Ф-я отвечает activeMenuBtn() за добавление активных классов кнопкам HihohoGaming и Выбрать уровень
//

function activeMenuBtn() {
    var levelList = document.querySelector('.game-lvl-list');
    var selectLvlBtn = document.getElementById('select-lvl');
    var hihohoPage = document.querySelector('.hihoho-gaming-page');
    var hihohoPageBtn  = document.getElementById('hihoho-gaming');
    
    if ( levelList.hasAttribute('hidden') ) {
        selectLvlBtn.classList.remove('active-color');
    } else {
        selectLvlBtn.classList.add('active-color');
    };
    
    if ( !(hihohoPage.hasAttribute('hidden')) && levelList.hasAttribute('hidden') ) {
        selectLvlBtn.classList.remove('active-color');
    } else {
        selectLvlBtn.classList.add('active-color');
    };
    
    if ( hihohoPage.hasAttribute('hidden') && !(levelList.hasAttribute('hidden')) ) {
        selectLvlBtn.classList.add('active-color');
    };
 
    hihohoPage.setAttribute('hidden', 'hidden');
    hihohoPageBtn.classList.remove('active-color');
};

selectLvlBtn.addEventListener('click', activeMenuBtn);


//
// Функция отвечает за рандомное назначение чисел
//

function updateBackground() {
	var images = [
		'/img/moon.png',
		'/img/rocket.png',
		'/img/sputnik.png'
	];
	
	var randomImageNumber = Math.round(Math.random() * (images.length - 1));
	var mainContainer = document.getElementById('main');
	
	mainContainer.style.backgroundImage = 'url(' + images[randomImageNumber] + ')';
};













