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
                    <div className="d-flex" style={{backgroundImage: "linear-gradient(to top, #00c6fb 0%, #005bea 100%)", height: "7vh"}}>

                    </div>
                    <div className="container-fluid">
                        <div className="row" id="deletePageTitleDiv">
                            <h3 className="titleText col-12">Are you sure?</h3>
                        </div>
                        <div className="row justify-content-center" id="deletePageTextDiv">
                            <p className="smallText col-10 text-center">Deleting your profile will also delete all of your current log entries, would you still like to proceed?</p>
                        </div>
                        <div className="row justify-content-center zBtnDiv">
                            <form className="col-10" action={`/healthly/${user._id}?_method=DELETE`} method="POST" style={{marginBottom: "15vw"}}>
                                <input className="btn btn-danger w-100"  id="newUserSubmit" type="submit" value="Delete"/>
                            </form>
                            <form action="" className="col-10">
                                <a className="btn btn-outline-primary w-100 d-flex justify-content-center align-items-center" id="newUserSubmit" href={`/healthly/${user._id}/home`} >Cancel</a>
                            </form>
                        </div>
                        
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = DeleteProflie;