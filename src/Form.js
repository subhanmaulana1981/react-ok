import React, {Component} from "react";

class Form extends Component {
    initialState = {
        nama: "",
        pekerjaan: "",
    }
    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const {nama, pekerjaan} = this.state;

        return (
            <form> 
                <label htmlFor="nama">Nama</label>
                <input 
                    type="text"
                    name="nama"
                    id="nama"
                    value={nama}
                    onChange={this.handleChange}
                />
                <label htmlFor="pekerjaan">Pekerjaan</label>
                <input 
                    type="text"
                    name="pekerjaan"
                    id="pekerjaan"
                    value={pekerjaan}
                    onChange={this.handleChange}
                />
                <input 
                    type="button"
                    value="submit"
                    onClick={this.submitForm}
                />
            </form>
        );
    }
}

export default Form;