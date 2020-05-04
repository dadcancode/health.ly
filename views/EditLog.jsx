const React = require('react');

class EditLog extends React.Component {
    render() {
        let log = this.props.log;
        return(
            <>
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
            </>
        )
    }
}

module.exports = EditLog;