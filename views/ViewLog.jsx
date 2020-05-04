const React = require('react');
const Default = require('./layout/Default.jsx');

class ViewLog extends React.Component {
    render() {
        let log = this.props.log;
        return(
            <Default>
                <p>{log.createdAt.toDateString()}</p>
                <h3>{log.title}</h3>
                <p>{log.loggedWeight}</p>
                <p>{log.difference}</p>
                <div>
                    <p>Notes:</p>
                    <p>{log.notes}</p>
                </div>
                <div>
                    <a href={`/healthly/edit/log/${log._id}`}>Edit</a>
                    <form action={`/healthly/deleteLog/${log._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete"/>
                    </form>
                </div>
                <a href={`/healthly/${log.owner}/home`}>Back</a>
            </Default>
        )
    }
}

module.exports = ViewLog;