/* eslint-disable react/react-in-jsx-scope */
const Filter = ({ onChangeFilter }) => {
  return (
        <div>
            filter shown with <input
                onChange={onChangeFilter}
            />
        </div>
  )
}

export default Filter
