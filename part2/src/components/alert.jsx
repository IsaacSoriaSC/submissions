/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
const Notification = ({ message }) => {
  if (message == null) {
    return null
  }

  const styles = {
    borderStyle: 'solid',
    color: 'green',
    fontSize: 15
  }

  return (
        <div style={styles}>
            {message}
        </div>
  )
}

export default Notification
