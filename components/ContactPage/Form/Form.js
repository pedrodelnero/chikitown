import contactFormStyles from '../../../styles/ContactPage/Form.module.css';

const Form = () => {
  return (
    <div className={contactFormStyles.container}>
      <h1>CONTACT US</h1>
      <p>8838 SW 129th Terrace, Miami, FL 33176, USA</p>
      <button>hello@chikitown.com</button>
      <p>
        786.581.9701 - <strong>Send us a message via WhatsApp</strong>
      </p>
      <form className={contactFormStyles.form}>
        <div>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email"></input>
        </div>
        <input type="text" placeholder="Subject"></input>
        <textarea
          type="text"
          placeholder="Type your message here..."
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
