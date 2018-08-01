import React from "react";

class Form extends React.Component {

  render() {

    return(

      <form>

        <label>
          City:
          <input type="text" name="city" />
        </label>
        <input type="submit" value="Submit" />

      </form>

    );

  }

};

export default Form;