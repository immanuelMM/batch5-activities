const token = "pk.eyJ1IjoibWF3ZS0wMjAxIiwiYSI6ImNrbDgwNmF5MjA3aDYydm9iaG9nNmFqbngifQ.b3zXl8UKrjyR9cITm-VVZQ";

mapboxgl.accessToken = token;
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  zoom: 4.4, 
  center: [121,12]
});
const getinfectedCount = count=>{
  if(count >  100000){
    return "red"
  }
  if(count > 10000){
    return "blue"
  }
  return "gray"
}
async function getdata(){
  const response = await fetch("csv/data.json")

  const data = await response.json();
  data.forEach(data => {
    console.log(data)
    // console.log(data.country , data.name)
  new mapboxgl.Marker({
    color: getinfectedCount(data.infected)
  }).setLngLat([data.longitude,data.latitude]).addTo(map);

  const monument = [data.longitude,data.latitude];
  const {infected , recovered , dead , sick , pop , vaccinated} = data;
  const popu = String(pop)
  const infect = String(infected)
  const recov = String (recovered)
  const deaths = String(dead)
  const active = String(sick)
  const vac = String(vaccinated)
  const infected_p = infect.replace(/(.)(?=(.{3})+$)/g,"$1,")
  const pupulation =  popu.replace(/(.)(?=(.{3})+$)/g,"$1,")
  const recovered_p = recov.replace(/(.)(?=(.{3})+$)/g,"$1,")
  const dead_p = deaths.replace(/(.)(?=(.{3})+$)/g,"$1,")
  const active_p = active.replace(/(.)(?=(.{3})+$)/g,"$1,")
  const vac_p = vac.replace(/(.)(?=(.{3})+$)/g,"$1,")
  const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<div id = "example"style=""><i class="fa  fa-flag-o" style="font-size:50px"></i> <h3><b>' + data.name + ' </b><a><h4> more info</h4></a></h3>' +
    '<div style = "background:white;  padding:10px; border-radius:5px;font-size:20px"><label style="">POPULATION</label><br><i class="fa fa-group" style="font-size:50px; color:#00c0ef;"></i>   '+ pupulation + '<hr></div>' +
    '<div style = "background:white;  padding:10px; border-radius:5px;font-size:20px"><label style="">VACCINATED</label><br> <i class="fa fa-medkit"style="font-size:50px; color:#f39c12;"></i>   '+ vac_p + '<hr></div>'+
    '<div style = "background:white;  padding:10px; border-radius:5px;font-size:20px"><label style="">INFECTED</label><br><i class="fa fa-child" style="font-size:50px; color:#ff000094;"></i>   '+ infected_p + '<hr></div>'  +
    '<div style = "background:white;  padding:10px; border-radius:5px;font-size:20px"><label style="">RECOVERED</label><br> <i class="fa fa-child" style="font-size:50px; color:#00a65a;"></i>   '+ recovered_p + '<hr></div>'+
    '<div style = "background:white;  padding:10px; border-radius:5px;font-size:20px"><label style="">ACTIVE</label><br> <i class="fa fa-user"style="font-size:50px; color:#3c8dbc;"></i>   ' +active_p + '<hr></div>'+
    '<div style = "background:white;  padding:10px; border-radius:5px;font-size:20px"><label style="">DEATHS</label><br><i class="fa fa-user-times" style="font-size:50px; color:#ff0000;"></i>   ' +dead_p + '<hr></div>'+
    '</div>'
    );
     
    // create DOM element for the marker
    const el = document.createElement('div');
    el.id = 'marker';
     
    // create the marker
    new mapboxgl.Marker(el)
    .setLngLat(monument)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

});

}
getdata()