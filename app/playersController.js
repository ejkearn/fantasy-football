function PlayersController() {
    //Private
    var loading = true;
    var playersService = new PlayersService(ready);

    function ready() {

        loading = false;

    }
    function drawPlayers(players, place) {
        var template = '';
        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            debugger
            // console.log(player.fullname)
            if (place == 'players') {
                template += `<div class="col-3">`
            } else{
                template += `<div class="col-6">`
            }
            template += `
            <div class="card" class="">
            <img class="card-img-top" src="${player.photo}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${player.fullname}</h5>
                <p class="card-text">Postion: ${player.position}</p>
                <p class="card-text">team: ${player.pro_team}</p>
                `
            if (place == 'team') {
                template += `<a href="#" class="btn btn-primary" onclick="app.controllers.playersController.removePlayer('${player.id}')">Remove</a>
                </div>
                </div>
                </div>
                `

            } else {
                template += `<a href="#" class="btn btn-primary" onclick="app.controllers.playersController.addPlayer('${player.id}')">ADD</a>
                    </div>
                    </div>
                    </div>`
            }
        }

        var face = 'face'
        // console.log(template)
        document.getElementById(place).innerHTML = template;
    }
    //Public

    // Add to Team
    this.addPlayer = function addPlayer(playerId) {
        var myTeam = []
        // console.log('added player');
        // console.log(playerId);
        myTeam = playersService.addPlayer(playerId);
        drawPlayers(myTeam, 'team')
    }
    // remove from team
this.removePlayer = function removePlayer(playerId){
    var myTeam = [];
    myTeam = playersService.removePlayer(playerId);
    drawPlayers(myTeam, 'team');
}

    // search Player
    this.searchName = function searchName(e) {
        e.preventDefault();
        var name = e.target.player.value;
        var results = []
        results = playersService.getPlayersByName(name)
        drawPlayers(results, 'players');
    }
    // search team
    this.searchTeam = function searchTeam(e) {
        e.preventDefault();
        var team = e.target.team.value;
        var results = [];
        results = playersService.getPlayersByTeam(team);
        drawPlayers(results, 'players');
    }
    // search position
    this.searchPosition = function searchPostition(e) {
        e.preventDefault();
        var position = e.target.position.value;
        var results = [];
        results = playersService.getPlayersByPosition(position);
        drawPlayers(results, 'players');
    }

    this.tester = function tester(e) {
        e.preventDefault();
        var test
        console.log('working')
        test = playersService.getPlayersData();
        console.log(test);

    }



}