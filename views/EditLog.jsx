const React = require('react');
const Default = require('./layout/Default.jsx');

class EditLog extends React.Component {
    render() {
        let log = this.props.log;
        return(
            <Default>
                <h3>Edit Log</h3>
                <form action={`/healthly/${log._id}?_method=PUT`} method="POST">
                    <div>
                        <input type="text" name="title" value={log.title}/>
                    </div>
                    <div>
                        <input type="number" name="loggedWeight" value={log.loggedWeight}/>
                    </div>
                    <div>
                        <input type="text" name="notes" value={log.notes}/>
                    </div>
                    <input type="submit" value="Save Changes"/>
                </form>
            </Default>
        )
    }
}

module.exports = EditLog;