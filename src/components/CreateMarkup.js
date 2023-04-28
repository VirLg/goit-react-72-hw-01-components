import PropType from 'prop-types'
import user from '../user.json'
const data=user[0]


export default function CreateMarkup(){
    const {avatar,username,tag,location,stats}=data;
    return(<div classList="profile">
    <div classList="description">
      <img
        src={avatar}
        alt={username}
        classList="avatar"
      />
      <p classList="name">{username}</p>
      <p classList="tag">{tag}</p>
      <p classList="location">{location}</p>
    </div>
  
    <ul classList="stats">
      <li>
        <span classList="label">{stats.followers}</span>
        <span classList="quantity">1000</span>
      </li>
      <li>
        <span classList="label">Views</span>
        <span classList="quantity">2000</span>
      </li>
      <li>
        <span classList="label">Likes</span>
        <span classList="quantity">3000</span>
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