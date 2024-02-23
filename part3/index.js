require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Entrie = require('./models/phone')
const mongoose = require('mongoose')



app.use(express.static('dist'))
app.use(cors())
app.use(express.json())


/*let address = Entrie.find({}).then(result => {
  const entries = result.map(entrie => {
    return {
      name: entrie.name,
      number: entrie.number
    };
  });
  return entries;
});*/
 
app.get('/api/persons', (request, response) => {
  Entrie.find({})
    .then(entries => {
      console.log(entries)
      response.json(entries);
    })
    .catch(error => {
      console.error('Error fetching entries:', error);
      response.status(500).json({ error: 'Internal server error' });
    });
});

    app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const addre = address.find(addr => addr.id === id)
    if (addre) {
      response.json(addre)
    } else {
      response.status(404).end()
    }  })
  
    app.get('/api/persons/:id', (request, response) => {
      Note.findById(request.params.id).then(note => {
        response.json(note)
      })
    })
    

    app.post('/api/persons', (request, response) => {
      const body = request.body
    
      if (body.name === undefined) {
        return response.status(400).json({ error: 'content missing' })
      }
    
      const entrie = new Entrie({
        name: body.name,
        number: body.number,
      })
    
      entrie.save().then(savedEntrie => {
        response.json(savedEntrie)
      })
    })

    const unknownEndpoint = (request, response) => {
      response.status(404).send({ error: 'unknown endpoint' })
    }
    
    app.use(unknownEndpoint)

    const PORT = process.env.PORT
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
      })
