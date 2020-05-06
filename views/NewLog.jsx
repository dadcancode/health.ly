const React = require('react');
const Default = require('./layout/Default.jsx');

class NewLog extends React.Component {
    render() {
        let user = this.props.user;
        return(
            <Default title='New Log'>
                {/* <h3>New Log</h3> */}
                <form id="newLogForm" action={`/healthly/${user._id}/logs`} method="POST">
                    <div className="form-group newUserFromInputDiv">
                        <input className="form-control newUserFromInput" type="text" name="title" placeholder="Enter Title"/>
                    </div>
                    <div className="form-group newUserFromInputDiv">
                        <input className="form-control newUserFromInput" type="number" name="loggedWeight" placeholder="lbs"/>
                    </div>
                    <div className="form-group newUserFromInputDiv">
                        <input className="form-control newUserFromInput" type="text" name="notes" placeholder="Notes..."/>
                    </div>
                    <div className="newUserFromInputDiv">
                        <input className="btn btn-outline-primary" id="newUserSubmit" type="submit" value="Create Log"/>
                    </div>
                </form>
            </Default>
        )
    }
}

module.exports = NewLog;