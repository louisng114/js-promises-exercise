// const BaseURL = "https://deckofcardsapi.com/api/deck";

// /*******************************************************************************
// Make a request to the Deck of Cards API to request a single card from a newly
// shuffled deck. Once you have the card, console.log the value and the suit (e.g.
// “5 of spades”, “queen of diamonds”).
// *******************************************************************************/

// axios
//     .get(`${BaseURL}/new/shuffle/?deck_count=1`)
//     .then(newDeck => {
//         return axios.get(`${BaseURL}/${newDeck.data.deck_id}/draw/?count=1`)
//     })
//     .then(result =>
//         console.log(`${result.data.cards[0].value} OF ${result.data.cards[0].suit}`))
//     .catch(err => console.log(err));

// /*******************************************************************************
// 2. Make a request to the deck of cards API to request a single card from a newly
// shuffled deck. Once you have the card, make a request to the same API to get one
// more card from the **same** deck.
    
// Once you have both cards, ***console.log*** the values and suits of both cards.
// *******************************************************************************/

// let deckId = ""
// let card1 = ""

// axios
//     .get(`${BaseURL}/new/shuffle/?deck_count=1`)
//     .then(newDeck => {
//         deckId = newDeck.data.deck_id;
//         return axios.get(`${BaseURL}/${deckId}/draw/?count=1`);
//     })
//     .then(result => {
//         card1 = `${result.data.cards[0].value} OF ${result.data.cards[0].suit}`;
//         return axios.get(`${BaseURL}/${deckId}/draw/?count=1`);
//     })
//     .then(result => {
//         console.log(card1);
//         console.log(`${result.data.cards[0].value} OF ${result.data.cards[0].suit}`);
//     })
//     .catch(err => console.log(err));

const BaseURL = "https://deckofcardsapi.com/api/deck";

axios
    .get(`${BaseURL}/new/shuffle/?deck_count=1`)
    .then(newDeck => {
        const deckId = newDeck.data.deck_id

        const cardForm = document.querySelector("form");
        const cardPile = document.querySelector(".cardPile");

        cardForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const newCard = document.createElement("img");
            axios
                .get(`${BaseURL}/${deckId}/draw/?count=1`)
                .then(result => {
                    newCard.src = result.data.cards[0].image;
                    const rotation = 60 * Math.random() - 30;
                    const translationX = 20 * Math.random() - 10;
                    const translationY = 20 * Math.random() - 10;
                    newCard.style = `position:fixed;rotate:${rotation}deg;translate:${translationX}px ${translationY}px`;
                    cardPile.append(newCard);
                })
                .catch(err => console.log(err));
        });
    })
    .catch(err => console.log(err));
