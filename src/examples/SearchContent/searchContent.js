"use strict";

const el = id => document.getElementById(id);

el('searchButton').onclick = () => {
    const keyword = el('keyword').value;
    searchContent(keyword);
};

const output = el('output');

function searchContent(keyword) {
    output.innerHTML = 'Loading ...';
    decent.content().searchContent(new decent.SearchParams(keyword))
        .then(content => {
            output.innerHTML = renderContent(content);
        })
        .catch(err => {
            console.error(err);
            output.innerHTML = 'Error loading content';
        });
}

function renderContent(content) {
    const render = [];

    if (content.length === 0) {
        render.push('<h3>No content</h3>');
    } else {
        render.push('<ul>');
        render.push(content.map(c => '<li>' + c.synopsis.title + '</li>'));
        render.push('</ul>');
    }
    return render.join('');
}

//# sourceMappingURL=searchContent.js.map