import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import initialContacts from '../initialContacts.json';
import { Title, TitleContactsSection } from './App.styled';
import { Background } from 'components/constants/Background.styled';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addNewContact = ({ name, number }) => {
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), name, number }, ...prevState.contacts],
    }));
  };

  filterContacts = () => {
    const filter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  };

  handleClickBtnDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.filterContacts();
    return (
      <Background>
        <Section>
          <Title>Phonebook</Title>
        </Section>
        <Section>
          <ContactForm onSelect={this.addNewContact} />
        </Section>
        <Section>
          <TitleContactsSection>Contacts</TitleContactsSection>
          <Filter value={filter} />
          <ContactList visibleContacts={visibleContacts} />
        </Section>
      </Background>
    );
  }
}
