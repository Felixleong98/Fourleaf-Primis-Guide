const mainQuests=[
["Shipwrecked!","Caeruleaum","Captain Squalus","—","20 currency + starter shipwreck equipment","Reach the lighthouse village."],
["Strangers in need...","Caeruleaum","First Mate Iracundi","Shipwrecked!","50 currency","Speak with the village leader."],
["Bandit Camp!","Caeruleaum","Chief Piscis","Strangers in need...","50 currency + Caeruleaum's Hope + Elite Scraps","Defeat the listed bandits and recover the heirloom."],
["Blue flower path!","Caeruleaum","Chief Piscis","Bandit Camp!","20 currency","Follow the blue-flower route to the mountain guide."],
["The Crystal Elemental","Hidden Path","Petrae","Blue flower path!","70 currency + Unbreaking","Defeat the Crystal Elemental and meet Eartep."],
["The Farmstead","Farmstead","Eartep","The Crystal Elemental","70 currency","Report to the farmstead proprietor."],
["The path to Gladius","Farmstead","Filius","The Farmstead","80 currency + Protection","Clear the undead forces and continue to Gladius."],
["Recovering Hope","Gladius","General Hasta","The path to Gladius","90 currency + Gladius + Elite Scraps","Recover the Assistance Agreement / Promissory Note."],
["Gladius' Champion","Gladius","General Hasta","Recovering Hope","100 currency + Projectile Protection","Defeat Fallen Champion Natus."],
["Bridging the gap","Gladius","General Hasta","Gladius' Champion","100 currency + Pontis Mille Helm + Elite Scraps","Defeat the Gatekeeper automaton and speak with Navita."],
["Sending a message!","Pontis Mille","Shogun Navita","Bridging the gap","30 currency + Pontis Mille Boots","Report to Fortes Bellator."],
["Mine path","Pontis Mille","Fortes Bellator","Sending a message!","40 currency + Pontis Mille Leggings","Report to the Royal Guard Centurion."],
["Goblins in the mines!","Pontis Mille","Royal Guard Centurion","Mine path","110 currency + Pontis Mille Chestplate","Clear the goblin groups and Goblin King."],
["Storm's end","Mines Bridge","Blepharo Octavius","Goblins in the mines!","130 currency + Pontis Mille Katana","Defeat the Storm Elemental and temple forces."],
["Severance payback!","Pontis Mille","Shogun Navita","Storm's end","140 currency + Pontis Mille Shield + Elite Scraps","Defeat Counselor Machiavelli and recover the Stone of Far Speech."],
["The ice village awaits","Pontis Mille","Shogun Navita","Severance payback!","140 currency + Fire Protection","Ask travelers for directions and reach Glacies."],
["Helping the north","Ice Village","Glacies Princeps","The ice village awaits","150 currency + Elite Scraps","Speak with three villagers."],
["The trial of ice","Ice Village","Glacies Princeps","Helping the north + 4 required side quests","160 currency","Defeat the trial enemies; complete the four required side quests."],
["Chill out","Ice Village","Glacies Princeps","The trial of ice","170 currency + Ice Breaker","Defeat the Ice Elemental in the temple."],
["Terravilla","Ice Village","Glacies Princeps","Chill out","170 currency + Elite Scraps","Meet Overseer Lutum."],
["Taking out the trash","Terravilla","Lutum Princeps","Terravilla","170 currency + Earth Splitter + Cooked Porkchop + Elite Scraps","Defeat Sluggers and Robber Gladiators."],
["Big trouble in a little pub","Terravilla","Lutum Princeps","Taking out the trash","170 currency + Earth's Blessing","Defeat the Bar Brawlers."],
["Strike the earth","Terravilla","Lutum Princeps","Big trouble in a little pub","180 currency + Elite Scraps","Navigate the ruins maze and defeat the Earth Elemental."],
["There and Back Again","Terravilla","Lutum Princeps","Strike the earth","180 currency + Fortune","Report Terravilla's support to Navita."],
["To the outpost","Blood Temple approach","Shogun Navita","There and Back Again","190 currency + Elite Scraps","Report to the forward outpost."],
["Blood and Fire","Blood Temple","Pyrgopolynices Synnodus","To the outpost","190 currency + Knockback","Fight through to the Blood Temple entrance."],
["The Four Guardians","Blood Temple","Pyrgopolynices Synnodus","Blood and Fire","190 currency + 4 independent 25% Blood gear rolls + Elite Scraps","Defeat the four barrier guardians."],
["Legacy of the Flame","Blood Temple","Theophylactus Junianus","The Four Guardians","300 currency + Elite Scraps","Defeat the Fire Elemental; Sanctum access is at 1193, 151, 1002."],
["There and Back Again","Blood Temple → Pontis Mille","Theophylactus Junianus","Legacy of the Flame","333 currency + Elite Scraps","Return to Pontis Mille's throne room."],
["Goodbye Primis!","Caeruleaum","Shogun Navita","There and Back Again","366 currency + Eternal Blood shield + Elite Scraps","Return to the repaired ship."]
];

