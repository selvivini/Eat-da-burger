$(function(){
    // Add a new burger.
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        
        let newBurger = {
            burger_name: $("#newBurger").val().trim()
            
        };
         
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });

    $('.eat-burger').on('click', function(event){
        event.preventDefault();
        let id= $(this).data('id');
        const devouredState = {
           devoured :1
        }
        // send a put request
        $.ajax('/api/burgers/'+ id,{
            type: 'PUT',
            data: devouredState
        }).then(function(){
            console.log('burger devoured');
            location.reload();
        })
        
    })
})