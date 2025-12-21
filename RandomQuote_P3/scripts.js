function GenQuote() {
    var quotes = {
        "The best way to get started is to quit talking and begin doing.": "Walt Disney",
        "Don't let yesterday take up too much of today.": "Will Rogers",
        "It's not whether you get knocked down, it's whether you get up.": "Vince Lombardi",
        "If you are working on something exciting, it will keep you motivated.": "Rom Handy",
        "Success is not in what you have, but who you are.": "Bo Bennett",
        "The harder you work for something, the greater you'll feel when you achieve it.": "Kiola",
        "Dream bigger. Do bigger.": "Unknown",
        "Don't watch the clock; do what it does. Keep going.": "Sam Levenson",
        "Great things never come from comfort zones.": "Hurley",
        "Push yourself, because no one else is going to do it for you.": "Max Karl"
    };

    var authors = Object.keys(quotes);
    var RIndex = Math.floor(Math.random() * authors.length);
    var randomQuote = authors[RIndex];   // ✅ FIXED

    document.getElementById("quote").innerHTML = '"' + randomQuote + '"';
    document.getElementById("author").innerHTML = "- " + quotes[randomQuote];
}
