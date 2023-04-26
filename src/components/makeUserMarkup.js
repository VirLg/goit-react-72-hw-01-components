// import defaultImg from './default.jpg'

export default function MakeUserCard(props){
    const {
      avatar,//  = defaultImg,
      username='нет имени',
      tag,
      location,
      stats} = props
    // console.log({avatar});
    
    return (<div class="profile">
    <div class="description">
      <img
        src={avatar}
        alt={username}
        class="avatar"
      />
      <p class="name">{username}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>
    
    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">2000</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">3000</span>
      </li>
    </ul>
    </div>)
}