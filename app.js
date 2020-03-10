let occupations = {
    9412: {name: "köökiabiline", rate: 0},
    7221: {name: "sepp", rate: 0},
    7233: {name:"Põllu- ja tööstusmasinate mehaanikud ja remonditöökojad", rate: 0 },
    7513: {name:"piima toote töötaja", rate: 0 },
    7516: {name: "tobacco töötaja ", rate: 0 },
}

fetch("http://andmebaas.stat.ee/sdmx-json/data/PA633/DBL322+DBL323+DBL329+DBL350+DBL351+DBL353+DBL432.3.1/all?startTime=2010&endTime=2010&dimensionAtObservation=allDimensions")
.then(Response => {
    return Response.json()
        
})
.then(data => {
    console.log(data)

    data.structure.dimensions.observation[0].values.forEach((el, i) => {
        const occupationskey = el.name.split(' ')
        console.log(el.name.split(' '))    
    });
  
})
