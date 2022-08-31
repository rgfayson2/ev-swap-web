import React from "react";

export default function Form() {
    return (

        <div className="Form">
            <div>
            <form action="/action_page.php">
  <label for="make">Make:</label><br/>
  <input type="text" id="make" name="make" value="enter car make"/><br/>
  <label for="model">Model:</label><br/>
  <input type="text" id="model" name="model" value="enter car model"/><br></br>
  <label for="year">Year:</label><br/>
  <input type="text" id="year" name="year" value="enter car year"/><br></br>
  <label for="color">Color:</label><br/>
  <input type="text" id="color" name="color" value="enter car color"/><br></br>
  <input type="submit" value="Submit"/>
</form>
            </div>
       
        </div>
    )
}