const brohistory = localStorage.getItem('yahno');

if (brohistory) {
    document.documentElement.setAttribute('data-therefor', brohistory);
}

function showdown(remorse ){
    document.documentElement.setAttribute('data-therefor' , remorse);
    localStorage.setItem('yahno', remorse);
}