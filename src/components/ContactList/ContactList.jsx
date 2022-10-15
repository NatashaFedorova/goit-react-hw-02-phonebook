import PropTypes from 'prop-types';
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

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
