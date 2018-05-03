function PlayersController() {
    //Private
    var loading = true;
    var playersService = new PlayersService(ready);

    function ready() {
        
        loading = false;

    }
function drawPlayers(players){
    
}
    //Public
    this.search = function searchName(e){
        debugger
        e.preventDefault();
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
    }
    this.tester = function tester(e) {
        var test
        console.log('working')
        test = playersService.getPlayersData();
        console.log(test);

    }



}