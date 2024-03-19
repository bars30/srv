const express = require('express')
const userRouter = require('./routes/user.routes')

const PORT = process.env.PORT || 8080;

const app = express()

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, ()=>{
 console.log('Server has started on port -> ' + PORT);
})

app.get('/api/text2', (req, res)=>{
 res.send('nervers elavvvvvvvvvv')
})


app.get('/yaxq', (req, res)=>{
 res.send('nervers elavvvvvvvvvv yaxqqq')
})


