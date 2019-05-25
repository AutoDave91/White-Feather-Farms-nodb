const eventSlides = [
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

const getEvents = (req, res)=>{
    res.json(eventSlides);
}

module.exports ={
    getEvents
}