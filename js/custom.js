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
        getSumRow();
      //  showVictory(elem);
    });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getSumRow() {
    var retSum = 0;
    var temp = true;
   jQuery('.tic_tak table').find('tr').each(function(indx, element){
        retSum = 0;
        jQuery(element).find('td').each(function(i,e) {
            for (var i = 0; i < jQuery(e).length; i++) {
                if (jQuery(e).find('.user').length) {
                    if(temp) {
                        retSum++;
                    } else {
                        temp = true;
                    }
                } else {
                    temp = false;
                }
            }
            console.log(retSum);
        });
    });
 /*   for (var i = 0+widthTable*row; i < widthTable*row+widthTable ; i++) {
        retSum += massValue[i];
    }
*/    return retSum;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getSumCol(massValue, col) {
    var retSum = 0, i = 0;
    for (var i = 0; i < massValue.length; i++) {
        if (i % widthTable == col) {
            retSum += massValue[i];
        }
    }
    return retSum;
}
/////////////////////////Todo простой алгоритм - очень легко победить.
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
function showVictory(elem){
    for (var i = 0; i < elem.length; i++) {
        if (parseInt(jQuery(elem[i]).text()) >= countVic) {
            alert('Вы победили!!!');
        }
    }
}