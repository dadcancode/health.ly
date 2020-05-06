const React = require('react');

class Default extends React.Component {
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


                <body className="container-fluid">
                    <div className="d-flex" style={{backgroundColor: "blue", height: "7vh"}}>

                        {/* Dropdown Menu */}

                        <div className="dropdown" style={{width: "10%", height: "100%"}}>
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="img-fluid" style={{height: "100%", width: "100%"}} src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/19339625881548233621-512.png" alt=""/>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href={`/healthly/${this.props.userId}/editProfile`}>Edit Profile</a>
                                <a className="dropdown-item" href={`/healthly/deleteUser/${this.props.userId}`}>Delete Profile</a>
                                <a className="dropdown-item" href='/healthly'>Logout</a>
                            </div>
                        </div>


                    </div>
                    <h3 className="titleText text-">{this.props.title}</h3>
                    {this.props.children}
                    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
                </body>
            </html>
        )
    }
}

module.exports = Default;