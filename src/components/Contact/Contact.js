import s from './Contact.module.css';

export default function Contact({ contact, deleteContact }) {
  return (
    <li className={s.item}>
      {contact.name}: {contact.number}{' '}
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  );
}
