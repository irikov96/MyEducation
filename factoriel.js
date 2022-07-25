function factoriel(a, b){
    if (a <0){
        return
    }
    if (a === 0){
        return 1
    }
    return a * factoriel(a-1)
}


