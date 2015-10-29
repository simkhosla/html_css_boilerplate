
//SUPER IMPORTANT! It makes stuff happen only after everything on the page has loaded!
window.onload = function() {
  statusReport('hey hey hey!');

  var username = prompt('What is your name?');
  var mission = prompt('What is your mission?');

  var contentContainer =
  document.getElementById('content');

  contentContainer.innerHTML = username + ' is on a mission to ' + mission;
}

function statusReport(message) {
  console.log(message);
  return message;
}
