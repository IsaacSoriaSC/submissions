const express = require('express')
const app = express()

app.use(express.json())

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
  
    app.delete('/api/notes/:id', (request, response) => {
      const id = Number(request.params.id)
      notes = notes.filter(note => note.id !== id)
    
      response.status(204).end()
    })

    const generateId = () => {
      const maxId = notes.length > 0
        ? Math.max(...notes.map(n => n.id))
        : 0
      return maxId + 1
    }
    
    app.post('/api/notes', (request, response) => {
      const body = request.body
    
      if (!body.content) {
        return response.status(400).json({ 
          error: 'content missing' 
        })
      }
    
      const note = {
        content: body.content,
        important: Boolean(body.important) || false,
        id: generateId(),
      }
    
      notes = notes.concat(note)
    
      response.json(note)
    })

  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })