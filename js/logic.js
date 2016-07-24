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
