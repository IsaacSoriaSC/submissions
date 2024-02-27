const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://vifurawa:${password}@cluster0.voffwfi.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Entrie = mongoose.model('Entrie', noteSchema)

const entrie = new Entrie({
  name: process.argv[3],
  number: process.argv[4]
})

if (process.argv.length === 3) {
  Entrie.find({}).then(result => {
    result.forEach(entrie => { console.log(entrie) })
    mongoose.connection.close()
  })
}

if (process.argv.length === 5) {
  entrie.save().then(result => {
    console.log('added ', process.argv[3], ' number ', process.argv[4], ' to phonebook')
    console.log(process.argv.length)
    mongoose.connection.close()
  })
}
