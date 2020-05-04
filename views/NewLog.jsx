const React = require('react');
const Default = require('./layout/Default.jsx');

class NewLog extends React.Component {
    render() {
        let user = this.props.user;
        return(
            <Default>
                <h3>New Log</h3>
                <form action={`/healthly/${user._id}/logs`} method="POST">
                    <div>
                        <input type="text" name="title" placeholder="Enter Title"/>
                    </div>
                    <div>
                        <input type="number" name="loggedWeight" placeholder="lbs"/>
                    </div>
                    <div>
                        <input type="text" name="notes" placeholder="Notes..."/>
                    </div>
                    <input type="submit" value="Create Log"/>
                </form>
            </Default>
        )
    }
}

module.exports = NewLog;