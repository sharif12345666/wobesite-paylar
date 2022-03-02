const allPlayers = () => {
      document.getElementById('player-container').innerHTML = ''
      document.getElementById('input-box').innerHTML = ''
      const searchValue = document.getElementById('input-box').value;
      const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
      // console.log(url)
      fetch(url)
            .then(res => res.json())
            .then(data => showPlayers(data.player))
      console.log(searchValue)

}
const showPlayers = (playars) => {
      // console.log(playar)
      for (const player of playars) {
            console.log(player)
            const parent = document.getElementById('player-container')
            const div = document.createElement('div')
            div.innerHTML = `
            <div class="card border p-5">
            <div class="pro pic">
                  <img class="w-50" src="${player.strThumb}" alt="" srcset="">
            </div>
            <h4>Name: ${player.strPlayer}</h4>
            <h5>Country:${player.strNationality}</h5>
            <p></p>
            <div class="allbutton">
            <button type="button" class="btn btn-danger">Delete</button>
            <button Onclick="detalic('${player.idPlayer}')" type="button" class="btn btn-success">Detalic</button>
            </div>
      </div>
            `
            parent.appendChild(div)
      }

}
const detalic = (info) => {
      const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`
      console.log(url)
      fetch(url)
            .then(res => res.json())
            .then(data => sarsinfo(data.players[0]))
}
const sarsinfo = (info) => {
      console.log(info)
      document.getElementById('detalic-container').innerHTML = `
      <div class="card border">
      <img class="w-50" src="${info.strThumb}" alt="" srcset="">
      <h4>name:${info.strPlayer}</h4>
      <h5>Country:${info.strNationality}</h5>
      <p>StrWeight:${info.strWeight}</p>
      <p>StrGender:${info.strGender}</p>
      <p>StrTeam${info.strTeam}</p>

</div>
      `
}