const React = require('react');
const Default = require('./layout/Default.jsx');

class EditProfile extends React.Component {
    render() {
        let user = this.props.user;
        return(
            <Default userId={user._id}>
                <div className="container-fluid">
                <h3 id="newUserTitleText">Edit Your Profile</h3>
                <form id="newLogForm" action={`/healthly/${user._id}?_method=PUT`} method="POST">
                    <div className="form-group newUserFromInputDiv">
                        <label className="formLabel" htmlFor="name">Name</label>
                        <input className="form-control newUserFromInput" type="text" value={user.name} name="name" id="name"/>
                    </div>
                    <div className="form-group newUserFromInputDiv">
                        <label className="formLabel" htmlFor="avatar">Profile Picture</label>
                        <input className="form-control newUserFromInput" type="text" name="avatar" value={user.avatar} id="avatar"/>
                    </div>
                    <div className="form-group newUserFromInputDiv">
                        <label className="formLabel" htmlFor="age">Age</label>
                        <input className="form-control newUserFromInput" type="number" name="age" value={user.age} id="age"/>
                    </div>
                    <div className="form-group newUserFromInputDiv">
                        <label className="formLabel" htmlFor="goalWeight">Goal Weight</label>
                        <input className="form-control newUserFromInput" type="number" name="goalWeight" value={user.goalWeight} id="goalWeight"/>
                    </div>
                    <div className="newUserFromInputDiv">
                        <input className="btn btn-outline-primary" id="newUserSubmit" type="submit" value="Save Changes"/>
                    </div>
                </form>

                </div>
            </Default>
        )
    }
}

module.exports = EditProfile;