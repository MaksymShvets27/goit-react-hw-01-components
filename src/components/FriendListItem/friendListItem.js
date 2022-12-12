import PropTypes from 'prop-types';
import './friendListItem.css'
const FriendListItem = (props) => {
    return <li className="item" key={props.id}>
        <span className="status" style={props.isOnline ? { backgroundColor: "green" } : { backgroundColor: "red" }}></span>
        <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
        <p className="name">{props.name}</p>
    </li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}

export default FriendListItem;