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

                    <link rel="stylesheet" href="/general.css"/>

                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>

                    <title>{this.props.title}</title>

                </head>
                <body className="container-fluid">
                    <div id="loginTitleDiv">
                        <h1 className="" id="loginTitleText">Healthly</h1>
                    </div>
                    <div>
                        <form action="/healthly/user/home?_method=GET" method="POST">
                            <div className="form-group mb-5">
                                <select className="form-control" name="_id" id="">
                                    {users.map((user, index) => {
                                        return(
                                            <option name="" value={user._id}>{user.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <input className="btn btn-primary w-100 mb-5" type="submit" value="Login"/>
                        </form>
                    </div>
                    <div className="">
                        <a className="btn btn-outline-danger w-100" href="/healthly/new/user">New User</a>
                    </div>
                </body>
            </html>
            
        )
    }
}

module.exports = Login;