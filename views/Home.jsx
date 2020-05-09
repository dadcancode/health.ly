const React = require('react');
const Default = require('./layout/Default.jsx');

class Home extends React.Component {
    render() {
        let user = this.props.user;
        let logs = this.props.logs;
        let progressPer = (((user.startWeight - user.currentWeight) * 100) / (user.startWeight - user.goalWeight));
        return(
            <Default userId={user._id}>
                <div className="container-fluid">
                    <div className="row" style={{marginBottom: "5vw"}}>
                        <div className="col-6">
                            <img src={user.avatar} style={{borderRadius: "25px", height: "100%", width: "100%"}} alt=""/>
                        </div>
                        <div className="col-6 pt-3">
                            <h4 className="col-12 text-center homeText">{user.name}</h4>
                            <p className="col-12 text-center homeText">
                                {user.currentWeight > user.startWeight ? `+${user.startWeight - user.currentWeight}lbs` : user.currentWeight < user.startWeight ? `${user.currentWeight - user.startWeight}lbs` : '0lbs'}
                            </p>
                            <div className="progress col-12" id="progressBarDiv">
                                <div className="progress-bar" role="progressbar" style={{width: `${progressPer}%`, fontSize: "3vw", borderRadius: "15px"}} aria-valuenow={`${progressPer}`} aria-valuemin="0" aria-valuemax="100">{Math.floor(progressPer)}%</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex p-3" id="newLogEntryLinkDiv">
                        <a className="btn btn-secondary d-flex align-items-center justify-content-center" href={`/healthly/${user._id}/new/log`} id="newLogEntryLink">New Entry</a>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex flex-column p-2" id="logDiv">
                            {logs.slice(0).reverse().map((log, index) => {
                                // console.log(log, index);
                                return(
                                <div className="row justify-content-center mb-2" id="logEntryDiv">
                                    <span className="col-4 logEntryText d-flex justify-content-center align-items-center">
                                        {log.createdAt.toDateString()}
                                    </span>
                                    <span className="col-6 d-flex justify-content-center align-items-center">
                                        <a className="logEntryText d-flex justify-content-center align-items-center w-75 btn btn-info" id="logEntryTitleText" href={`/healthly/view/${log._id}`}>{log.title}</a>
                                    </span>
                                    <span className="col-1 logEntryText d-flex justify-content-center align-items-center">{log.loggedWeight}lbs</span>
                                    <span className="col-1 logEntryText d-flex justify-content-center align-items-center">{log.difference}</span>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = Home;