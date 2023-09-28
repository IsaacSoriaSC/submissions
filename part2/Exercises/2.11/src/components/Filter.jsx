import App from "../App";

const Filter = ({onChangeFilter}) => {
    return (
        <div>
            filter shown with <input
                onChange={onChangeFilter}
            />
        </div>
    )
}

export default Filter