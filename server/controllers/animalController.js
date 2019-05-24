const animals = [
    {
        image: "https://cdn.pixabay.com/photo/2017/08/17/23/21/donkey-2653298_960_720.jpg",
        location: 'Pasture',
        species: 'Miniature Donkey',
        breed: '',
        age_range: '',
        names: ''
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/10/28/06/48/cow-2896329_960_720.jpg",
        location: 'Pasture',
        species: 'Miniature Cow',
        breed: 'Zebu',
        age_range: '',
        names: ''
    },
    {
        image: "https://images.pexels.com/photos/70369/donkey-fence-nature-outside-70369.jpeg?cs=srgb&dl=animal-close-up-donkey-70369.jpg&fm=jpg",
        location: 'Pasture',
        species: 'Donkey',
        breed: 'red',
        age_range: 'white',
        names: 'blue'
    }
]

const getAnimals = (req, res)=>{
    res.json(animals);
}
const deleteAnimal = (req, res)=>{
    const index = animals.findIndex(animal => animal.breed === req.params.breed);
    animals.splice(index, 1);
    res.json(animals);
}
const addAnimal = (req, res) =>{
    animals.push(req.body);
    res.json(animals);
}

module.exports ={
    getAnimals, deleteAnimal, addAnimal
}