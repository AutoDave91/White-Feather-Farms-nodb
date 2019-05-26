const family = [
    {
        image: '',
        name: 'David L Newman',
        job: 'Operations Manager',
        fav_animal: 'Maverick the mini-donkey',
        fav_activity: 'mowing the field',
        children: ['David W Newman',', ', 'Megan Beattie']
    },
    {
        image: '',
        name: 'Christina Newman',
        job: 'Office Manager/HR',
        fav_animal: 'Penny the pig',
        fav_activity: "rubbing Penny's belly",
        children: ['David W Newman',', ', 'Megan Beattie']
    },
    {
        image: '',
        name: 'David W Newman',
        job: '',
        fav_animal: 'the pigs',
        fav_activity: 'shooting',
        children: ['Rylie Newman']
    },
    {
        image: '',
        name: 'April Newman',
        job: 'NICU/PICU Respiratory Therapist',
        fav_animal: 'the goats',
        fav_activity: 'feeding the goats',
        children: ['Rylie Newman']
    },
    {
        image: '',
        name: 'Alex Beattie',
        job: ['Fire Fighter', ', ', 'USAF reservist'],
        fav_animal: 'the cows',
        fav_activity: 'shooting',
        children: ['Michael Beattie',', ', 'Kathryn Beattie']
    },
    {
        image: '',
        name: 'Megan Beattie',
        job: 'Personal Trainer',
        fav_animal: 'the goats',
        fav_activity: 'feeding the goats animal crackers',
        children: ['Michael Beattie',', ', 'Kathryn Beattie']
    }
]

const getFamily = (req, res)=>{
    res.json(family);
}

module.exports ={
    getFamily
}