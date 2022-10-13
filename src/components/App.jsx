import { Component } from 'react';
import { Background } from 'components/constants/Background.styled';
import { Title } from 'components/constants/Title.styled';
import Section from 'components/Section';
import Form from 'components/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <Background>
        <Section>
          <Title>Phonebook</Title>
        </Section>
        <Section>
          <Form />
        </Section>
      </Background>
    );
  }
}
