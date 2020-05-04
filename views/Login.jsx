const React = require('react');
const Default = require('./layout/Default.jsx');

class Login extends React.Component {
    render() {
        let users = this.props.users;
        return(
            <html lang="en" dir="ltr">
                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>

                    <title>{this.props.title}</title>

                </head>
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
            </html>
            
        )
    }
}

module.exports = Login;