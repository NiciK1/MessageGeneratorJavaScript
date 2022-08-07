// array of quotes
const arrayOfQuotes1 = ["You got a dream, you gotta protect it. You want something, go get it. Period. -Will Smith", "Joy is always in process, it\'s always under construction. -Mathew McConaughey", "Our time here is limited. -Steve Jobs", "We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better. -J.K. Rowling", "Just remember, you can\'t climb the ladder of success with your hands in your pockets. -Arnold Schwarzenegger", "Stop the crazy mind chatter in your head that tells you all the time that you are not good enough. -Oprah Winfrey", "Just do it.", "When you have a dream, you've got to grab it and never let go. -Carol Burnett", "Nothing is impossible. The word itself says \'I\'m possible!\'. -Audrey Hepburn", "There is nothing impossible to they who will try. -Alexander the Great", "Keep your face always toward the sunshine, and shadows will fall behind you. -Walt Whitman", "One day or day one. Your choice.", "You define your own life. Don\'t let other people write your script. -Oprah Winfrey", "You are never too old to set another goal or to dream a new dream. -Malala Yousafzai", "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you\'re comfortable with it. -Dr.Phil", "You don\'t learn to walk by following rules. You learn by doing and falling over. -Richard Branson", "Invest in your dreams. Grind now. Shine later.", "Hustle beats talent when talent doesn\'t hustle. -Ross Simmonds", "Falling down is an accident, staying down is a choice. -David Bombal", "Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were. – David Rockefeller", "Some people want it to happen, some people wish it would happen, others make it happen. - Michael Jordan", "Rest at the end, not in the middle. -Kobe Bryant", "Entrepreneurship is living a few years of your life like most people won\'t. So that you can spend the rest of your life like most people can\'t.", "Without hustle, talent will only carry you so far. – Gary Vaynerchuk", "The hustle brings the dollar. The experience brings the knowledge. The persistence brings success. -Ross Simmonds", "Hustle isn’t just working on the things you like. It means doing the things you don\'t enjoy so you can do the things you love."];
const arrayOfQuotes2 = ["It's not about money or connections. It's the willingness to outwork and outlearn everyone when it comes to your business. -Mark Cuban", "Life will change. Growth is optional. Choose wisely.", "Business opportunities are like buses: there's always another one coming. -Richard Branson", "Hustle in silence and let your success make the noise.", "Remembering you are going to die is the best way I know to avoid the trap of thinking you have something to lose. -Steve Jobs","Stay Humble, Hustle Hard."]

let lastQuote = [];
let randomNumArray;
let randomArray;
// function that chooses a quote at random
function choosingQuote() {
    randomArray = Math.floor(Math.random() * 2) + 1;

    if(randomArray === 1) {
        randomNumArray = Math.floor(Math.random() * arrayOfQuotes1.length);
    } else {
        randomNumArray = Math.floor(Math.random() * arrayOfQuotes2.length);
    };

    // checkingQuote();

    lastQuote[lastQuote.length] = Array (randomArray, randomNumArray);

    printQuote();
}

function printQuote(){
    console.log("The quote of the day is: ")
    if(randomArray === 1) {
        console.log(arrayOfQuotes1[randomNumArray]);
    } else if (randomArray === 2){
        console.log(arrayOfQuotes2[randomNumArray]);
    }
}

choosingQuote();



