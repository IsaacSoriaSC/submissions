import App from "../App"
import { useState } from "react"
/* eslint-disable no-return-assign */
/* eslint-disable react/react-in-jsx-scope */
const FilterCountry = (props) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showCountry, setShowCountry] = useState(false);

  // Filtramos todos los países que coincidan con el cuadro de búsqueda, y lo almacenamos en
  // un nuevo array "filteredCountries"
  const filteredCountries = props.country.filter(country => country.name.common.toLowerCase().includes(props.pattern.toLowerCase()));
  const mostrarCountry = (country) => {
    setSelectedCountry(country);
    setShowCountry(!showCountry);
  }


  return (
    <div>
      {
      // Usamos operador ternario aquí
      // Si el array de coincidencias es indiferente de 0 y mayor que 10, mostramos un mensaje
      props.pattern.length !== 0 ? 
        (filteredCountries.length > 10 ? 
          <p>Too many matches, specify another filter</p> 
          : 
          // Si el array de coincidencias tiene un solo item, mostramos la información del país
          // Para mostrar la información del país, como es un solo item, primero debemos acceder al item
          // Para acceder a dicho item, debemos localizarlo con el indice [0]
          ( filteredCountries.length == 1 ?
            <>
            <h2> {filteredCountries[0].name.common} </h2>
            <p> Capital: {filteredCountries[0].capital} </p>
            <p> Area: {filteredCountries[0].area} </p>
            <h3> Languages </h3>
            <ul>
              {
              // Object.values() es una función en JavaScript que toma un objeto como argumento
              // y devuelve un array que contiene los valores de todas las propiedades enumerables
              // del objeto en el mismo orden en que fueron proporcionadas.
              Object.values(filteredCountries[0].languages).map(language => (
                <li> {language} </li>
              ))}
            </ul>
            <img src={filteredCountries[0].flags.png} />
            </> 
          : filteredCountries.map(filteredCountry => (
            <>
            <p> {filteredCountry.name.common} 
            { // Si el país seleccionado es igual al país filtrado, y showCountry es true, muestra el botón "hide"
            // Si el país seleccionado es igual al país filtrado, y showCountry es false, muestra el botón "show"
            // Si el país seleccionado es diferente al país filtrado, muestra el botón "show" 
            selectedCountry === filteredCountry && showCountry === true ? <button onClick={() => mostrarCountry(filteredCountry)} >hide</button> 
            : <button onClick={() => mostrarCountry(filteredCountry)} >show</button>  } </p>
           
            {
            // Una vez que se confirmó que el país seleccionado es igual al país filtrado, y showCountry es true
            // Muestra la información del país seleccionado durante el mapeo.
            selectedCountry === filteredCountry && showCountry === true ? 
                <div>
                  <h2> {selectedCountry.name.common} </h2>
                  <p> Capital: {selectedCountry.capital[0]} </p>
                  <p> Area: {selectedCountry.area} </p>
                  <h3> Languages </h3>
                  <ul>
                    {Object.values(selectedCountry.languages).map(language => (
                      <li> {language} </li>
                    ))}
                  </ul>
                  <img src={selectedCountry.flags.png} alt="Country flag" />
                </div> : null
              }
            </>
          )))
        ) 
        : <p></p> 
      }
    </div>
  )
}

const mostrarCountry = ({filteredCountry}) => {
  return (
    <div>
               <h2> {filteredCountry.name.common} </h2>
               <p> Capital: {filteredCountry.capital} </p>
               <p> Area: {filteredCountry.area} </p>
               <h3> Languages </h3>
               <ul>
                 {
                 Object.values(filteredCountry.languages).map(language => (
                   <li> {language} </li>
                 ))}
               </ul>
               <img src={filteredCountry.flags.png} />
               </div> 
  )
}

export default FilterCountry