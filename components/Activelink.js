import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href, styled}) => {
  const style = {
    color: router.pathname === href ? 'black' : 'grey',
    textDecoration: "none"
    
  }
  // console.log(styled)
  if (styled =="toolbar"){
    style.color = router.pathname === href ? 'white' : 'grey'
  }

  if (styled =="sidebar"){
    style.color = router.pathname === href ? 'black' : 'grey'
  }
  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style} >
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)