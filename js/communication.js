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