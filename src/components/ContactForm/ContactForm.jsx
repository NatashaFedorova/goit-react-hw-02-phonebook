// import * as yup from 'yup';
// import { Formik } from 'formik';
import { Form, Label, InputForm, BtnSubmit } from './ContactForm.styled';

// const schema = {
//   name: yup.string().required(),
//   number: yup.number().required(),
// };

const contact = {
  name: '',
  number: '',
};

const handleInputForm = e => {
  const { name, value } = e.target;
  contact[name] = value;
};

const ContactForm = ({ onSelect }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    onSelect(contact);
    contact.name = '';
    contact.number = '';
  };

  return (
    <Form onChange={handleInputForm} onSubmit={handleSubmit}>
      <Label>
        Name
        <InputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <InputForm
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <BtnSubmit type="submit">Add contact</BtnSubmit>
    </Form>
  );
};

export default ContactForm;
