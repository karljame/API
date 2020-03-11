let occupations = {
    9412: {name: "köökiabiline", rate: 0},
    7221: {name: "sepp", rate: 0},
    7233: {name:"Põllu- ja tööstusmasinate mehaanikud ja remonditöökojad", rate: 0 },
    7513: {name:"piima toote töötaja", rate: 0 },
    7516: {name: "tobacco töötaja ", rate: 0 },

}
const occupationSelect = document.getElementById('occupation-select')
const salaryDiv = document.getElementById('salary')

for (const key in occupations ) {
    const option = document.createElement('option')
    option.value = key
    option.text = occupations[key].name
    occupationSelect.append(option)
    console.log(option)  
    

}

occupationSelect.addEventListener('change', () => {
    if ( occupationSelect.value) {
        salaryDiv.innerHTML = occupation[occupationSelect.value].rate
    }
})    


fetch("http://andmebaas.stat.ee/sdmx-json/data/PA633/DBL322+DBL323+DBL329+DBL350+DBL351+DBL353+DBL432.3.1/all?startTime=2010&endTime=2010&dimensionAtObservation=allDimensions")
.then(Response => {
    return Response.json()
        
})
.then(data => {
    console.log(data)



    data.structure.dimensions.observation[0].values.forEach((el, i) => {
        const occupationkey = (el.name.split(' ')[0])
        const dataSetKey = i + ':0:0:0'
        console.log(i)
        console.log(el.name.split(' ')[0])
        console.log(dataSetKey)
        console.log(data.dataSets[0].observations[dataSetKey])
        occupations[occupationkey].rate = data.dataSets[0].observations[dataSetKey][0]


    });
    console.log(occupations)
})
