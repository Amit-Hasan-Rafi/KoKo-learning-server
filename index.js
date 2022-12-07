const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const category = require('./data/categories.json')
const course = require('./data/coures.json')

app.use(cors())

app.get('/course-category' ,(req , res) =>{
    res.send(category)
})
app.get('/course-category/:id' ,(req , res) =>{
    const id = req.params.id;
    const selectedCategory = course.filter(c => c.category_id === id)
    res.send(selectedCategory)
})

app.get('/course/:id' ,(req , res) =>{
    const id = req.params.id;
    const selectedCoures = course.find(c => c.id===id)
    res.send(selectedCoures)
})

app.get('/', (req , res)=>{
    res.send('api running');
})

app.listen(port, () =>{
    console.log('apni running')
})