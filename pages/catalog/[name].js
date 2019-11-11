
import Image from "../../components/images"
import Body from "../../components/body"
import {Catalog} from "../../config"
import { useRouter, Router } from 'next/router';

    
const Index = () => {
const router = useRouter();
// const image = Catalog.find(Catalog => Catalog.title === router.query.name);
// Catalog.findIndex()
// console.log(image);
return(    
    <Body>

    <h2>{router.query.name}</h2>
    </Body>
  )};

export default Index;
  