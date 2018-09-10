'use strict';

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            key : 0
        }
    }
    back = () => {
        var newKey = 0;
        if (this.state.key == 0) {
            newKey = 3;
        } else {
            newKey = this.state.key - 1;
        }
        this.setState({
            key: newKey
        })
    }
    next = () => {
        var newKey = 0;
        if (this.state.key == 3) {
            newKey = 0;
        } else {
            newKey = this.state.key + 1;
        }
        this.setState({
            key: newKey
        })
    }

    render() {
        var images = [
            'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'
        ];
        setInterval(this.back,3000)

        return (
            <div>
                <center>
                    <h2 className="album">Album</h2>
                    <img src={images[this.state.key]} /><br />
                    <h3>{images[this.state.key]}</h3><br />
                    <button onClick={this.back}>Back</button>
                    <button onClick={this.next}>Next</button>
                </center>
            </div>
        );
    }
}


ReactDOM.render(
    <div className="body">
        <Slider/>
    </div>
    ,document.getElementById('root'));