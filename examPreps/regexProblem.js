function bossRush(data){
let number = Number(data.shift());
let regEx = /[|]([A-Z]{4,})[|]:#([A-Z]{1,}[a-z]+\s[A-Za-z]{1,})#/
for(let i = 0; i<number; i++){
    let text = data[i];
    let executable = regEx.exec(text);
    if(executable === null){
        console.log('Access denied!');
        continue;
    }
    let name = executable[1];
    let title = executable[2];
    console.log(`${name}, The ${title}`);
    console.log(`>> Strength: ${name.length}`)
    console.log(`>> Armor: ${title.length}`);
    
}
}bossRush((['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])
)