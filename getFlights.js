const axios = require('axios')
const fs = require('fs')

let allSourcesUrl = 'https://www.tui.co.uk/searchpanel/departureairport/fo?startDate=&endDate=&to%5B%5D=&searchKey=&r_tp=B'

const getFlights = async () => {
  let res = await axios.get(allSourcesUrl)
  console.log(res.data.length)
  let sources = res.data.filter(i => i.available)
  let routes = []
  for (let i = 0; i < sources.length; ++i) {
    let source = sources[i]
    if (source.available) {
      console.log((i + 1) + ' of ' + sources.length, source.id, source.available)
      let destinationsUrl = 'https://www.tui.co.uk/searchpanel/arrivalairport/fo?startDate=&endDate=&from%5B%5D=' + source.id + '&searchKey=&r_tp=B'
      let destRes = await axios.get(destinationsUrl)
      let destinations = destRes.data.filter(i => i.available)
      for (let j = 0; j < destinations.length; ++j) {
        let destination = destinations[j]
        console.log('  ' + source.id + ' > ' + destination.id)
        routes.push({source: source.id, destination: destination.id})
      }
    }
  }
  console.log(routes.length + ' routes')
  fs.writeFileSync('routes.json', JSON.stringify(routes, null, 4))
}

getFlights()
