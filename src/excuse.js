window.onload = () => {
    document.querySelector('#btn').addEventListener("click", () =>{
        document.querySelector('#theExcuse').innerHTML = generateExcuse();
    });
};

let generateExcuse = () => {

    let who = ['Bill Gates', 'My cat', 'Your best friend', 'The delivery guy', 'Eren Yaeger', 'The Boogie'];
    let action = ['stole', 'sold', 'vandalised', 'ate', 'was sleeping on', 'cut up'];
    let what = ['my car', 'my homework', 'my laptop', 'my roof', 'my town', 'the road'];
    let when = ['right when I was about to leave', 'this morning', 'last night', 'when I was on my way', 'when I was leaving', 'about an hour ago'];

    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex];
};