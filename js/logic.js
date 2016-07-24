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
// Ф-я counter() счётчик, которая будет определять сколько ячеек заполнено
//

function counter() {
    var gameCell = document.querySelectorAll('.cell');
    var count = 1;
    
    for (var i = 0; i < gameCell.length; ++i) {
        if ( gameCell[i].innerHTML !== '' ) {
            count = count + 1;
        };
    };
    return count;
};

//
// Ф-я resultsGame() определяет результат игры
//

function resultsGame() {
    if (    inspection('cell-1') &&
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
        return true;
    } else {
        return false;
    }
};
























