import PropTypes from 'prop-types';
import FriendListItem from "components/FriendListItem/friendListItem";
import './friendList.css'
const FriendList = (props) => {
    return <ul className="friend-list">
        {props.friendsArr.map(friend => {
            return <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id}></FriendListItem>
        })}
    </ul>
}
FriendList.propTypes = {
    friendsArr: PropTypes.array.isRequired,
};
export default FriendList;