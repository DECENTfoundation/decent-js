"use strict";
const el = id => document.getElementById(id);

const output = el('output');
const result = el('result');

output.innerHTML = 'Loading ...';
decent.content().searchContent(new decent.SearchParams())
    .then(content => {
        output.innerHTML = renderContent(content);
    });

function renderContent(content) {
    const render = [];
    if (content.length === 0) {
        render.push('<h3>No content</h3>');
    } else {
        render.push('<ul>');
        render.push(content.map(c => '<li>' + c.synopsis.title + '</li> <button type="button" value="c.id" onclick="buyContent(\'' +  c.id + '\')">Buy</button>'));
        render.push('</ul>');
    }
    return render.join('');
}


// Define own values for variables
const buyerId = '1.2.30';
const elGamalPublic = '7317752633383033582159088041509593492238468350205070200236191783227692402591973343242224306276612029080797696757604654009350847591901976526778157668840202.';
const privateKey = '5JDFQN3T8CFT1ynhgd5s574mTV9UPf9WamkHojBL4NgbhSBDmBj';

function buyContent(contentId) {
    result.innerHTML = 'Loading ...';
    decent.content().buyContent(contentId, buyerId, elGamalPublic, privateKey)
        .then(() => {
            console.log('Successful');
            result.innerHTML = '<p style="color: green;">Content bought</p>';
        })
        .catch(err => {
            console.error(err);
            result.innerHTML = '<p style="color: red;">Content already bought or own content</p>';
        });
}

//# sourceMappingURL=searchContent.js.map