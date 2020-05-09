const React = require('react');
const Default = require('./layout/Default.jsx');

class EditLog extends React.Component {
    render() {
        let log = this.props.log;
        return(
            <Default userId={log.owner}>
                <h3 className="titleText" style={{marginBottom: "35vw"}}>Edit Log</h3>
                <form id="addNewUserForm" action={`/healthly/update/${log._id}?_method=PUT`} method="POST">
                    <div className="form-group newUserFromInputDiv">
                        <input className="form-control newUserFromInput" type="text" name="title" value={log.title}/>
                    </div>
                    <div className="form-group newUserFromInputDiv">
                        <input className="form-control newUserFromInput" type="number" name="loggedWeight" value={log.loggedWeight}/>
                    </div>
                    <div className="form-group newUserFromInputDiv">
                        <input className="form-control newUserFromInput" type="text" name="notes" value={log.notes}/>
                    </div>
                    <div className="newUserFromInputDiv">
                        <input className="btn btn-outline-primary" id="newUserSubmit" type="submit" value="Save Changes"/>
                    </div>
                </form>
            </Default>
        )
    }
}

module.exports = EditLog;