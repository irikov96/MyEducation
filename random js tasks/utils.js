/*
The task is to 
1.Change the value of the header element in HTML.
2.Create a toggle block on the See review button
3.Collect all the container elements in a array.
*/

//this fnct changes element with given id in the HTML. Invoking it changes the value of the html element
function showMessage(message) {
    document.getElementById('message').textContent = message;
};
// This creates a toggle block on the SEE Review button.
const button = document.getElementById("see-review");
button.addEventListener('click', function(){
    const review = document.getElementById("review");
    if(review.classList.contains("d-none")){
        review.classList.remove("d-none");
        button.textContent = "CLOSE REVIEW"
        
    }else{
        review.classList.add("d-none");
        button.textContent = "SEE REVIEW";
    }
    
})

// this stores the elements with class container
const containers = document.getElementsByClassName('container');