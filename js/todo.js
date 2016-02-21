var DATA = {
    notes: [
        "first",
        "second",
        "third"
    ]
};
var Todo = React.createClass({
    getInitialState(){
        return({editing: false})
    },
    editNote(){
        this.setState({editing: true})

    },
    deleteNote(){
        alert("deleting note")
    },
    saveNote(){
        this.setState({editing: false})
    },
    renderDisplay(){
        return (<div className="note">
            <p>{this.props.children}</p>
            <span>
                <button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.editNote}/>
                <button className="btn btn-danger glyphicon glyphicon-trash" onClick={this.deleteNote}/>
            </span>
        </div>);
    },
    renderForm(){
        return(<div className="note">
            <textarea className="form-control">{this.props.children}</textarea>
            <button className="btn btn-primary glyphicon glyphicon-floppy-disk" onClick={this.saveNote}/>
            </div>);
    },
    render(){
        if(this.state.editing){
            return this.renderForm()
        }else{
            return this.renderDisplay()
        }
    }
});
var Board = React.createClass({
    getInitialState(){
      return ({notes: []})
    },
    render(){
        return (<div>
            <Todo>HelloWorld</Todo>
            </div>);
    }
});
ReactDOM.render(<Board />,document.getElementById('container'));