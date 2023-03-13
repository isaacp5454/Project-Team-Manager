function generateCard(employee){
    var t;
    if (employee.getRole()==="Manager"){
        t=employee.getOfficeNumber()
        
    } else if (employee.getRole()==="Intern"){
        t=employee.getSchool()
    }
    else if (employee.getRole()==="Engineer"){
        t=`<a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
    
    }
    var card= 
    `<div class="col">
        <div class="card text-center" style="width: 18rem;">
            <div class="card-head">
                <h2>${employee.getName()}</h2>
                <h4>${employee.getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${employee.getID()}</li>
                    <li class="list-group-item"><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">${t}</li>
                </ul>
            </div>
        </div>
    </div>`;
    return card;
}
function employeeCards(employees){
    var cards= "";
    employees.forEach(employee => {
        cards += generateCard(employee);
    });
    return cards;
}
function generateHTML(employees){
    var topStuff = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team!</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    
    <body>
        <header class = "text-center"><h1>My Team!</h1></header>
        <div class="container text-center mt-4" >
            <div class="row align-items-end">`;
    var bottomStuff= `</div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>

</body>

</html>`;
    return (topStuff+employeeCards(employees)+bottomStuff);
}

module.exports = {generateHTML}