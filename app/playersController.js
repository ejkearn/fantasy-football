function PlayersController() {
    //Private
    var loading = true;
    var playersService = new PlayersService(ready);

    function ready() {

        loading = false;

    }
    function drawPlayers(players) {
        var template = '';
        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            console.log(player.fullname)
            template += `<div class="col-2">
            <div class="card" class="">
            <img class="card-img-top" src="${player.photo}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${player.fullname}</h5>
                <p class="card-text">Postion: ${player.position}</p>
                <p class="card-text">team: ${player.position}</p>
                <a href="#" class="btn btn-primary">ADD</a>
            </div>
            </div>
            </div>`
        }
        var face = 'face'
        // console.log(template)
        document.getElementById('players').innerHTML = template;
    }
    //Public
    this.searchName = function searchName(e) {
        e.preventDefault();
        debugger
        var name = e.target.player.value;
        console.log(name)
        var results = []
        var tempArr = []
        results = playersService.getPlayersByName(name)
        // results.concat(tempArr)
        // tempArr = playersService.getPlayersByTeam(name)
        // results.concat(tempArr)
        // tempArr = playersService.getPlayersByPosition(name)
        // results.concat(tempArr)
        console.log(results);
        drawPlayers(results);
    }
    this.tester = function tester(e) {
        e.preventDefault();
        var test
        console.log('working')
        test = playersService.getPlayersData();
        console.log(test);

    }



}