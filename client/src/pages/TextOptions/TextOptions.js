import React, {Component} from "react"
import TextBox from "../../components/TextBox"

class TextOptions extends Component {
    handleinputchange = e => {
        const {name, value} =e.target
        this.setState({ [name]: value});
        this.setState({ message=""})
    }

    render () {
        return(
        <div>
            <TextBox />
        </div>
        )
    }
}

export default TextOptions;