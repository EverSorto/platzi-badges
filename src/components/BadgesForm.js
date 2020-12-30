import React from "react";

class BadgeFrom extends React.Component {

  handleChange = (e)=>{
    console.log({value: e.target.value},  {name: e.target.name});
} 

handleClick = (e)=>{
    console.log("boton cliqiado");
} 

handleSubmit = (e)=>{
  e.preventDefault();
  console.log("Ejecutado desde el form como onsubmit")
} 

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input onChange={this.handleChange} class="form-control" type="text" name="firstName" />
          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeFrom;
