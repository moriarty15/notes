export default function FriendListItem(props) {
    const {avatar, name} = props
    return (<li className="item">
  <span className="status"></span>
  <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name }</p>
</li>)
}