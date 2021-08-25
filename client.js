console.log('JS Loaded');//JS Test

$(document).ready(readyNow);//Loading JQ

let animalArray = [];//Animal cost added to array to find total

function submitAnimal(){
    console.log('Submit Clicked')
    let animal = {
        name: $('#nameIn').val(),
        species: $('#speciesIn').val(),
        age: $('#ageIn').val(),
        surplus: $('#surplusIn').val(),
        cost: $('#costIn').val(),
        photo: $('#photoIn').val(),
    }
    console.log('The animal being added is', animal)

    //Append values to table
    $('.table').append(`
<tr class = "newRow">
                <td id = "appLn">${animal.name}</td>
                <td id = "appId">${animal.species}</td>
                <td id = "appTitle">${animal.age}</td>
                <td id = "appSalary">${animal.surplus}</td>
                <td id = "appSalary">${animal.cost}</td>
                <td id = "appSalary">${animal.photo}</td>
                <td><button class="btn btn-danger" id = "deleteBtn" >Delete</button></td>
</tr>`)

    //Clear values
    $('#nameIn').val('');
    $('#speciesIn').val('');
    $('#ageIn').val('');
    $('#surplusIn').val('');
    $('#costIn').val('');
    $('#photoIn').val('');
}

function readyNow(){
    console.log('JQ Loaded');
    $('#submit').on('click', submitAnimal)
}