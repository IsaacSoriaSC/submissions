/* eslint-disable react/react-in-jsx-scope */

const Country = ({ onChangeCountry }) => {
  return (
        <div>
            find countries <input
                onChange={onChangeCountry}
            />
        </div>
  )
}

export default Country
