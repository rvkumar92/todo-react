var Todo = React.createClass({
    getInitialState(){
        return({editing: false})
    },
    editNote(){
        this.setState({editing: true})
    },
    deleteNote(){
        this.props.onRemove(this.props.index)
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
            <textarea defaultValue={this.props.children} ref="noteValue" className="form-control"></textarea>
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
    addNote(text){
        var noteArray = this.state.notes;
        noteArray.push(text);
        this.setState({notes: noteArray})
    },
    updateNote(note,index){
        console.log("remove");
        var arrayNote = this.state.notes;
        noteArray[i] = note;
        this.setState({notes: noteArray[i]})
    },
    removeNote(index){
        var noteArray = this.state.notes;
        noteArray.splice(index,1);
        this.setState({notes: noteArray})
    },
    eachNote(note,i){
        return(
            <Todo key={i} index={i} onChange={this.updateNote} onRemove={this.removeNote}>{note}</Todo>
        )
    },
    render(){
        return (<div className="board">
            {this.state.notes.map(this.eachNote)}
            <button className="btn btn-sm glyphicon glyphicon-plus" onClick={this.addNote.bind(null,"New Note...")}/>
            </div>);
    }
});
ReactDOM.render(<Board />,document.getElementById('container'));