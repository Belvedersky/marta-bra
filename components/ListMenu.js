import ActiveLink from './ActiveLink'

export default (props) => (
  <ul>
    <li>
      <ActiveLink styled={props.styled} href='/'>КАТАЛОГ</ActiveLink>
    </li>
    <li>
      <ActiveLink styled={props.styled} href='/blog'>БЛОГ</ActiveLink>
    </li>
    <li>
      <ActiveLink styled={props.styled} href='/cooperation'>СОТРУДНИЧЕСТВО</ActiveLink>
    </li>
    <li>
      <ActiveLink styled={props.styled} href='/certificate'>СЕРТИФИКАТ</ActiveLink>
    </li>
    <li>
      <ActiveLink styled={props.styled}  href='/contacts'>КОНТАКТЫ</ActiveLink>
    </li>
    
      {props.children}
  </ul>
)
