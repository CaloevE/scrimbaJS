// document.getElementById("count-el").innerText = 5

let countEL =	document.getElementById('count-el')
let saveEL = document.getElementById('save-el')

let countPeople = 0

function increment() {
	countPeople += 1
	countEL.textContent = countPeople
}

function save() {
	let peopleComes = countPeople + ' - '

	saveEL.textContent += peopleComes
	countEL.textContent = 0
	countPeople = 0
}
