function ticketForCinema(input) {

    let day = input[0];

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday": console.log("12"); break;
    }

    switch (day) {
        case "Wednesday":
        case "Thursday": console.log("14"); break;
    }
    switch (day) {
        case "Saturday":
        case "Sunday": console.log("16"); break;
    }

}
ticketForCinema(["Friday"])