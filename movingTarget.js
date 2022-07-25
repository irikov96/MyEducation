function movingTarget(array) {
    let targets = array.shift().split(" ").map(Number)
    let command = array.shift().split(' ')

    while (command[0] !== 'End') {
        switch (command[0]) {
            case 'Shoot':
                for (let i = 0; i < targets.length; i++) {
                    if (i === Number(command[1])) {
                        targets[i] -= Number(command[2])
                        if (targets[i] <= 0) {
                            targets.splice(i, 1)
                        }
                    }
                }
                break;
            case 'Add':
                let index = Number(command[1]);
                let value = Number(command[2]);
                if (index >= 0 && index < targets.length) {
                    targets.splice(index, 0, value)
                }else{
                console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                let strikeIndex = Number(command[1]);
                let strikeDistance = Number(command[2]);
                if (strikeIndex + strikeDistance <= targets.length - 1 && strikeIndex - strikeDistance >= 0) {
                    targets.splice(strikeIndex - strikeDistance, strikeDistance * 2 + 1)
                } else {

                    console.log('Strike missed!');
                }
                break;
        }
        command = array.shift().split(' ')
    }
    console.log(targets.join("|"));
}
movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"])

