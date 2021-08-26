console.log('JS Loaded');//JS Test

$(document).ready(readyNow);//Loading JQ

let animalCostArray = [];//Animal cost added to array to find total
let = animalArray = [];//Saves all animals locally to be referenced later

function submitAnimal(){
    //console.log('Submit Clicked')
    let animal = {
        name: $('#nameIn').val(),
        species: $('#speciesIn').val(),
        age: $('#ageIn').val(),
        surplus: $('#surplusIn').val(),
        cost: $('#costIn').val(),
        photo: $('#photoIn').val(),
    }
    //console.log('The animal being added is', animal)

    //Append values to table
    $('.table').append(`
<tr class = "newAnimal" id = ${animal}>
                <td>${animal.name}</td>
                <td>${animal.species}</td>
                <td>${animal.age}</td>
                <td>${animal.surplus}</td>
                <td>${animal.cost}</td>
                <td>
                <button id = "photoBtn">
                See Animal
                </button>
                </td>
                <td><button class="btn btn-danger" id = "deleteBtn" >Delete</button></td>
    </tr>`)

    //Pushes cost to array
    animalCostArray.push(Number($('#costIn').val()));
    //pushes new animal into array
    animalArray.push(animal);
    //Clear values
    $('#nameIn').val('');
    $('#speciesIn').val('');
    $('#ageIn').val('');
    $('#surplusIn').val('');
    $('#costIn').val('');
    $('#photoIn').val('');

    //console.log('Values in array are', animalArray)
    calculateMonthly(animalCostArray);  
}

function calculateMonthly (animalCostArray){
    //console.log('Calc monthly running')
    //Declaring default total monthly cost
    let monthlyTotal = 0;

    //Calculate Monthly Cost
    for (let i = 0; i < animalCostArray.length; i++) {
        monthlyTotal += animalCostArray[i]
    }
    //Divide by months
    monthlyTotal = monthlyTotal/12
    //Append Cost
    $('.monthlyCost').empty();
    $('.monthlyCost').append(monthlyTotal)
    console.log('Monthly total is', monthlyTotal)
    return monthlyTotal;
}

//console.log('The animals in the array are',animalArray)

function showPhoto(){
    console.log('See Animal clicked',animalArray)

    for (let i = 0; i <animalArray.length; i++){
        if (animalArray[i] == $(this).closest(`#${animal}`))
            window.open(`${animalArray[i].photo}`)
        else{
            alert('Not a valid URL');
        }
    }

    ;
}

function readyNow(){
    console.log('JQ Loaded');
    $('#submit').on('click', submitAnimal)
    //$('#submit').on('click', calculateMonthly)
    $(`.table`).on('click', `#photoBtn`, showPhoto)
}