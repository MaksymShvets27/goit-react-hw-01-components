import PropTypes from 'prop-types';
import './profileCard.css'
const ProfileCard = (props) => {
    const newTag = `@${props.tag}`;
    return <div className='profile-card'>
        <div className='description'>
            <img className='avatar' src={props.avatar} alt='User avatar'></img>
            <p className='name'>{props.username}</p>
            <p className='tag'>{newTag}</p>
            <p className='location'>{props.location}</p>
        </div>

        <ul className='stats'>
            <li>
                <span className='label'>Followers</span>
                <span className='quantity'>{props.stats.followers}</span>
            </li>
            <li>
                <span className='label'>Views</span>
                <span className='quantity'>{props.stats.views}</span>
            </li>
            <li>
                <span className='label'>Likes</span>
                <span className='quantity'>{props.stats.likes}</span>
            </li>
        </ul>
    </div>;
}

ProfileCard.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}

export default ProfileCard;