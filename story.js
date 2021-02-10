//edit this to edit story v

const p1 = 'Jeff';    //peasent1
const p2 = 'Ralph';   //peasent2
const kn = 'harry';   //king name
const g = '5000';     //gold
const gpb = '80';     //gold per bazooka
const bpd = '2';      //bazookas per dragon
const d = '10';       //dragons
const ksn = 'morda';  //kingdom's name
const kr = '20'       //the kings reward for taking out a dragon

//edit this to edit story ^

const bn = d * bpd     ;    //bazookas needed
const bc = bn * gpb ;  //gold to bazooka cost
const bcg = g - bc      ;   //how much gold is left
const gkr = kr * d ;    //how much gold the king is rewarding in total
const gaa = bcg - gkr ; //gold after attack

console.log(`\n${p1}: SIRE!! Dragons are attacking the castle.`);
console.log(`\n${kn}: We need bazookas to take them down!`);
console.log(`\n${kn}: We need to defend ${ksn}!`);

if (bcg >= 0) {

     console.log(`\n${p2}: SIRE!! If we buy the bazookas need we would have ${bcg} gold left.  `);
     console.log(`\n${kn}: Defend ${ksn} with honor!`);
     console.log(`\n${kn}: For each dragon that a person takes out you will be rewarded ${kr} gold per dragon`);

     if (gaa >= 0) {

     console.log(`\n${p2}: SIRE!! If you did that we would have ${gaa} gold left.  `);
 
     }
    
     if (gaa < 0) {

     console.log(`\n${p2}: SIRE!! If you did that we would need ${gaa * -1} more gold.`);
        
    }
}

if (bcg < 0) {

     console.log(`\n${p2}: SIRE!! If we buy the bazookas need we would need ${bcg * -1} more gold.`);
     console.log(`\n${kn}: we will be in debt but we will be alive so,`);
     console.log(`\n${kn}: Defend ${ksn} with honor!`);
     console.log(`\n${kn}: For each dragon that a person takes out you will be rewarded ${kr} gold per dragon`);

     if (gaa >= 0) {

     console.log(`\n${p2}: SIRE!! If you did that we would have ${gaa + bcg} gold left.  `);

     }

     if (gaa < 0) {

     console.log(`\n${p2}: SIRE!! If you did that we would need ${(gaa + bcg) * -1} more gold.`);
   
     }
}

