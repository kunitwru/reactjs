'use strict';
var list;
class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onEdit :  false
        }
        this.txtEditRef = React.createRef();
    }
    
    delete = (e) => {
        var obj = this.props.obj;
        $.post('/delete', {id : e}, function(data){
            obj.setState({
                mang : data
            })
        })
    }
    edit = () => {
        this.setState({
            onEdit : true
        })
    }
    cancel = () => {
        this.setState ({
            onEdit : false
        })
    }
    save = () => {
        var txtEdit = this.txtEditRef.current.value;
        if(!txtEdit) {
            return false;
        }
        var obj = this.props.obj;
        $.post('/save', {id: this.props.index, txtEdit : txtEdit}, function(data){
            obj.setState({
                mang : data
            })
        })
        this.setState ({
            onEdit : false
        })
    }
    render() {
        if (this.state.onEdit) {
            return (
                <div className="div-note">
                    <input type="text" defaultValue={this.props.children} ref={this.txtEditRef} />
                    <button onClick={this.cancel}>Canel</button>
                    <button onClick={this.save}>Save</button>
                </div>
            );
        }else {
            return (
                <div className="div-note">
                    <span>{this.props.children}</span><br />
                    <button onClick={(e) => this.delete(this.props.index)}>Xóa</button>
                    <button onClick={this.edit}>Sửa</button>
                </div>
            );
        }
    }
}

class List extends React.Component {
    list = this;
    constructor(props) {
        super(props);
        this.state = {
            mang : []
        }
    }
    addDiv = () => {
        ReactDOM.render(
            <InputTag obj={this} />, document.getElementById('div-add')
        )
    }
    // get list from server
    componentDidMount() {
        var that = this;
        $.get('/getNote', function(data){
            that.setState({
                mang: data
            })
        })
    }
    render() {
        return (
            <div>
                <div id="div-add"></div>
                <button onClick={this.addDiv}>Thêm mới</button>
                {
                    this.state.mang.map((item, key) => 
                        <Note obj={this} key={key} index={key}>{item}</Note>
                    )
                }
            </div>
        );
    }
}

class InputTag extends React.Component {

    constructor(props) {
        super(props)
        this.txtNoteRef = React.createRef();
    }
    send = () => {
        var txtNote = this.txtNoteRef.current.value;
        if(!txtNote) {
            return false;
        }
        var obj = this.props.obj;
        $.post('/add', {note : txtNote}, function(data){
            obj.setState({
                mang : data
            })
        })

        this.txtNoteRef.current.value = ""
        ReactDOM.unmountComponentAtNode(document.getElementById('div-add'))
        
    }
    render() {
      return (
        <div>
          <input type="text" ref={this.txtNoteRef} />
          <button onClick={this.send}>Send</button>
        </div>
      )
    }
}
var obj = {
    name : "PhamSinh",
    age : 23
}
var obj2 = {...obj};
obj.age = 1000
console.log('Obj : ', obj.age)
console.log('Obj 2 : ', obj2.age)
ReactDOM.render(
    <div className="list-note">
        <List />
    </div>
    ,document.getElementById('root'));