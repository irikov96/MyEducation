function salary(input) {
    let openedTabs = Number(input[0]);
    let salary = Number(input[1]);
    let inputL = input.length;

    for (i = 2; i <= inputL; i++) {
        let tabs = input[i];

        switch (tabs) {
            case 'Facebook': salary -= 150;break;
            case 'Instagram': salary -= 100;break;
            case 'Reddit': salary -= 50;break;
        }
        
        if(salary <= 0){
            console.log('You have lost your salary.');
            break;
        }
    }

    if(salary > 0){
        console.log(salary)
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])

