const animals = [
    {
        image: "https://cdn.pixabay.com/photo/2017/08/17/23/21/donkey-2653298_960_720.jpg",
        location: 'Pasture',
        species: 'Miniature Donkey',
        breed: '1',
        age_range: '2',
        names: '3, 4, 5',
        fun: 'c-mon man!!'
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/10/28/06/48/cow-2896329_960_720.jpg",
        location: 'Pasture',
        species: 'Miniature Cow',
        breed: 'Zebu',
        age_range: '',
        names: '',
        fun: 'c-mon man!!'
    },
    {
        image: "https://images.pexels.com/photos/70369/donkey-fence-nature-outside-70369.jpeg?cs=srgb&dl=animal-close-up-donkey-70369.jpg&fm=jpg",
        location: 'Pasture',
        species: 'Donkey',
        breed: 'red',
        age_range: 'white',
        names: 'blue',
        fun: 'c-mon man!!'
    },
    {
        image: "https://live.staticflickr.com/1933/44541002854_ae4d7cd797_b.jpg",
        location: 'yard',
        species: 'Duck',
        breed: 'donno',
        age_range: 'white',
        names: 'blue',
        fun: 'c-mon man!!'
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/08/17/23/21/donkey-2653298_960_720.jpg",
        location: 'Pasture',
        species: 'Miniature Donkey2',
        breed: '',
        age_range: '',
        names: '',
        fun: 'c-mon man!!'
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/10/28/06/48/cow-2896329_960_720.jpg",
        location: 'Pasture',
        species: 'Miniature Cow2',
        breed: 'Zebu',
        age_range: '',
        names: '',
        fun: 'c-mon man!!'
    },
    {
        image: "https://images.pexels.com/photos/70369/donkey-fence-nature-outside-70369.jpeg?cs=srgb&dl=animal-close-up-donkey-70369.jpg&fm=jpg",
        location: 'Pasture',
        species: 'Donkey2',
        breed: 'red',
        age_range: 'white',
        names: 'blue',
        fun: 'c-mon man!!'
    },
    {
        image: "https://live.staticflickr.com/1933/44541002854_ae4d7cd797_b.jpg",
        location: 'yard',
        species: 'Duck2',
        breed: 'donno',
        age_range: 'white',
        names: 'blue',
        fun: 'c-mon man!!'
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
const filterAnimal = (req, res) =>{
    let filtered = animals.filter(animal => animal.location.toLowerCase() === req.query.location.toLowerCase())
    res.json(filtered);
}
const searchAnimals = (req, res) =>{
    console.log(req.params)
    let searched = animals.filter(animal => animal.species.toLowerCase() === req.params.species.toLowerCase())
    res.json(searched);
}


module.exports ={
    getAnimals, deleteAnimal, addAnimal, filterAnimal, searchAnimals
}