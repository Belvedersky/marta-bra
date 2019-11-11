import ActiveLink from './ActiveLink'

export default (props, style) => (
  <ul>
    <li>
      <ActiveLink styled={props.style} href='/'>КАТАЛОГ</ActiveLink>
    </li>
    <li>
      <ActiveLink styled={props.style} href='/cooperation'>СОТРУДНИЧЕСТВО</ActiveLink>
    </li>
    <li>
      <ActiveLink styled={props.style} href='/certificate'>СЕРТИФИКАТ</ActiveLink>
    </li>
    <li>
      <ActiveLink styled={props.style}  href='/contacts'>КОНТАКТЫ</ActiveLink>
    </li>
    
      {props.children}
  </ul>
)