// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
let el = (type,target, { id,classname,text,src }) => {
    let newEl = document.createElement(type);
    if(text != '' && text != undefined){
        console.log(text)
        let textEl = document.createTextNode(text)
        newEl.appendChild(textEl)
    }
    if(classname != '' && classname !=undefined){
        newEl.classList = classname
    }
    if (id !='' && id != undefined){
        newEl.setAttribute('id', id)
    }
    if (src != '' && src != undefined) {
        newEl.setAttribute('src', src)
    }
    document.querySelector(target).appendChild(newEl);
}
(function Header() {
    el('div', '.header-container', { classname:'header' });
    el('span', '.header-container div', { classname:'date',text:'SMARCH 28, 2019' })
    el('h1', '.header-container div', { text:'Lambda Times' } )
    el('span', '.header-container div', { text:'98°', classname:'temp' })
})();
