// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

(async()=>{
    let get = await axios.get('https://lambda-times-backend.herokuapp.com/articles')
    
    let articles = Object.values(get.data.articles);
    let count = 1;
    articles.forEach((cat) => {
        cat.forEach((topic) => {
            el('div', '.cards-container', { id: `I${count}`, classname: 'card' })
            el('div', `#I${count}`, { classname: 'headline', text: `${topic.headline}` })
            el('div', `#I${count}`, { classname: 'author' })
            el('div', `#I${count} .author`, { classname: 'img-container' })
            el('img', `#I${count} .img-container`, { src: topic.authorPhoto })
            el('span', `#I${count}`, { text: `By ${topic.authorName}` })
            count++;
        })
    })
})();