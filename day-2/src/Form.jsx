import React from "react";

const Form = () => {
  return (
    <div id="form">
      <form action="" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: "30px",
        height:'300px',
        width: '220px',
        backgroundColor: '#1c66b4',
        borderRadius: '20px',
        border: '2px solid black'

      }}>
        <input type="text" name="username" placeholder="Enter your name" />
        <input type="email" name="userEmail" placeholder="Enter your Email" />
        <input
          type="text"
          name="userMessage"
          placeholder="Enter your message"
        />
        <button type="submit"
        style={{
            borderRadius: '15px',
            backgroundColor: '#219356'
        }}
        >Submit</button>
      </form>
    </div>
  );
};

export default Form;
