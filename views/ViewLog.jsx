const React = require('react');

class ViewLog extends React.Component {
    render() {
        let user = this.props.user;
        let log = this.props.log;
        return(
            <>
                <h3>{log.title}</h3>
                <p>{log.createdAt.toDateString()}</p>
                <p>{log.loggedWeight}</p>
                <p>{log.difference}</p>
                <div>
                    <p>Notes:</p>
                    <p>{log.notes}</p>
                </div>
                <div>
                    <a href="">Edit</a>
                    <a href="">Delete</a>
                </div>
                <a href={`/healthly/user/${user._id}/home`}>Back</a>
            </>
        )
    }
}

module.exports = ViewLog;