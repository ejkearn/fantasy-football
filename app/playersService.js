function PlayersService(callback) {

  //private
  var playersData = []
  //...
  //...
  function loadPlayersData() {
    //check if the player already has a copy of the NFL playersData
    var localData = localStorage.getItem('playersData');
    //if they do, pull from there
    if (localData) {
      playersData = JSON.parse(localData);

      //return will short-circuit the loadPlayersData function
      //this will prevent the code below from ever executing
      return callback()
    }
    //if not go get that data
    var url = "https://bcw-getter.herokuapp.com/?url=";
    var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
    var apiUrl = url + encodeURIComponent(endpointUri);

    $.getJSON(apiUrl, function (data) {
      playersData = data.body.players;
      console.log('Player Data Ready')
      console.log('Writing Player Data to localStorage')
      localStorage.setItem('playersData', JSON.stringify(playersData))
      console.log('Finished Writing Player Data to localStorage')
      callback()
    });
  }

  //Public

//search by functions
  this.getPlayersByTeam = function(teamName){
    return playersData.filter(function(player){
      if(player.pro_team.toLowerCase() == teamName.toLowerCase()){
        return true;
      }
    });
  }
  this.getPlayersByName = function(name){
    return playersData.filter(function(player){
      name = name.toLowerCase();
      if(player.fullname.toLowerCase().includes(name)){
        return true;
      }
    });
  }
  this.getPlayersByPosition = function(position){
    return playersData.filter(function(player){
      if(player.position.toLowerCase() == position.toLowerCase()){
        return true;
      }
    });
  }

  this.getPlayersData = function () {
    console.log(playersData)
    return playersData;
  }

  loadPlayersData(); //call the function above every time we create a new service
} 