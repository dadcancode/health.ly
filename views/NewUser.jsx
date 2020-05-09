const React = require('react');
const Default = require('./layout/Default.jsx');

class NewUser extends React.Component {
    render() {
        return(
            <html lang="en" dir="ltr">
                <head>
                    <meta charSet="utf-8"/>
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta> */}


                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>

                    <link rel="stylesheet" href="/general.css"/>

                    <title>{this.props.title}</title>

                </head>
                <body>
                    <div className="d-flex" style={{backgroundImage: "linear-gradient(to top, #00c6fb 0%, #005bea 100%)", height: "7vh"}}></div>
                    <h3 id="newUserTitleText">Add New User</h3>
                    <form id="addNewUserForm" action="/healthly/users" method="POST">
                        <div className="form-group newUserFromInputDiv">
                            <input className="form-control newUserFromInput" type="text" name="name" placeholder="Enter Name"/>
                        </div>

                        <div className="form-group newUserFromInputDiv">
                            <input className="form-control newUserFromInput" type="text" name="avatar" placeholder="Avatar, ex. https://example.jpg"/>
                        </div>

                        <div className="form-group newUserFromInputDiv">
                            <input className="form-control newUserFromInput" type="number" name="age" placeholder="Age"/>
                        </div>

                        <div className="form-group newUserFromInputDiv">
                            <input className="form-control newUserFromInput" type="number" name="startWeight" placeholder="Starting Weight"/>
                        </div>

                        <div className="form-group newUserFromInputDiv">
                            <input className="form-control newUserFromInput" type="number" name="goalWeight" placeholder="Goal Weight"/>
                        </div>

                        {/* <div className="form-check form-check-inline newUserFromInputDiv">
                            <input className="form-check-input newUserFromInputRadio" type="radio" name="gender" id="maleRadio" value="male"/>
                            <label className="form-check-label" htmlFor="maleRadio">Male</label>
                        </div>

                        <div className="form-check form-check-inline" style={{height: "100px"}}>
                            <input className="form-check-input" type="radio" name="gender" id="femaleRadio" value="female"/>
                            <label className="form-check-label" htmlFor="femaleRadio">Female</label>
                        </div> */}

                        <div className="newUserFromInputDiv">
                            <input className="btn btn-outline-primary" type="submit" name="" id="newUserSubmit" value="Create User"/>
                        </div>

                        
                    </form>
                </body>
            </html>
            
        );
    }
}

module.exports = NewUser;