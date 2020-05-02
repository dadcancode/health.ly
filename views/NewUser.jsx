const React = require('react');

class NewUser extends React.Component {
    render() {
        return(
            <>
                <h1>Add New User</h1>
                <form action="/healthly/users" method="POST">
                    <div>
                        <input type="text" name="name" placeholder="Enter Name"/>
                    </div>
                    <div>
                        <input type="text" name="avatar" placeholder="Avatar, ex. https://example.jpg"/>
                    </div>
                    <div>
                        <input type="number" name="age" placeholder="Age"/>
                    </div>
                    <div>
                        <input type="number" name="startWeight" placeholder="Starting Weight"/>
                    </div>
                    <div>
                        <input type="number" name="goalWeight" placeholder="Goal Weight"/>
                    </div>
                    <div>
                        <input type="radio" name="gender" id="maleRadio" value="male"/>
                        <label htmlFor="maleRadio">Male</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" id="femaleRadio" value="female"/>
                        <label htmlFor="femaleRadio">Female</label>
                    </div>
                    <input type="submit" name="" id="" value="Create User"/>
                </form>
            </>
        );
    }
}

module.exports = NewUser;