const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(express.static('dist'))
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))


let address = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(address)
  })

  app.get('/info', (request, response) => {
    const respuesta = `<p>Phonebook has info for ${address.length} people </p>`
    const fecha = new Date()
    response.send(respuesta + fecha)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const addre = address.find(addr => addr.id === id)
    if (addre) {
      response.json(addre)
    } else {
      response.status(404).end()
    }  })
  
    app.delete('/api/persons/:id', (request, response) => {
      const id = Number(request.params.id)
      address = address.filter(addr => addr.id !== id)
    
      response.status(204).end()
    })

    const generateId = () => {
      return Math.floor(Math.random() * 1000000)
    }
    
    morgan.token('post', function (req, res) { return JSON.stringify(req.body) })

    app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post', {
      skip: function (req, res) { return req.method != 'POST' }
    }))

    app.use(morgan('tiny', {
      skip: function (req, res) { return req.method === 'POST' }
    }))

    app.post('/api/persons', (request, response) => {
      const body = request.body
    
      if ((!body.name || !body.number)){
        return response.status(400).json({ 
          error: 'content missing' 
        })
      } if (address.find(addr => addr.name === body.name)){
        return response.status(400).json({ 
          error: 'name must be unique' 
        })
      }
      
      

      const newAddr = {
        id: generateId(),
        name: body.name,
        number: body.number,
      }
    
      address = address.concat(newAddr)
    
      response.json(newAddr)
    })

    const unknownEndpoint = (request, response) => {
      response.status(404).send({ error: 'unknown endpoint' })
    }
    
    app.use(unknownEndpoint)

  const PORT = process.env.PORT || 3001
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })