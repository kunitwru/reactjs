'use strict'

class Note extends React.Component{
    render () {
        return (
            <tr>
                <td>
                    {this.props.children}
                </td>
                <td>
                    <img src={this.props.data.img} height='100' width='100' />
                </td>
            </tr>
        );
    }
}

class List extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            mang : [
                {name : 'Hà nội', img : 'img/1.jpg'},
                {name : 'Hồ gươm', img : 'img/2.jpg'},
                {name : 'Hồ tây', img : 'img/3.jpg'},
                {name : 'Thủy tạ', img : 'img/4.jpg'},
            ]
        }
        this.txtRef = React.createRef();
        this.imgRef = React.createRef();
    }
    add = () => {
        var newObj = {name : this.txtRef.current.value, img : this.imgRef.current.value};
        this.state.mang.push(newObj);
        this.setState({
            mang: this.state.mang
        })
        this.txtRef.current.value = ""
        this.imgRef.current.value = ""
    }
    render () {
        return (
            <div>
                <input type="text" ref={this.txtRef} className="form-control" placeholder="Địa điểm" />
                <input type="text" ref={this.imgRef} className="form-control" placeholder="Hình ảnh" />
                <button onClick={this.add}>Add</button>
                <table border="1" cellPadding="0" cellSpacing="0">
                    {
                        this.state.mang.map((item, key) =>
                            <Note key={key} data={item}>{item.name}</Note>
                        )
                    }
                </table>
            </div>

        );
    }
}

ReactDOM.render(
    <List/>
    ,document.getElementById('root'));