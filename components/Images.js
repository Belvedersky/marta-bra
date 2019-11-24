import styled from 'styled-components'
import ProgressiveImage from "react-progressive-image"


const Images = props => {

    return (
      
        <ProgressiveImage 
        className="titleimage"
        src={props.src}
        placeholder={props.src}
        >
        {(src,loading) => (
           <img style={{ filter: loading ? "blur(2px)" : blur(0) }} src={src} className ={props.style || "catalog_image" } alt="Marta bra" />
        )}
        </ProgressiveImage>
    )
  }
  
export default Images
