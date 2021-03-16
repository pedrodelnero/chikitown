import contactFormStyles from '../../../styles/ContactPage/Form.module.css';
import emailjs from 'emailjs-com';

const Form = () => {
  console.log('id', process.env.NEXT_PUBLIC_USER_ID);
  const handleSubmitForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className={contactFormStyles.container}>
      <h1>CONTACT US</h1>
      <p>8838 SW 129th Terrace, Miami, FL 33176, USA</p>
      <button>hello@chikitown.com</button>
      <p>
        786.581.9701 - <strong>Send us a message via WhatsApp</strong>
      </p>
      <form onSubmit={handleSubmitForm} className={contactFormStyles.form}>
        <div>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email" name="email" />
        </div>
        <input type="text" placeholder="Subject" name="subject" />
        <textarea
          type="text"
          placeholder="Type your message here..."
          name="message"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
