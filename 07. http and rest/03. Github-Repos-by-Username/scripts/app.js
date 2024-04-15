function loadRepos() {
	const repos = document.getElementById('repos');
	const name = document.getElementById('username').value;

	fetch('https://api.github.com/MartoGD', {
		method: 'GET',
	})
		.then(response => response.json())
		.then(data => {
			console.log(data);
		})
}