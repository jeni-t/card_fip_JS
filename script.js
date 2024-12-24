function shuffleCards() {
    var container = document.querySelector('.stright');
    var cards = Array.from(container.children);

    for (let i = cards.length - 1; i > 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
    }

    container.innerHTML = '';
    cards.forEach(card => {
        card.classList.remove('flipped', 'hidden'); 
        container.appendChild(card);
    });

    firstCard = null;
    secondCard = null;
    matchedCount = 0;

    document.querySelector('.congratulations').classList.remove('visible');
}


var firstCard = null;
var secondCard = null;
var matchedCount = 0;
var cards = document.querySelectorAll(".flip-card");
var totalPairs = document.querySelectorAll(".flip-card").length / 2;

document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener('click', function () {
        if (card.classList.contains('flipped') || secondCard) return;

        card.classList.add('flipped');

        if (!firstCard) {
            firstCard = card;
        } else if (!secondCard) {
            secondCard = card;

            var firstImageName = firstCard.querySelector('.flip-card-back img').getAttribute('name');
            var secondImageName = secondCard.querySelector('.flip-card-back img').getAttribute('name');

            if (firstImageName === secondImageName) {

                setTimeout(() => {
                    firstCard.classList.add('hidden');
                    secondCard.classList.add('hidden');
                    matchedCount++;
                    resetSelection();
                    if (matchedCount === totalPairs) {
                        document.querySelector('.congratulations').classList.add('visible');
                    }
                }, 500);
            } else {

                setTimeout(() => {
                    firstCard.classList.remove('flipped');
                    secondCard.classList.remove('flipped');
                    resetSelection();
                }, 500);
            }
        }
    });

    console.log(card)
});

function resetSelection() {
    firstCard = null;
    secondCard = null;
}


