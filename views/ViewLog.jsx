const React = require('react');
const Default = require('./layout/Default.jsx');

class ViewLog extends React.Component {
    render() {
        let log = this.props.log;
        return(
            <Default>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <p className="col-8 viewLogText my-3">{log.createdAt.toDateString()}</p>
                    </div>
                    <div className="row">
                        <h3 className="col-12 titleText">{log.title}</h3>
                    </div>
                    <div className="row">
                        <p className="col-5 viewLogText my-3">{log.loggedWeight}lbs</p>
                    </div>
                    <div className="row">
                        <p className="col-5 viewLogText my-3">{log.difference}lbs</p>
                    </div>
                    <div className="row" style={{marginBottom: "10%"}}>
                        <p className="col-10 mt-3" id="viewLogNotes">Notes:</p>
                        <p className="col-12 mt-3 pl-5" id="viewLogNotesText">{log.notes}</p>
                    </div>
                    <div className="row justify-content-around p-4 mb-5">
                        <a className="col-4 btn btn-outline-info viewLogText" href={`/healthly/edit/log/${log._id}`}>Edit</a>
                        <form className="col-4" action={`/healthly/deleteLog/${log._id}?_method=DELETE`} method="POST">
                            <input className="w-100 viewLogText btn btn-danger" type="submit" value="Delete"/>
                        </form>
                    </div>
                    <div className="row justify-content-center">
                        <a className="col-4 btn btn-secondary viewLogText" href={`/healthly/${log.owner}/home`}>Back</a>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = ViewLog;