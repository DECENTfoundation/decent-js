"use strict";

const el = id => document.getElementById(id);

el('searchButton').onclick = () => {
    const keyword = el('keyword').value;
    getAccount(keyword);
};
const output = el('output');

function getAccount(accountId) {
    output.innerHTML = 'Loading ...';
    decent.account().getAccountById(accountId)
        .then(res => {
            output.innerHTML = '';
            output.innerHTML += '<h3>Id: ' + res.id + '</h3>';
            output.innerHTML += '<h3>Name: ' + res.name + '</h3>';
            output.innerHTML += '<h3>Auth: ' + res.owner.key_auths[0][0] + '</h3>';
            output.innerHTML += '<h3>Registered by: ' + res.registrar + '</h3>';
            output.innerHTML += JSON.stringify(res, null, 2);
        })
        .catch(err => {
            console.error(err);
            output.innerHTML = '<p style="color: red;">Error loading user account</p>';
        });
}

//# sourceMappingURL=searchContent.js.map