import "./App.css";
import { useState } from "react";

function App() {
  const [randomQuote, setRandomQuote] = useState(
    "Life is what happens when you're busy making other plans. - John Lennon"
  );

  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The best way to predict your future is to create it. - Peter Drucker",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "Life is short, and it's up to you to make it sweet. - Sarah Louise Delany",
    "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The best revenge is massive success. - Frank Sinatra",
    "To love and be loved is to feel the sun from both sides. - David Viscott",
    "Love yourself first and everything else falls into line. - Lucille Ball",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. - Lao Tzu",
    "The best thing to hold onto in life is each other. - Audrey Hepburn",
    "The way to love anything is to realize that it may be lost. - Gilbert K. Chesterton",
    "Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "Where there is love there is life. - Mahatma Gandhi",
    "Love doesn't make the world go 'round. Love is what makes the ride worthwhile. - Franklin P. Jones",
    "The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart. - Helen Keller",
    "We are shaped and fashioned by what we love. - Johann Wolfgang von Goethe",
    "The most important thing in life is to learn how to give out love, and to let it come in. - Morrie Schwartz",
    "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. - Oscar Wilde",
    "Love is not only something you feel, it is something you do. - David Wilkerson",
    "There is only one happiness in this life, to love and be loved. - George Sand",
    "The best proof of love is trust. - Joyce Brothers",
    "True love is eternal, infinite, and always like itself. It is equal and pure, without violent demonstrations: it is seen with white hairs and is always young in the heart. - Honore de Balzac",
    "Life without love is like a tree without blossoms or fruit. - Khalil Gibran",
    "True love cannot be found where it does not exist, nor can it be denied where it does. - Torquato Tasso",
    "Love is when the other person's happiness is more important than your own. - H. Jackson Brown Jr.",
    "To be brave is to love someone unconditionally, without expecting anything in return. - Madonna",
    "Love is that condition in which the happiness of another person is essential to your own. - Robert A. Heinlein",
    "We accept the love we think we deserve. - Stephen Chbosky",
    "The giving of love is an education in itself. - Eleanor Roosevelt",
    "The first duty of love is to listen. - Paul Tillich",
    "The only thing we never get enough of is love; and the only thing we never give enough of is love. - Henry Miller",
    "Love is the only force capable of transforming an enemy into a friend. - Martin Luther King Jr.",
    "Love is not something you find. Love is something that finds you. - Loretta Young",
    "Love is a better teacher than duty. - Albert Einstein",
    "If I had a flower for every time I thought of you... I could walk through my garden forever. - Alfred Tennyson",
    "The supreme happiness of life consists in the conviction that one is loved. - Victor Hugo",
    "The best things in life are not things, they're people. - Unknown",
    "The greatest healing therapy is friendship and love. - Hubert H. Humphrey",
    "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope. - Maya Angelou",
    "The only thing that will make you happy is being happy with who you are. - Goldie Hawn",
    "You yourself, as much as anybody in the entire universe, deserve your love and affection. - Buddha",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "It is never too late to be what you might have been. - George Eliot",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Perseverance is not a long race; it is many short races one after the other. - Walter Elliot",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The best way to predict your future is to create it. - Peter Drucker",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "Life is short, and it's up to you to make it sweet. - Sarah Louise Delany",
    "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The best revenge is massive success. - Frank Sinatra",
    "To love and be loved is to feel the sun from both sides. - David Viscott",
    "Love yourself first and everything else falls into line. - Lucille Ball",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. - Lao Tzu",
    "The best thing to hold onto in life is each other. - Audrey Hepburn",
    "The way to love anything is to realize that it may be lost. - Gilbert K. Chesterton",
  ];
  function handleGenerateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }

  return (
    <>
      <h1>Random Quote Generator</h1>

      <h2>{randomQuote}</h2>

      <button onClick={handleGenerateRandomQuote}>Generate Quote</button>
    </>
  );
}

export default App;
