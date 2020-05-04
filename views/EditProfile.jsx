const React = require('react');
const Default = require('./layout/Default.jsx');

class EditProfile extends React.Component {
    render() {
        let user = this.props.user;
        return(
            <Default>
                <h3>Edit Your Profile</h3>
                <form action={`/healthly/${user._id}?_method=PUT`} method="POST">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" value={user.name} name="name" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="avatar">Profile Picture</label>
                        <input type="text" name="avatar" value={user.avatar} id="avatar"/>
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" value={user.age} id="age"/>
                    </div>
                    <div>
                        <label htmlFor="goalWeight">Goal Weight</label>
                        <input type="number" name="goalWeight" value={user.goalWeight} id="goalWeight"/>
                    </div>
                    <input type="submit" value="Save Changes"/>
                </form>
            </Default>
        )
    }
}

module.exports = EditProfile;