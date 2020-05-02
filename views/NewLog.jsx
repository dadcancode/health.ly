const React = require('react');

class NewLog extends React.Component {
    render() {
        let user = this.props.user;
        return(
            <>
                <form action={`/healthly/${user._id}/logs?_method=PUT`} method="POST">
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
            </>
        )
    }
}

module.exports = NewLog;