'use strict';
function getName (e) {
    alert(e);
}

class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sohocvien : parseInt(this.props.sohocvien),
            giaovienchunhiem: "Pham Sinh"
        }
    }

    addStudent = () => {
        this.setState({
            sohocvien : this.state.sohocvien + 1
        });
    }


    getInfo(e) {
        alert(e)
    }
    render() {
        return (
            <div>
                <h1>{this.props.children} </h1>
                <KhoaHoc monhoc={ this.props.monhoc} />
                <p>
                    Số học viên : {this.state.sohocvien}
                    <button onClick={this.addStudent}>Thêm học viên</button>
                </p>
                <button onClick={(e) => this.getInfo(this.props.children)}>Action</button>
                <button onClick={(e) => getName(this.props.monhoc)}>Name</button>
            </div>
        
        );
    }
}

class KhoaHoc extends React.Component {
    render () {
        return (
            <div>
                <h4>Môn học : {this.props.monhoc}</h4>
            </div>
        );
    }
}

class InputTag extends React.Component {
    constructor (props) {
        super(props)
        this.txtRef = React.createRef();
        this.slRef = React.createRef();
    }

    show = () => {
        var text = this.txtRef.current.value;
        var sl = this.slRef.current.value
        console.log(sl)
    }
    render () {
        return (
            <div>
                <select ref={this.slRef}>
                    <option value="1">Một</option>
                    <option value="2">Hai</option>
                    <option value="3">Ba</option>
                </select>
                <input type="text" ref={this.txtRef} />
                <button onClick={this.show}>Show</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div className="body">
        {/*<Student monhoc="Toán" sohocvien = "24">Pham Van Sinh</Student>*/}
        {/*<Student monhoc="Văn" sohocvien="20">Giang thi Tinh</Student>*/}
        <InputTag/>

    </div>
    ,document.getElementById('root'));