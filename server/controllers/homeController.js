const picSlides = [
    {
        image: 'https://live.staticflickr.com/3120/2714938134_1166d0a16d_b.jpg'
    },
    {
        image: 'https://cdn.pixabay.com/photo/2017/08/31/20/01/farm-2702094_960_720.jpg'
    }
]

const getHome = (req, res)=>{
    res.json(picSlides);
}

module.exports ={
    getHome
}