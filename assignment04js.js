/* JS for Ass03b */

var 

function getGistList() {
	var req = new XMLHttpRequest();
	if (!req) {
		throw 'unable to create HttpRequest.';
	}
	var pythonOk = document.getElementsByName('python-ok')[0];
	var jsonOk = document.getElementsByName('json-ok')[0];
	var javascriptOk = document.getElementsByName('javascript-ok')[0];
	var sqlOk = document.getElementsByName('sql-ok')[0];
	var url = 'https://developer.github.com/v3/gists/#list-gists';
	var params = {
		
	}
}