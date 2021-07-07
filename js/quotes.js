const quotes = [
    {
        quote: "No sweat, no sweet",
        author: "SUGAR",
    },
    {
        quote: "No pain no gain",
        author: "CHOCOLATE",
    },
    {
        quote: "Let bygones be bygones",
        author: "SWEET",
    },
    {
        quote: "Pain past is pleasure",
        author: "CAT",
    },
    {
        quote: "Step by step goes a long way",
        author: "KITTEN",
    },
    {
        quote: "Little by little does the trick",
        author: "COOL",
    },
    {
        quote: "One's utmost moves the heavens",
        author: "CHILL",
    },
    {
        quote: "Knowledge in youth is wisdom in age",
        author: "HAPPY",
    },
    {
        quote: "A minute's success pays the failure of years",
        author: "BRIGHT",
    },
    {
        quote: "Envy and wrath shorten the life",
        author: "PURPLE",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;