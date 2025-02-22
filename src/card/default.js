this.default = function () {
    document.getElementById('e-card-flip').onclick = function (e) {
        var cardEle = e.currentTarget;
        if (cardEle.classList.contains('e-flipped')) {
            cardEle.classList.remove('e-flipped');
        }
        else {
            cardEle.classList.add('e-flipped');
        }
    };
    document.getElementById('e-card-flip').onblur = function (e) {
        var cardEle = e.currentTarget;
        cardEle.classList.remove('e-flipped');
    };
    document.getElementById('showcarddata').onclick = function () {
        var cEle = document.getElementById('card_revealed');
        var cardEle = cEle.parentNode.parentNode;
        var revealEle = cardEle.querySelector('#card_reveal');
        revealEle.classList.add('e-reveal-show');
        revealEle.classList.remove('e-reveal-hide');
        var revealedEle = cardEle.querySelector('#card_revealed');
        revealedEle.classList.add('e-reveal-hide');
        revealedEle.classList.remove('e-reveal-show');
    };
    document.getElementById('card-reveal_collapse').onclick = function (e) {
        var cardEle = e.currentTarget.parentNode.parentNode;
        var revealEle = cardEle.querySelector('#card_reveal');
        revealEle.classList.add('e-reveal-hide');
        revealEle.classList.remove('e-reveal-show');
        var revealedEle = cardEle.querySelector('#card_revealed');
        revealedEle.classList.add('e-reveal-show');
        revealedEle.classList.remove('e-reveal-hide');
    };
};
