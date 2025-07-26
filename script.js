const getQuoteBtn = document.querySelector('#get-quote-btn')
const quoteText = document.querySelector('#quote-text')
const quoteAuthor = document.querySelector('#quote-author')


async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random')
        
        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status}`);
            
        }
        const responseData = await Response.json();

        quoteAuthor.textContent = responseData.author;
        quoteText.textContent = responseData.content;
    } catch (error) {
    console.error('Произошла ошибка:', error);
    quoteText.textContent = 'Ошибка загрузки цитаты';
}
}

getQuoteBtn.addEventListener('click', fetchQuote)
fetchQuote();