function stateFarm(data){
let dataArr = data.split("\n\n")
console.log(dataArr)
let dataset1=dataArr[0]
let dataset2=dataArr[1]

//dataArr = [‘Year Location #_of _Fires Population\n1991 Brazil 36 23456\n1993 Argentina 22 123’ , ’Year Total_of_Fires\n1991 25\n1992 12\n’]

let datarows1 = dataset1.split("\n")
let datarows2 = dataset2.split("\n")

// datarows1 = [‘Year Location #_of _Fires Population,
// 1991 Brazil 36 23456,
// 1993 Argentina 22 123]

// datarows2=[Year Total_of_Fires,
// 1991 25,
// 1992 12’]

let datasetobj1 = {yearIndex: null, firesIndex: null, yearsToFires: {}}
let datasetobj2 = {columnNames: [], yearsToFires: {}}

console.log(datarows1)
console.log(datarows2)

for (let i = 0; i<datarows2.length; i++) {
    console.log(i, datarows2.length)
//in the loop we want to map the years to the total fires
    let columns = datarows2[i].split(" ");
	//within each row map the column names into a property
    console.log(columns)
	if(i === 0) {
		for(let n = 0; n <columns.length; n++) {
	   		datasetobj2.columnNames.push(columns[n])
		}
	} else {
        if (!datasetobj2.yearsToFires[columns[0]]) {
            datasetobj2.yearsToFires[columns[0]] = parseInt(columns[1])

		} else {
			datasetobj2.yearsToFires[columns[0]] += parseInt(columns[1])
		}
    
    }

}


for(let i = 0; i <datarows1.length; i++) {
	let columns = datarows1[i].split(" ")
	if (i === 0) {
		//find indices of relevant columns based on datasetobj2.columnNames
		for (let n=0; n<columns.length; n++) {
			if (columns[n] === datasetobj2.columnNames[0]) {
				datasetobj1.yearIndex = n
            } else 
            // if (columns[n] === datasetobj2.columnNames[1]) 
            {
                datasetobj1.firesIndex = n
                console.log(datasetobj1.firesIndex)
            }
        }
	} else {
        if (!datasetobj1.yearsToFires[columns[datasetobj1.yearIndex]]) {
            datasetobj1.yearsToFires[columns[datasetobj1.yearIndex]] = parseInt(columns[datasetobj1.firesIndex])
		} else {
			datasetobj1.yearsToFires[columns[datasetobj1.yearIndex]] += parseInt(columns[datasetobj1.firesIndex])
		}
    }
}

for ( let year in datasetobj1.yearsToFires) {
    console.log(datasetobj1)
    console.log(datasetobj2)
	if (!datasetobj2.yearsToFires[year]) {
	    return false
    }
    if (datasetobj2.yearsToFire[year]  !== datasetobj1.yearsToFire[year]) {
        return false
    }
}

return true
}

let string = "Year Location #_of _Fires Population\n1991 Brazil 36 23456\n1993 Argentina 22 123\n\nYear Total_of_Fires\n1991 25\n1992 12"
stateFarm(string);

// console.log(stateFarm("Year Location #_of _Fires Population\n1991 Brazil 36 23456\n1993 Argentina 22 123\n\nYear Total_of_Fires\n1991 36\n1993 22"))