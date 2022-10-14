import * as yup from 'yup';
import { Formik } from 'formik';
import { Form, Label, InputForm, BtnSubmit } from './ContactForm.styled';

const schema = {
  name: yup.string().required(),
  number: yup.number().required(),
};

const newContact = {
  name: '',
  number: '',
};

const handleInputForm = e => {
  const { name, value } = e.target;
  newContact[name] = value;
};

const nameCheck = contacts => {
  const res = contacts.find(
    el => newContact.name.toLowerCase() === el.name.toLowerCase()
  );
  return res ? true : false;
};

const ContactForm = ({ contacts, onSelect }) => {
  const handleSubmit = e => {
    e.preventDefault();

    if (nameCheck(contacts)) {
      alert(`${newContact.name} is already in contact`);
      return;
    }

    onSelect(newContact);
    newContact.name = '';
    newContact.number = '';
    e.currentTarget.reset();
  };

  return (
    <Formik initialValues={newContact} validationSchema={schema}>
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
    </Formik>
  );
};

export default ContactForm;
