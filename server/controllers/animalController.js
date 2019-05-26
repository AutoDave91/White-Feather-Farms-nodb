const animals = [
    {
        image: "https://cdn.pixabay.com/photo/2017/08/17/23/21/donkey-2653298_960_720.jpg",
        location: 'Pasture',
        species: 'Miniature Donkey',
        breed: '',
        age_range: '4-7y',
        names: 'Maverick, Daisy, and Camden',
        fun: 'c-mon man!!'
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/10/28/06/48/cow-2896329_960_720.jpg",
        location: 'Pasture',
        species: 'Miniature Cow',
        breed: 'Zebu',
        age_range: '2m - 3y',
        names: 'Milly, Sarah, Ruth, Liza, Alice, Erin, and Noel',
        fun: 'c-mon man!!'
    },
    {
        image: "https://images.pexels.com/photos/70369/donkey-fence-nature-outside-70369.jpeg?cs=srgb&dl=animal-close-up-donkey-70369.jpg&fm=jpg",
        location: 'Pasture',
        species: 'Donkey',
        breed: '',
        age_range: '6y',
        names: 'Josey and Stormy',
        fun: 'c-mon man!!'
    },
    {
        image: "https://live.staticflickr.com/1933/44541002854_ae4d7cd797_b.jpg",
        location: 'yard',
        species: 'Duck',
        breed: 'Khaki Campbell',
        age_range: '3y',
        names: '',
        fun: 'c-mon man!!'
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/08/17/23/21/donkey-2653298_960_720.jpg",
        location: 'Yard',
        species: 'Pig',
        breed: 'American Miniature',
        age_range: '1-3y',
        names: 'Sammy, Simon, and Precious',
        fun: 'c-mon man!!'
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/08/17/23/21/donkey-2653298_960_720.jpg",
        location: 'Yard',
        species: 'Pig',
        breed: 'Pot-bellied',
        age_range: '2w-3y',
        names: 'Peri, Pumpkin, Penny, and Little Dude',
        fun: 'c-mon man!!'
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/10/28/06/48/cow-2896329_960_720.jpg",
        location: 'Yard',
        species: 'Goat',
        breed: 'Dwarf Nigerian',
        age_range: '1-2y',
        names: 'Toby, Penelope, Daphne, Oreo, Thumper, ans Caesar',
        fun: 'c-mon man!!'
    },
    {
        image: "https://images.pexels.com/photos/70369/donkey-fence-nature-outside-70369.jpeg?cs=srgb&dl=animal-close-up-donkey-70369.jpg&fm=jpg",
        location: 'Yard',
        species: 'Chicken',
        breed: 'Black Australorp',
        age_range: '3y',
        names: '',
        fun: 'c-mon man!!'
    },
    {
        image: "https://live.staticflickr.com/1933/44541002854_ae4d7cd797_b.jpg",
        location: 'yard',
        species: 'Chicken',
        breed: 'Barred Rock',
        age_range: '3y',
        names: '',
        fun: 'c-mon man!!'
    },
    {
        image: "https://images.pexels.com/photos/70369/donkey-fence-nature-outside-70369.jpeg?cs=srgb&dl=animal-close-up-donkey-70369.jpg&fm=jpg",
        location: 'Yard',
        species: 'Chicken',
        breed: 'Pearl White Leghorn',
        age_range: '3y',
        names: '',
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