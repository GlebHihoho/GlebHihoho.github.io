// 
// Ф-и для вывода в консоль значений введённых игроком
// используется для облегчения создания уровней
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