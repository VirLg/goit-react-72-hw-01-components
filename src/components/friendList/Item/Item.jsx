import PropTypes from 'prop-types'

export const Item=function ({name,avatar,isOnline}){
  return(
    <>
      <span className="">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  )

}

Item.protoTypes={
  name:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired,
}








