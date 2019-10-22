let routes = {
  '/': homePage,
  '/404': redirectPage
};

let contentDiv = document.getElementById('content');
contentDiv.innerHTML = routes[window.location.pathname];

let onNavItemClick = (pathName) => {
  window.history.pushState(
    {}, 
    pathName,
    window.location.origin + pathName
  );  
  contentDiv.innerHTML = routes[pathName];
}

window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
}

window.onload = () => {
    UrlExists(window.location);
}

let UrlExists = (url) => {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status == 404) window.location.href("/404");
}
