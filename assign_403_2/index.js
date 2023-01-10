var numberOfButtons = document.querySelectorAll(".button").length;

for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".button")[i]
        .addEventListener("click", function () {
            var buttonStyle = this.innerHTML;
            sound(buttonStyle);

        });
}



function sound(key) {
    if (key == "w") {
        var sound1 = new Audio("mixkit-atmospheric-wind-drum-roll-swoosh-576.wav");
        sound1.play();
    }
    else if (key == 'a') {
        var sound2 = new Audio("mixkit-drum-deep-impact-563.wav");
        sound2.play();

    }
    else if (key == 's') {
        var sound3 = new Audio('mixkit-drum-roll-566.wav');
        sound3.play();

    } else if (key == 'd') {
        var sound4 = new Audio('mixkit-ominous-drums-227.wav');
        sound4.play();

    }
    else if (key == 'j') {
        var sound5 = new Audio('mixkit-ominous-drums-appear-228.wav');
        sound5.play();
    }
    else if (key == 'k') {
        var sound6 = new Audio('mixkit-tribal-deep-drum-echoes-575.wav');
        sound6.play();
    }
    else if (key == 'l') {
        var sound7 = new Audio('mixkit-tribal-dry-drum-558.wav');
        sound7.play();
    }

}
