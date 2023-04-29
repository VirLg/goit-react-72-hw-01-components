import PropType from 'prop-types'
// import user from '../user.json'
// const data=user[0]


export default function CreateMarkup(props){

    const {avatar,username,tag,location,stats}=props;
    return (<div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt={username}
        className="avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className="stats">
      <li>
        <span className="label">{stats.followers}</span>
        <span className="quantity">1000</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">2000</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">3000</span>
      </li>
    </ul>
  </div>)
    
}


CreateMarkup.PropType={
    avatar:PropType.string,
    username:PropType.string,
    tag:PropType.string,
    location:PropType.string,
    stats:PropType.object,
}