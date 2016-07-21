// Ф-я clickMenu() добавляем обработчики события на игровое меню

function clickMenu() {
	var btnMenu = document.querySelectorAll('.value-menu');
	for (var i = 0; i < btnMenu.length; i++) {
		btnMenu[i].onclick = active;
	};
};

// Ф-я gameFieldActive() добавляем обработчики события на игровое поля

function gameFieldActive() {
	var gameCell = document.querySelectorAll('.cell');
	for (var i = 0; i < gameCell.length; i++) {
		gameCell[i].onclick = activeClass;
        gameCell[i].addEventListener('click', eventFeedback);
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
			}
			controlMenu.classList.remove('view');
			if (
					inspection('cell-1') &&
					inspection('cell-2') &&
					inspection('cell-3') &&
					inspection('cell-4') &&
					inspection('cell-5') &&
					inspection('cell-6') &&
					inspection('cell-7') &&
					inspection('cell-8') &&
					inspection('cell-9') &&
					inspection('horizont-1') &&
					inspection('horizont-2') &&
					inspection('horizont-3') &&
					inspection('horizont-4') &&
					inspection('horizont-5') &&
					inspection('horizont-6') &&
					inspection('horizont-7') &&
					inspection('horizont-8') &&
					inspection('horizont-9') &&
					inspection('vertical-1') &&
					inspection('vertical-2') &&
					inspection('vertical-3') &&
					inspection('vertical-4') &&
					inspection('vertical-5') &&
					inspection('vertical-6') &&
					inspection('vertical-7') &&
					inspection('vertical-8') &&
					inspection('vertical-9') 
			) {
				gameField.style.background = 'orange';
                feedback.winGame();
                controlMenu.classList.remove('view');
			} else {
                gameField.style.background = '';
			}
		};
	})
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

// Ф-я compareComments(valA, valB) отвечает за сортировку массивов по возростанию элементов

function compareValue(valA, valB) {
  if (valA > valB) {
    return 1;
  } else if (valA === valB) {
    return 0;
  } else {
    return -1;
  }
};

// 
// Ф-и inspection(clas) проверяют условие игры по горизонтали, вертикали и в квадратах
//

function inspection(clas) {
	var emptyArray = [];
	var referenceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	
	var inspectionCell = document.querySelectorAll('.' + clas);
	
	inspectionCell.forEach(function(item, i, inspectionCell) {
		emptyArray[i] = item.innerHTML;
	});
	
	emptyArray.sort(compareValue);
	
	function testBlock() {
		if ( referenceArray.toString() == emptyArray.toString() ) {
			return true;
		} else {
			return false;
		}
	};
	
	testBlock();
	
	if ( testBlock() ) {
		return true;
	} else {
		return false;
	}
};

// 
// Ф-и clearField() очистки игрового поля от чисел
//

var clearBtn = document.getElementById('clear-btn');

function clearField() {
    var field = document.querySelectorAll('.cell');
    var gameField = document.querySelector('.table-container');
    
    
    for (var i = 0; i < field.length; i++) {
        field[i].innerHTML = '';
        field[i].style.background = '';
        field[i].classList.remove('active');
        field[i].classList.remove('color-color');
    };
    
    gameField.style.background = '';
    imgBlock.src = 'img/1.png';
};

clearBtn.onclick = clearField;

// 
// Ф-и для вывода в консоль значений введённых игроком
//

var viewConsoleBtn = document.getElementById('view-console');

function viewConsole() {
    var field = document.querySelectorAll('.cell');
    var viewArrey = [];
    
    for (var i = 0; i < field.length; i++) {
        viewArrey[i] = field[i].innerHTML;
    };
    
    console.log(viewArrey);
};

viewConsoleBtn.onclick = viewConsole;

// 
// Ф-я для переключения уровней игры
//

// Ф-я gameFieldActive() добавляем обработчики клика на элементы списка "Выбрать уровень"

var selectLvlBtn = document.getElementById('select-lvl');
var levelList = document.querySelector('.game-lvl-list');

function gameLevelList() {
	var gameList = document.querySelectorAll('.game-list');
    
	for (var i = 0; i < gameList.length; i++) {
		gameList[i].onclick = lvlGame;
    }
};

// Ф-я lvlGame(click) отвечает за передачу данных из массива в игровое поле. Переключение уровней

function lvlGame(click) {
    var clickList = click.target;
    var gameCell = document.querySelectorAll('.cell');
    var j = clickList.id;
	var tableContainer = document.querySelector('.table-container');
    
    for (var i = 0; i < gameCell.length; i++) {
        gameCell[i].innerHTML = gameLevel[j][i];
        gameCell[i].classList.remove('color-color');
        gameCell[i].classList.remove('active');
        if ( gameLevel[j][i] !== '') {
            gameCell[i].classList.add('color-color');
        }
    };
	
    levelList.setAttribute('hidden','hidden');
    tableContainer.removeAttribute('hidden');
	
    var imgBlock = document.getElementById('image-communication');
    
    feedback.startGame();
    setTimeout(feedback.deleteImg, 10000);
};

// обработчик отвечает за отображение списка уровней

selectLvlBtn.addEventListener('click', function(){
    if ( levelList.hasAttribute('hidden') ) {
        levelList.removeAttribute('hidden');
    } else {
        levelList.setAttribute('hidden','hidden');
    }
});

imgBlock = document.getElementById('image-communication');

var feedback = {
    startGame: function() {
        imgBlock.src = 'img/2.png';
    },
    
    winGame: function() {
        imgBlock.src = 'img/win.png';
    },
    
    deleteImg: function() {
        imgBlock.src = '';
    }
};

function eventFeedback() {
    if ( 			
        inspection('cell-1') ||
		inspection('cell-9') 
    ) { 
        imgBlock.src = 'img/3.png';
    } else if (
        inspection('horizont-3') ||
        inspection('horizont-6') ||
        inspection('horizont-9')
    ) {
        imgBlock.src = 'img/4.png';
    } else if (
        inspection('vertical-1') ||
        inspection('vertical-4') ||
        inspection('vertical-7')
    ) {
        imgBlock.src = 'img/5.png';
    } else {
//        imgBlock.src = '';
    };
};

gameLevelList();
gameFieldActive();
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
// Функция отвечает за закрытие меню ввода чисел по клику на пустое пространство по бокам
//

//function closeMenu() {
//	var controlMenu = document.getElementById('control-menu');
//	var main = document.getElementById('main');
//	
//	main.onclick = close;
////	console.log(main);
//};
//
//function close() {
//	var controlMenu = document.getElementById('control-menu');
//	var tableContainer = document.querySelector('.table-container');
//	
////	controlMenu.classList.remove('view');
//	console.log(tableContainer);
//}
//
//closeMenu();







