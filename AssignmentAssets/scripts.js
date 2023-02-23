function clearErrors(){
    document.getElementById('error-content').
        innerHTML = 
        "<ul class='errors-list'>"+errors+"</ul>";
        
        document.getElementById('errors'). classList.remove
        ('d-none');
        
        document.getElementById('errors'). classList.add
        ('d-block');

}


function validateForm(){
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    var errors = "";
    
    if(isBrief(message)){
        errors = "<li>Please elaborate</li>";
    }
    
    if(isEmpty(firstName) || isEmpty(lastName) || isEmpty(email) || isEmpty(message)){
        errors = "<li>Please fill in all fields</li>";
    }
    
    if (errors != ""){
        document.getElementById('error-content').
        innerHTML = 
        "<ul class='errors-list'>"+errors+"</ul>";
        
        document.getElementById('errors'). classList.remove
        ('d-none');
        
        document.getElementById('errors'). classList.add
        ('d-block');
        
        return false;
    }
    else {
        return true;
    }
}

function isEmpty(field){
    if(field == ""){
        return true;
    }
    
    else{
        return false;
    }
}

function isBrief(field){
    if(field.length <= 21){
        return true;
    }
    
    else{
        return false;
    }
}