const sideGroups={
"Caeruleaum":[["Arrow Hunter","Ventus Artifex","Strangers in need...","30 currency + 5 Grappling Arrows + Ruined Bow + Elite Scraps"],["Shield Hunter","Ventus Artifex","Arrow Hunter","30 currency + Artifex's Shield"],["Fish Bait","Callidus Piscatus","Strangers in need...","30 currency + Diving Helmet + Elite Scraps"],["A can of worms","Callidus Piscatus","Fish Bait","10 currency + Sharpness book"],["Monster Bait","Piscis Nemesis","A can of worms","40 currency + Monster Slaying Spear"],["Wolf Bait","Venator Pabulatus","Strangers in need...","40 currency + 10 Cooked Beef + 3 Golden Apples + Elite Scraps"]],
"Lighthouse":[["The Lighthouse Keeper","Amavit","The Crystal Elemental","Not specified"],["The Mysterious Lights","Amavit","The Lighthouse Keeper","Not specified"]],
"Farmstead":[["Lost Bretheren","Fugit Fossores","The Crystal Elemental","Not specified"],["Lucky Pickaxe","Vetus Fossores","The Farmstead","Not specified"],["Ogre-Size Problems","Vetus Fossores","The Farmstead","Not specified"]],
"Gladius":[["Who snipes the snipers?","Belli","The path to Gladius","Not specified"],["Taking back the streets","Belli","The path to Gladius","90 currency + Bane of Arthropods"],["A sinking feeling","Belli","Taking back the streets","70 currency + Elite Scraps"],["Sunken Ship","Belli","A sinking feeling","80 currency + 5 Cooked Cod"],["Leap of faith","Belli","The path to Gladius","Not specified"],["Supplying problems","Cibus","The path to Gladius","Not specified"],["Supplying more problems","Cibus","Supplying problems","100 currency + Elite Scraps"]],
"Pontis Mille":[["Enchanted!","Fortes Bellator","Bridging the gap","Not specified"],["Let them know!","Fortes Bellator","Sending a message!","Not specified"],["A quick delivery","Fortes Bellator","Sending a message!","Not specified"],["Ask Jeeves","Hegio Remus","A quick delivery","Not specified"],["Serious sewage","General Rogerius","Sending a message!","Not specified"],["Late delivery","Delphium Calpurnius","Sending a message!","Not specified"],["Big brown logs","General Cylindrus","Sending a message!","50 currency + Elite Lucky Ticket"],["Where is he now","Rodenus Palis","Sending a message!","330 currency + Elite Lucky Ticket"],["The Groves Call","General Bromia","Sending a message!","Not specified"],["Field check","Godefridus Novation","Mine path","Not specified"],["Stargazing","Fortes Bellator","Serious Sewage + To Lycan or Not to Lycan + Tree Climbing Elf Bandits","50 currency"],["Stay A While and Listen","Virgo Dexippus","Stargazing","140 currency + 3 Enchanted Golden Apples"],["The Battle for Gladius","Fortes Bellator","Stay A While and Listen","150 currency + Allegiance sword"]],
"Pontis Redwoods":[["Nasty little bandits!","Ligna Crispian","Sending a message!","240 currency + Forest Boots + Elite Scraps"],["It is Reyn time!","Reynus Protectoris","Sending a message!","120 currency + 10 Bread + Sweeping Edge"],["Need a smoke","Lyco Lupicinus","It is Reyn time!","120 currency + 12 Golden Apples"],["To lycan or not to lycan","Magnus Castorea","Big brown logs","130 currency + Fur Leggings"]],
"Fields / Slums / Farms / Mines":[["Camping Hunters","Augustina Verrucosis","Sending a message!","110 currency + Piercing"],["Do It Yourself","Scribonia Ingenvinus","Camping Hunters","130 currency + Hunters Bow"],["Not On My Farm","Milonia Majus","Mine path","220 currency + Elite Lucky Ticket"],["Surprise Me With Flour","Milonia Majus","Not On My Farm","Not specified"],["Berry Crazed Wolves","Dordalus Nasica","Mine path","120 currency + Elite Lucky Ticket"],["Fruity Hound","Dordalus Nasica","Berry Crazed Wolves","120 currency + Large Berry charm + Elite Scraps"],["Wellness","Volumnia Zoilus","Mine path","110 currency"],["Hunter Three Times Hunter","Magmus Hypnos","Wellness","130 currency + Hunters Pride chestplate + Elite Scraps"],["Feeding the Hungry","Daemones Maritialis","Mine path","110 currency + Elite Lucky Ticket"],["Goblined Up In The Maze","Royal Guard Centurion","Mine path","110 currency + Runed Goblin Axe"]],
"The Groves":[["Population Control","King Nemian","The Groves Call","120 currency + Elite Lucky Ticket"],["Into the Next Hole","King Nemian","Population Control","50 currency + Luck of the Sea"],["Tree Climbing Elf Bandits","Phygia Gorgonius","Into the Next Hole","120 currency + Elf Pearl Leggings"],["Acrobatics","Posuere Hominem","The Groves Call","120 currency + Diamond Tree Boots"],["Caught in the Web","King Nemian","Population Control","130 currency + Spider-legs Boots"],["Feeding the Sick","King Nemian","Population Control","60 currency + Elite Lucky Ticket"],["Do Not Ask Jeeves","Alanus Secundas","Feeding the Sick","60 currency + Elite Scraps"],["Elf stole from my shelf","Luxuria Gorgonius","Into the Next Hole","120 currency + 5 Rabbit Stew + Elite Scraps"]],
"Ice Village":[["Catch me if you can","Romanus Superbus","The ice village awaits","300 currency + Elite Lucky Ticket"],["Get them off my back!","Alanus Isatis","The ice village awaits","150 currency"],["Taking the bait","Theopropides Nero","The ice village awaits","150 currency + Northern Rod"],["Make them go ouch","Domina Violet","The ice village awaits","150 currency + Violet's Spare Leggings + Thorns"],["Silence","Modestus Eulogius","Helping the north","200 currency + Boomers Helm + 10 Bread + Elite Scraps"],["Run away daughter","Sparax Ennodius","Helping the north","160 currency + Elite Lucky Ticket"],["Living nightmares","Sestia Ennodius","Run away daughter","160 currency + Fur Coat + 10 Cooked Beef + Elite Scraps"],["Gotta keep warm","Grania Cecilius","The ice village awaits","160 currency"],["Gotta see Jeeves","Severinus Martius","Gotta keep warm","160 currency + Elite Lucky Ticket"],["Objection!","Adrius Calpornius","Helping the north","Hidden quest / reward not specified"],["Treats for the punished","Titia Calenus","Helping the north","160 currency + Punch"],["Bell banger","Eleusium Festus","Helping the north","160 currency + 10 Cooked Beef guaranteed + 50% chance of another 10 + Elite Scraps"],["All out of chains","Philolaches Triferus","Helping the north","160 currency + Hunter"],["Wanna make a snowman","Luxuria Placidus","Helping the north","160 currency + Frost Boots (90% chance)"]],
"Terravilla":[["Bipedal examination","Plautia Suilius","Terravilla","170 currency + 10 Cooked Beef + Elite Scraps"],["Terrifying","Plautia Suilius","Bipedal examination","170 currency + Elite Lucky Ticket"],["Drowning terror","Plautia Suilius","Terrifying","170 currency + Fish Charm"],["Hog on my porch","Dorippa Sarimarcus","Terravilla","400 currency + Hog/Terravilla Helmet + Flame"],["Razorbag","Telestis Senna","Terravilla","400 currency + 20 Cooked Porkchop + Elite Scraps"]]
};

