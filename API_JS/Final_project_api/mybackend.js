async function getCovidStats(){
    try {
      const response = await fetch('https://api.apify.com/v2/datasets/sFSef5gfYg3soj8mb/items?format=json&clean=1');
      const phil = await response.json();
      covid19 = phil[611];
    }
    catch (err) {E
      console.log(`Error: ${err}`);
    }
    finally {
      let infected = `${covid19['infected']}`;
      let tested = `${covid19['tested']}`;
      let recovered = `${covid19['recovered']}`;
      let Deaths = `${covid19['deceased']}`;
      let pui = `${covid19['activeCases']}`;
      let pum = `${covid19['unique']}`;
      document.getElementById('infected-num').innerHTML = infected.replace(/(.)(?=(.{3})+$)/g,"$1,");
      document.getElementById('tested-num').innerHTML = tested.replace(/(.)(?=(.{3})+$)/g,"$1,");
      document.getElementById('recovered-num').innerHTML = recovered.replace(/(.)(?=(.{3})+$)/g,"$1,");
      document.getElementById('deaths-num').innerHTML = Deaths.replace(/(.)(?=(.{3})+$)/g,"$1,");
      document.getElementById('pui-num').innerHTML = pui.replace(/(.)(?=(.{3})+$)/g,"$1,");
      document.getElementById('pum-num').innerHTML = pum.replace(/(.)(?=(.{3})+$)/g,"$1,");
    }
  }
  getCovidStats();
  async function charItinfected(){
      const Data = await getdata();
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Data.xs,
          datasets: [{
            label: 'Philippines Covid 19 infected',
            data: Data.ys,
            fill: false,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor:  'rgba(255, 99, 132, 1)',  
            borderWidth: 1
        }]
      },
    }); 
  }
  charItinfected();
  async function charItrecovered(){
      const Data = await getdata1();
      const ctx = document.getElementById('myChart1').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Data.xs,
          datasets: [{
          label: 'Philippines Covid 19 Recovered',
          data: Data.ys,
          fill: false,
          backgroundColor: '#00a65a',
          borderColor:  '#00a65a',  
          borderWidth: 1
        }]
      },
    }); 
  }
  charItrecovered();
  async function getdata(){
    const xs = [];
    const ys = [];
    const responce = await fetch('csv/stat.csv');
    const data = await responce.text();
    const table = data.split('\n')
    table.forEach(row =>{
      const columns = row.split(',');
      const year = columns[0];
      xs.push(year);
      const temp = columns[1]; 
      ys.push(parseFloat(temp) + 14)
    });
    return {xs , ys}
  }       

  async function getdata1(){
    const xs = [];
    const ys = [];
    const responce = await fetch('csv/stat.csv');
    const data = await responce.text();
    const table = data.split('\n')
    table.forEach(row =>{
    const columns = row.split(',');
    const year = columns[0];
    xs.push(year);
    const temp = columns[2]; 
    ys.push(temp)
    // console.log(year , temp);
    });
    return {xs , ys}
  }
  
 






