import express from 'express'
import { startups } from './data/data.js'

const PORT = 8000
const app = express()

const parseBoolean = (value) =>{
  if (typeof value === 'string') {
    return value.toLowerCase() === 'true'
  }
  return Boolean(value)
}

app.get('/api', (req, res) => {
try{
  
  let filteredData = startups

 const{ industry, country, continent, is_seeking_funding, has_mvp }= req.query
 
if(industry) {
  filteredData = filteredData.filter(obj => obj.industry.toLowerCase() === industry.toLowerCase())
}

if(country){
  filteredData = filteredData.filter(obj => obj.country.toLowerCase() === country.toLowerCase())
}

if(continent){
  filteredData = filteredData.filter(obj=> obj.continent.toLowerCase() === continent.toLowerCase())
}

if(is_seeking_funding !== undefined ){
  const seekingFunding =parseBoolean(is_seeking_funding)
  filteredData = filteredData.filter(obj=> obj.is_seeking_funding === seekingFunding)
}

if(has_mvp !== undefined){
  const hasMVP = parseBoolean(has_mvp)
  filteredData = filteredData.filter(obj => obj.has_mvp === hasMVP)
}

if(filteredData.length === 0) {
  return res.status(404).json({ message: 'No startups found with the given criteria.' })
}
res.json(filteredData)
}catch(err){
  console.error('Error filtering startups:', err)
  res.status(500).json({
    message: 'Something went wrong while filtering startups.',
  })
}
})

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))


