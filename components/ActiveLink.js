import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href, styled}) => {
  let link = ["/",router.pathname.split("/")[1]].join("")
  if (link == "/catalog"){
    link = "/"
  }

  const style = {
    color: link === href ? '#5b3b3b' : 'grey',
    textDecoration: "none",
    

    
  }
  // console.log(styled)
  if (styled =="toolbar"){
    style.color = link === href ? 'white' : '#5b3b3b'
    
  }

  if (styled =="sidebar"){
    style.color = link === href ? 'black' : 'grey'
  }
  const handleClick = e => {
    e.preventDefault()
    router.push(href)
    window.scrollTo(0,0)
  }

  return (
    <a href={href} onClick={handleClick} style={style} >
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)
