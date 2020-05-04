const React = require('react');
const Default = require('./layout/Default.jsx');

class Home extends React.Component {
    render() {
        let user = this.props.user;
        let logs = this.props.logs;
        return(
            <Default userId={user._id}>
                {/* <div className="d-flex flex-column h-100 w-100"> */}
                    <div className="d-flex" style={{ height: "30%" }}>
                        <img styles={{width: "33%"}} src={user.avatar} alt=""/>
                        <h4>{user.name}</h4>
                    </div>
                    <div>
                        <span>{user.currentWeight > user.startWeight ? `-${user.startWeight - user.currentWeight}lbs` : user.currentWeight < user.startWeight ? `+${user.currentWeight - user.startWeight}lbs` : '0lbs'}</span>
                    </div>
                {/* </div> */}
                {/* <div> */}
                    <a className="" href={`/healthly/${user._id}/new/log`}>New Entry</a>
                    <div>
                        {logs.map((log, index) => {
                            // console.log(log, index);
                            return(
                            <div><span>{log.createdAt.toDateString()}</span><span><a href={`/healthly/view/${log._id}`}>{log.title}</a></span><span>{log.loggedWeight}lbs</span><span>{log.difference}</span></div>
                            )
                        })}
                    </div>
                {/* </div> */}
            </Default>
        )
    }
}

module.exports = Home;