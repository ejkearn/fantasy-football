function PlayersController() {
    var loading = true;
    var playersService = new PlayersService(ready);

    function ready() {
        
        loading = false;

    }
    this.search = function search(e){
        debugger
        e.preventDefault();
        var name = e.target.player.value;
        console.log(name)
    }
    this.tester = function tester(e) {
        var test
        console.log('working')
        test = playersService.getPlayersData();
        console.log(test);

    }



}