const required=["Catch me if you can","Taking the bait","Get them off my back!","Make them go ouch"];
const secondary=["Stargazing","Stay A While and Listen","The Battle for Gladius"];
const quests=mainQuests.map((q,i)=>({id:i+1,type:"main",name:q[0],region:q[1],npc:q[2],pre:q[3],reward:q[4],objective:q[5]}));
for(const [region,list] of Object.entries(sideGroups)) for(const q of list) quests.push({id:null,type:required.includes(q[0])?"required":secondary.includes(q[0])?"secondary":"side",name:q[0],region,npc:q[1],pre:q[2],reward:q[3],objective:"See the in-game quest tracker for the detailed objective."});

const search=document.getElementById("search"), typeFilter=document.getElementById("typeFilter"), regionFilter=document.getElementById("regionFilter"), results=document.getElementById("results"), empty=document.getElementById("empty");
const params=new URLSearchParams(location.search);
[...new Set(quests.map(q=>q.region))].sort().forEach(r=>regionFilter.insertAdjacentHTML("beforeend",`<option value="${r}">${r}</option>`));
if(params.get("region")) regionFilter.value=params.get("region");
if(params.get("type")) typeFilter.value=params.get("type");
document.getElementById("sideCount").textContent=quests.filter(q=>q.type==="side").length+" side";

