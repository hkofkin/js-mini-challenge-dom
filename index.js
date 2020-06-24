/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

const playerContainer = document.querySelector('.player-container')

PLAYERS.forEach(addToContainer)

function addToContainer(player) {
    playerDetail = document.createElement('div')
    playerDetail.classList.add('playerInfo')
    playerDetail.innerHTML = `
    <div class="player" data-number="${player.number}">
        <h3>
            ${player.name} (<em>${player.nickname}</em>)
        </h3>
        <img src="${player.photo}" alt="${player.name}">
    </div>
    `
    playerContainer.append(playerDetail)
}
console.log(playerContainer)

/***** Deliverable 4 *****/
const player = document.querySelector("[data-number='7']")
player.remove()
