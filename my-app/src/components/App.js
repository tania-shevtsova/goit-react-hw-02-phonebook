import React, { Component } from "react";
import ContactForm from "./contact-form/ContactForm";
import uuid from "uuid";
import css from "./App.module.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: ""
  };

  handleChange = e => {
    const name = e.target.name;

    this.setState({ [name]: e.target.value });
    
  };

  handleChangeNumber = e => {
    const number = e.target.name;

    this.setState({
      [number]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  

    if (
      this.state.contacts.find(
        el => el.name.toLowerCase() === this.state.name.toLowerCase(),
      )
    ) {
      alert(`${this.state.name} already exists in your contact list`);
      this.setState({ name: ""});
      return;
    }

    // let handleNum=this.handleChangeNumber();
    // if(e.target.value===""){
    //   console.log('hmmm')
    // }
    

    const object = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, object]
    }));

    this.setState({ name: "", number: "" });
  };

  getValueFromForm = value => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, value]
      };
    });
  };

  onChangeInputFilter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  inputFilter = (contacts, filter) => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDelete=({id})=>{
    this.setState(prev=>({
      contacts: prev.contacts.filter(el=>el.id!==id)
    }))
  
  }

  render() {
    const filteredNames = this.inputFilter(
      this.state.contacts,
      this.state.filter
    );

    return (
      <>
        <ContactForm
          contacts={this.state.contacts}
          getValueFromForm={this.getValueFromForm}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleChangeNumber={this.handleChangeNumber}
          value={this.state.name}
          valuenum={this.state.number}
          name={this.state.contacts.name}
          arr={filteredNames}
          number={this.state.contacts.number}
          onChangeInputFilter={this.onChangeInputFilter}
          valueFilter={this.state.filter}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
