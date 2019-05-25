const eventSlides = [
    {
        image: 'https://live.staticflickr.com/3120/2714938134_1166d0a16d_b.jpg',
        title: 'pic1',
        details: ''
    },
    {
        image: 'https://cdn.pixabay.com/photo/2017/08/31/20/01/farm-2702094_960_720.jpg',
        title: 'pic2',
        details: ''
    }
]

const getEvents = (req, res)=>{
    res.json(eventSlides);
}
const deleteEvent = (req, res)=>{
    const index = eventSlides.findIndex(event =>event.title ===req.params.title);
    eventSlides.splice(index, 1);
    res.json(eventSlides);
}
const addEvent = (req, res)=>{
    eventSlides.push(req.body);
    res.json(eventSlides);
}
const editEvent = (req, res)=>{
    const index =eventSlides.findIndex(event =>event.title ===req.params.title);
    eventSlides.splice(index, 1, req.body);
    res.json(eventSlides)
}

module.exports ={
    getEvents, deleteEvent, addEvent, editEvent
}