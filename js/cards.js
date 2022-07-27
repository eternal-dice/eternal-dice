const CARDS = {
    f1_1: [
        "Nothing",
        x=>`Kills your favorite anime characters`,
        x=>data.round<10,
        x=>{},
    ],
    f1_2: [
        "Nothinger",
        x=>`It's too late to run...`,
        x=>data.round>10&&data.round<=30,
        x=>{},
    ],
    f1_3: [
        "Nothingest",
        x=>`CONSOLE: IP successfully sent to Democratic Republic of Korea`,
        x=>data.round>30,
        x=>{},
    ],
    f2_1: [
        "Energy",
        x=>`Increase ${['your',"enemy's"][x]} max energy by <span class="green">2</span>`,
        x=>data[x].maxEnergy<=20,
        x=>{data[x].maxEnergy+=2},
    ],
    f2_2: [
        "More Energy",
        x=>`Increase ${['your',"enemy's"][x]} max energy by <span class="green">3</span>`,
        x=>data[x].maxEnergy>=20&&data[x].maxEnergy<=50,
        x=>{data[x].maxEnergy+=3},
    ],
    f2_3: [
        "Even More Energy",
        x=>`Increase ${['your',"enemy's"][x]} max energy by <span class="green">5</span>`,
        x=>data[x].maxEnergy>=30,
        x=>{data[x].maxEnergy+=5},
    ],
    f3_1: [
        "Minimum Incrementer",
        x=>`Increase ${['your',"enemy's"][x]} minimum number of side by <span class="green">1</span>`,
        x=>data[x].min_s<data[x].max_s&&data[x].min_s<10,
        x=>{data[x].min_s+=1},
    ],
    f3_2: [
        "Minimum Increaser",
        x=>`Increase ${['your',"enemy's"][x]} minimum number of side by <span class="green">2</span>`,
        x=>data[x].min_s<data[x].max_s&&data[x].min_s>=5&&data[x].min_s<35,
        x=>{data[x].min_s+=2},
    ],
    f3_3: [
        "Minimum Increaser+",
        x=>`Increase ${['your',"enemy's"][x]} minimum number of side by <span class="green">3</span>`,
        x=>data[x].min_s<data[x].max_s&&data[x].min_s>=30,
        x=>{data[x].min_s+=3},
    ],
    f4_1: [
        "Maximum Incrementer",
        x=>`Increase ${['your',"enemy's"][x]} maximum number of side by <span class="green">1</span>`,
        x=>data[x].max_s<12,
        x=>{data[x].max_s+=1},
    ],
    f4_2: [
        "Maximum Increaser",
        x=>`Increase ${['your',"enemy's"][x]} maximum number of side by <span class="green">2</span>`,
        x=>data[x].max_s>=8&&data[x].max_s<35,
        x=>{data[x].max_s+=2},
    ],
    f4_3: [
        "Maximum Increaser+",
        x=>`Increase ${['your',"enemy's"][x]} maximum number of side by <span class="green">3</span>`,
        x=>data[x].max_s>=30,
        x=>{data[x].max_s+=3},
    ],
    f5_1: [
        "Side Translation",
        x=>`Increase ${['your',"enemy's"][x]} minimum & maximum number of side by <b class='green'>1</b>`,
        x=>Math.random()>1/2,
        x=>{
            data[x].min_s += 1
            data[x].max_s += 1
        },
    ],
    f5_2: [
        "Side Expansion",
        x=>`Increase ${['your',"enemy's"][x]} minimum & maximum number of side by <b class='green'>2</b>`,
        x=>Math.random()>1/2&&data[x].min_s>=20,
        x=>{
            data[x].min_s += 2
            data[x].max_s += 2
        },
    ],
    f5_3: [
        "Side Overflow",
        x=>`Increase ${['your',"enemy's"][x]} minimum & maximum number of side by <b class='green'>4</b>`,
        x=>Math.random()>1/2&&data[x].min_s>=50,
        x=>{
            data[x].min_s += 4
            data[x].max_s += 4
        },
    ],
    f6_1: [
        "Multiplier",
        x=>`Increase ${['your',"enemy's"][x]} multiplier by <b class='green'>0.3</b>`,
        x=>data[x].multiplier<=10,
        x=>{data[x].multiplier+=0.3},
    ],
    f6_2: [
        "Extra Multiplier",
        x=>`Increase ${['your',"enemy's"][x]} multiplier by <b class='green'>0.5</b>`,
        x=>data[x].multiplier>=4&&data[x].multiplier<=30,
        x=>{data[x].multiplier+=0.5},
    ],
    f6_3: [
        "Extreme Multiplier",
        x=>`Increase ${['your',"enemy's"][x]} multiplier by <b class='green'>1</b>`,
        x=>data[x].multiplier>=10,
        x=>{data[x].multiplier+=1},
    ],
}
