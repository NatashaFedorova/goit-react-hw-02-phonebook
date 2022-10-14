import { List, Item, About, BtnDelete } from './ContactList.styled';

export const ContactList = ({ visibleContacts, onClick }) => {
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <About>
              {name}: {number}
            </About>
            <BtnDelete type="button" onClick={() => onClick(id)}>
              Delete
            </BtnDelete>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
