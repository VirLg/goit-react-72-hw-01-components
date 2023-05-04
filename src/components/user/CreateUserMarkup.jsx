import PropTypes from 'prop-types'
import {StatisticBlock} from './CreateUserMarkup.styled';


export const  CreateUserMarkup=function ({avatar,username,tag,location, stats}){


    return (<div className="profile">
    <div>
      <img
        src={avatar}
        alt={username}
        className="avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <StatisticBlock>
      <li>
        <span className="label"> Followers </span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label"></span>
        <span className="quantity">2000</span>
      </li>
      <li>
        <span className="label"></span>
        <span className="quantity">3000</span>
      </li>
    </StatisticBlock>
  </div>)
    
}


CreateUserMarkup.propTypes={
    avatar:PropTypes.string.isRequired,
    username:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    stats:PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }).isRequired,
}