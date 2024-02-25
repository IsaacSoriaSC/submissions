require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Entrie = require('./models/phone')
const mongoose = require('mongoose')


app.use(express.static('dist'))
app.use(cors())
app.use(express.json())

 
app.get('/api/persons', (request, response) => {
  Entrie.find({})
    .then(entries => {
      response.json(entries);
      console.log(entries)
    })
    .catch(error => {
      console.error('Error fetching entries:', error);
      response.status(500).json({ error: 'Internal server error' });
    });
});

  
    app.get('/api/persons/:id', (request, response, next) => {
      Entrie.findById(request.params.id)
      .then(entrie => {
        if (entrie) {
          response.json(entrie)
        } else {
          response.status(400).end
        }
      })
      .catch(error => next(error))
    })
    
    app.post('/api/persons', (request, response, next) => {
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
      .catch(error => next(error))
    })

    app.put('/api/persons/:id', (request, response, next) => {
      const { name, number } = request.body
    
      Entrie.findByIdAndUpdate(request.params.id, { name, number }, { new: true, runValidators: true, context: 'query' })
        .then(updatedEntrie => {
          response.json(updatedEntrie)
        })
        .catch(error => next(error))
    })

    app.delete('/api/persons/:id', (request, response, next) => {
      Entrie.findByIdAndDelete(request.params.id)
        .then(result => {
          response.status(204).end()
        })
        .catch(error => next(error))
    })

    const unknownEndpoint = (request, response) => {
      response.status(404).send({ error: 'unknown endpoint' })
    }
    
    app.use(unknownEndpoint)

    const requestLogger = (error, request, response, next) => {
      console.error(error.message)
    
      if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
      } else if (error.name === 'ValidationError'){
        return response.status(400).json({ error: error.message})
      }
    
      next(error)
    }

    app.use(requestLogger)

    const PORT = process.env.PORT
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
      })

