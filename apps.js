const allPlayers = () => {
      const searchValue = document.getElementById('input-box').value;
      const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
      // console.log(url)
      fetch(url)
            .then(res => res.json())
            .then(data => showPlayers(data.player))
      console.log(searchValue)

}
const showPlayers = (playar) => {
      console.log(playar)
}