import React from 'react'

export default class UserListItem extends React.Component {
    render() {
        let {user, showGames} = this.props;
        return (
            <li key={user.username}>
                {`@${user.username} has played ${showGames ? user.gamesPlayed : "*"} games`}
            </li>
        )
    }
}