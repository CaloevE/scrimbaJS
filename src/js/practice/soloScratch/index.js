let guestEl = document.getElementById('guest-el')
let homeEl = document.getElementById('home-el')

let countHome = 0
let countGuest = 0

function plusOneHome() {
	countHome += 1
	homeEl.textContent = countHome
}

function plusTwoHome() {
	countHome += 2
	homeEl.textContent = countHome

}

function plusThreeHome() {
	countHome += 3
	homeEl.textContent = countHome

}

function plusOneGuest() {
	countGuest += 1
	guestEl.textContent = countGuest
}

function plusTwoGuest() {
	countGuest += 2
	guestEl.textContent = countGuest

}

function plusThreeGuest() {
	countGuest += 3
	guestEl.textContent = countGuest
}