function render(){
 const s=search.value.toLowerCase().trim(), t=typeFilter.value, r=regionFilter.value;
 const out=quests.filter(q=>(t==="all"||q.type===t)&&(r==="all"||q.region===r)&&(!s||[q.name,q.region,q.npc,q.pre,q.reward,q.objective].join(" ").toLowerCase().includes(s)));
 results.innerHTML=out.map(q=>`<article class="quest" onclick="openQuest(q)" style="cursor:pointer">
  <div class="quest-top"><span class="number">${q.id?"MAIN #"+q.id:q.type.toUpperCase()}</span><span class="tag">${q.region}</span></div>
  <h3>${q.name}</h3>
  <div class="meta">👤 ${q.npc}</div>
  <div class="detail"><b>Prerequisite</b><br>${q.pre}</div>
  <div class="detail"><b>Objective</b><br>${q.objective}</div>
  <div class="detail reward"><b>🎁 Reward</b><br>${q.reward}</div>
 </article>`).join("");
 empty.classList.toggle("hidden",out.length!==0);
 results.classList.toggle("hidden",out.length===0);
}
[search,typeFilter,regionFilter].forEach(el=>el.addEventListener("input",render));
document.querySelectorAll(".region-card").forEach(b=>b.addEventListener("click",()=>{regionFilter.value=b.dataset.region;location.hash="quests";render()}));

const timeline=document.getElementById("timeline");
timeline.innerHTML=mainQuests.map((q,i)=>`<div class="step"><div class="n">QUEST ${i+1}</div><h3>${q[0]}</h3><p>${q[1]} • ${q[2]} • Reward: ${q[4]}</p></div>`).join("");
render();
function openQuest(q){const slug=(q.id?String(q.id).padStart(2,"0")+"-"+q.name:q.type+"-"+q.name).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""); location.href="quests/"+slug+".html";}
