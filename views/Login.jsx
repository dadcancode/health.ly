const React = require('react');

class Login extends React.Component {
    render() {
        let users = this.props.users;
        return(
            <>
                <div>
                    <h1>Healthly</h1>
                </div>
                <div>
                    <form action="/healthly/user/home?_method=GET" method="POST">
                        <div>
                            <select name="_id" id="">
                                {users.map((user, index) => {
                                    return(
                                        <option name="" value={user._id}>{user.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <input type="submit" value="Login"/>
                    </form>
                </div>
                <div>
                    <a href="/healthly/new/user">New User</a>
                </div>
            </>
        )
    }
}

module.exports = Login;