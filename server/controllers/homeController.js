const picSlides = [
    {
        image: ''
    },
    {
        image: ''
    },
    {
        image: ''
    },
    {
        image: ''
    }
]

const getHome = (req, res)=>{
    res.json(picSlides);
}

module.exports ={
    getHome
}