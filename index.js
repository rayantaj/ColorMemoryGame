
var score = 0;
var Prevclicked_card = null;
var PrevclassNameOfCard;
var classNameOfTarget;

function onClickCard(e) {

    TargetComponent = e.currentTarget;
    TargetComponent.className = TargetComponent.className.
        replace('color-hide', 'clicked').trim();


    if (Prevclicked_card == null) {
        Prevclicked_card = TargetComponent;
        PrevclassNameOfCard = Prevclicked_card.className;
    } else {


        classNameOfTarget = TargetComponent.className;
        


        if (PrevclassNameOfCard==classNameOfTarget) {
            score++;
            // alert(true);
            Prevclicked_card = null;
            PrevclassNameOfCard = null;
            classNameOfTarget = null;
            TargetComponent = null;



        } else {

            setTimeout(() => {

                //alert(false);
                Prevclicked_card.className = Prevclicked_card.className.
                    replace('clicked', ' ').trim() + ' color-hide';
                TargetComponent.className = TargetComponent.className.
                    replace('clicked', ' ').trim() + ' color-hide';

                console.log(TargetComponent.className);
                console.log(Prevclicked_card.className);
                Prevclicked_card = null;
                PrevclassNameOfCard = null;
                classNameOfTarget = null;
                TargetComponent = null;

            }, 200)



        }
        if (score == 8) {
            alert('you have won');
        }

    }



    
}



var ArrayColors = [' red ', ' blue ', ' hotpink ', ' green ', ' yellow ', ' cyan ', ' purple ', ' brown '];


for (i = 1; i < 5; i++) {



    var nTemp = document.getElementById("n" + i);
    var nTempClass = nTemp.className;
    var color = ArrayColors[i - 1];
    nTemp.className = color + nTempClass;

}

for (i = 5; i < 9; i++) {



    var nTemp = document.getElementById("n" + i);
    var nTempClass = nTemp.className;
    var color = ArrayColors[i - 1];
    nTemp.className = color + nTempClass;

}

for (i = 12; i > 8; i--) {

    //console.log(12-i);
    var nTemp = document.getElementById("n" + i);
    var nTempClass = nTemp.className;
    var color = ArrayColors[12 - i];
    nTemp.className = color + nTempClass;
}

for (i = 16; i > 12; i--) {


    var nTemp = document.getElementById("n" + i);
    var nTempClass = nTemp.className;
    var color = ArrayColors[20 - i];
    nTemp.className = color + nTempClass;
}