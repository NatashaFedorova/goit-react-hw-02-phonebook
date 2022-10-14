// import * as yup from 'yup';
// import { Formik } from 'formik';
// import { Form, Label, Input, BtnSubmit } from './ContactForm.styled';

// const schema = {
//   name: yup.string().required(),
//   number: yup.number().required(),
// };

// const initialValues = {
//   name: '',
//   number: '',
// };

// const handleInput = e => {
//   const { name, value } = e.target;
//   initialValues[name] = value;
// };

// const ContactForm = ({ addNewContact }) => {
//   const onSubmitFormik = (values, actions) => {
//     console.log(values, actions);
//     const { resetForm } = actions;
//     resetForm();
//   };
//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={onSubmitFormik}
//       validationSchema={schema}
//     >
//       <Form onChange={handleInput}>
//         <Label>
//           Name
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </Label>

//         <Label>
//           Number
//           <Input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </Label>
//         <BtnSubmit type="submit">Add contact</BtnSubmit>
//       </Form>
//     </Formik>
//   );
// };

// export default ContactForm;
