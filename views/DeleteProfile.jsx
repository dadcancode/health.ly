const React = require('react');

class DeleteProflie extends React.Component {
    render() {
        let user = this.props.user;
        return(
            <html lang="en" dir="ltr">
                <head>
                    <meta charSet="utf-8"/>
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta> */}

                    <link rel="stylesheet" href="/general.css"/>

                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>

                    <title>{this.props.title}</title>

                </head>
                <body>
                    <div className="d-flex" style={{backgroundColor: "blue", height: "7vh"}}>

                    </div>
                    <div>
                        <h3>Are you sure?</h3>
                        <p>Deleting your profile will also delete all of your current log entries, would you still like to proceed?</p>
                        <form action={`/healthly/${user._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete"/>
                        </form>
                        <a href={`/healthly/${user._id}/home`}>Cancel</a>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = DeleteProflie;