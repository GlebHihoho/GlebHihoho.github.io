//
// Данный файл отвечает за реагирование на результат действия игрока
//

var imgBlock = document.getElementById('image-communication');

var feedback = {
    startGame: function() {
        imgBlock.src = 'img/2.png';
    },
    
    winGame: function() {
        imgBlock.src = 'img/win.png';
    },
    
    deleteImg: function() {
        imgBlock.src = '';
    },
	
	lossGame: function() {
		imgBlock.src = 'img/8.png';
	},
	
	lolGame: function() {
		imgBlock.src = 'img/9.png';
	},
	
	firstStep: function() {
		imgBlock.src = 'img/6.png';
	},
	
	secondtStep: function() {
		imgBlock.src = 'img/3.png';
	},
	
	thirdStep: function() {
		imgBlock.src = 'img/5.png';
	},

	fourthStep: function() {
		imgBlock.src = 'img/4.png';
	}
};

//
// Ф-я которая будет отвечать за логику отображения различных сообщений реагирующих
// на поведение игрока
//

function comunicationLogic() {
	if ( counter() >= 40 && counter() <= 50 ) {
		if ( counterValuesFunction() == 1 ) {
			feedback.firstStep();
		};
	} else if ( counter() == 50 ) {
		feedback.deleteImg();
	};
	
	if ( counter() > 50 && counter() <= 60 ) {
		if ( counterValuesFunction() == 2 || counterValuesFunction() == 3 || counterValuesFunction() == 4 ) {
			feedback.secondtStep();
		};
	} else if ( counter() == 60 ) {
		feedback.deleteImg();
	};
	
	if ( counter() > 60 && counter() <= 70 ) {
		if ( counterValuesFunction() >= 5 || counterValuesFunction() <= 11 ) {
			feedback.thirdStep();
		};
	} else if ( counter() == 60 ) {
		feedback.deleteImg();
	};
	
	if ( counter() > 70 && counter() <= 78 ) {
		if ( counterValuesFunction() >= 13 || counterValuesFunction() <= 25 ) {
			feedback.fourthStep();
		};
	} else if ( counter() == 79 ) {
		feedback.deleteImg();
	};
};