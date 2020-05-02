const React = require('react');

class Home extends React.Component {
    render() {
        let user = this.props.user;
        return(
            <>
                <div>
                    <div>
                        <img src={user.avatar} alt=""/>
                        <h4>{user.name}</h4>
                    </div>
                    <div>
                        <span>{user.currentWeight > user.startWeight ? `-${user.startWeight - user.currentWeight}lbs` : user.currentWeight < user.startWeight ? `+${user.currentWeight - user.startWeight}lbs` : '0lbs'}</span>
                    </div>
                </div>
                <div>
                    <a href={`/healthly/${user._id}/new/log`}>New Entry</a>
                    <div>
                        {user.logs.map((log, index) => {
                            return(
                            <div><span>{log.createdAt.toDateString()}</span><span><a href={`/healthly/${user._id}/view/${index}`}>{log.title}</a></span><span>{log.loggedWeight}lbs</span><span>{log.difference}</span></div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

module.exports = Home;