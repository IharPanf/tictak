jQuery(document).ready(function(){
    jQuery('.cells').on('click',function(){
        var massValue = new Array();
        var countCells = jQuery('.cells');

        if (jQuery(this).find('img').length < 1) {
            jQuery(this).append("<img src='/modules/mod_tictak/tmpl/img/add.png' class='user'>");
            turnComp(countCells);
        } else {
            alert('Квадрат уже заполнен!');
        }
        if (checkVictoryRow() || checkVictoryCol()) {
            showVictory();
        }
    });
    jQuery('#startGame').on('click',startNewGame);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function checkVictoryRow() {
    var strAnswer = '';
    var victory = false;
    jQuery('.tic_tak table').find('tr').each(function(indx, element){
        strAnswer = '';
        jQuery(element).find('td').each(function(i,e) {
            for (var i = 0; i < jQuery(e).length; i++) {
                if (jQuery(e).find('.user').length) {
                    strAnswer += '1';
                } else {
                    strAnswer += '0';
                }
            }
        });
        if (strAnswer.indexOf('11111') >= 0) { victory = true; }
    });
    return victory;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function checkVictoryCol() {
    var strAnswer = '';
    var victory = false;
    var widthSize = jQuery('.tic_tak').find('tr').length;

    for (var i = 0; i < widthSize; i++) {
        strAnswer = '';
        jQuery('.col'+i).each(function(indx,element){
            for (var i = 0; i < jQuery(element).length; i++) {
                if (jQuery(element).find('.user').length) {
                    strAnswer += '1';
                } else {
                    strAnswer += '0';
                }
            }

        });
        if (strAnswer.indexOf('11111') >= 0) { victory = true; }
    }
    return victory;
}
//Todo простой алгоритм - очень легко победить.
function turnComp(countCells) {
    while (true) {
        rand = Math.floor((Math.random()*countCells.length));
        if (jQuery(countCells[rand]).find('img').length < 1) {
            jQuery(countCells[rand]).append("<img src='/modules/mod_tictak/tmpl/img/minus.png'>");
            break;
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showVictory(){
    alert('Вы победили!!!');
}

function startNewGame() {
    jQuery('.tic_tak').find('img').remove();
}