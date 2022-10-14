import { Component } from 'react';
import { Background } from 'components/constants/Background.styled';
import { Title } from 'components/constants/Title.styled';
import Section from 'components/Section';
// import ContactForm from 'components/ContactForm';
import {
  Form,
  Label,
  Input,
  BtnSubmit,
  TitleContactsSection,
  List,
  Item,
  Text,
  BtnDelete,
} from './App.styled';
import { nanoid } from 'nanoid';

// import * as yup from 'yup';
// import { Formik } from 'formik';

// const schema = {
//   name: yup.string().required(),
//   number: yup.number().required(),
// };

// const initialValues = {
//   name: '',
//   number: '',
// };

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleInputForm = e => {
    const { name, value } = e.target;
    this.setState(prevState => {
      prevState[name] = value;
    });
  };

  handleSubmit = e => {
    const form = e.currentTarget;
    e.preventDefault();
    this.addNewContact();
    form.reset();
    this.setState({
      name: '',
      number: '',
    });
  };

  addNewContact = () => {
    this.state.contacts.push({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const filter = this.state.filter.toLowerCase();
    const arr = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
    console.log(arr);
    return arr;
  };

  handleClickBtnDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.filterContacts();
    return (
      <Background>
        <Section>
          <Title>Phonebook</Title>
        </Section>
        <Section>
          <Form onSubmit={this.handleSubmit} onChange={this.handleInputForm}>
            <Label>
              Name
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </Label>

            <Label>
              Number
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </Label>
            <BtnSubmit type="submit">Add contact</BtnSubmit>
          </Form>
        </Section>
        <Section>
          <TitleContactsSection>Contacts</TitleContactsSection>
          <Text>Find contacts by name</Text>
          <Input
            type="text"
            name="filter"
            value={filter}
            onChange={this.changeFilter}
          />

          <List>
            {visibleContacts.map(({ id, name, number }) => {
              return (
                <Item key={id}>
                  <Text>
                    Name: {name} Number: {number}
                  </Text>
                  <BtnDelete
                    type="button"
                    onClick={() => this.handleClickBtnDelete(id)}
                  >
                    Delete
                  </BtnDelete>
                </Item>
              );
            })}
          </List>
        </Section>
      </Background>
    );
  }
}
