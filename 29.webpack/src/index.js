let button = document.createElement("button");
button.innerHTML = "点我";
button.onclick = function() {
    import(/*webpackChunkName: 'title'*/'./title.js').then(function(result){
        console.log(result.default);
    });
};
document.body.appendChild(button);