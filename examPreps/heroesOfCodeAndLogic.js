function heroesOfCodesAndLogic(input){
    let numberOfHeroes = Number(input.shift());
    let heroesStore = {};
    for(let i=0; i<numberOfHeroes; i++){
        let [hero, hp, mana] = input.shift().split(" ")
        if(!heroesStore.hasOwnProperty(hero)){
            heroesStore[hero] = {}
        }
        heroesStore[hero][0] = Number(hp)
        heroesStore[hero][1] = Number(mana)
    }
    
    let line = input.shift().split(' - ');
    while(line[0]!=="End"){
        let command = line[0];
        switch(command){
            case "CastSpell":
                let heroName = line[1];
                let manaNeeded = Number(line[2]);
                let spellName = line[3];
                if(heroesStore.hasOwnProperty(heroName)){
                    if(heroesStore[heroName][1] >= manaNeeded){
                        heroesStore[heroName][1] -= manaNeeded;
                        console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesStore[heroName][1]} MP!`);
                    }else{
                        console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                    }
                }
                break;
            case "TakeDamage":
                isDead = false;
                let nameOfHero = line[1];
                let damage = Number(line[2]);
                let attacker = line[3];
                if(heroesStore.hasOwnProperty(nameOfHero)){
                    if(heroesStore[nameOfHero][0] - damage > 0){
                        heroesStore[nameOfHero][0]-=damage;
                        console.log(`${nameOfHero} was hit for ${damage} HP by ${attacker} and now has ${heroesStore[nameOfHero][0]} HP left!`);
                    }else{
                        console.log(`${nameOfHero} has been killed by ${attacker}!`);
                        isDead = true;
                        if(isDead){
                            delete(heroesStore[nameOfHero])
                        }
                    }
                }
                break;
            case 'Recharge':
                let currentHero = line[1];
                let recharge = Number(line[2]);
                if(heroesStore.hasOwnProperty(currentHero)){
                    if(heroesStore[currentHero][1] + recharge > 200){
                        let currentRecharge = 200 - heroesStore[currentHero][1] ;
                        console.log(`${currentHero} recharged for ${currentRecharge} MP!`);
                        heroesStore[currentHero][1] = 200;
                    }else{
                        heroesStore[currentHero][1] += recharge
                        console.log(`${currentHero} recharged for ${recharge} MP!`)
                    }
                }
                break;
            case "Heal":
                let nameOfHealedHero = line[1];
                let hpToHeal = Number(line[2]);
                if(heroesStore[nameOfHealedHero][0] + hpToHeal > 100){
                    let currentHPRecharge = 100 - heroesStore[nameOfHealedHero][0];
                    console.log(`${nameOfHealedHero} healed for ${currentHPRecharge} HP!`);
                    heroesStore[nameOfHealedHero][0] = 100;
                }else{
                    heroesStore[nameOfHealedHero][0] += hpToHeal
                    console.log(`${nameOfHealedHero} healed for ${hpToHeal} HP!`)
                }

                break;

        }
        line = input.shift().split(' - ');
    }
    for(let [name, values] of Object.entries(heroesStore)){
        console.log(name);
        console.log(`  HP: ${values[0]}`);
        console.log(`  MP: ${values[1]}`);
    }
}
heroesOfCodesAndLogic(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']
    )