import React, { useState } from 'react';
import './styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCartPlus, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { Container, BannerCr7, Content, Nav, Carrinho, Section, Button, Figure } from './styles'

import logo from '../../assets/nike.png'
import tenis1 from '../../assets/nike1.png'
import tenis2 from '../../assets/nike2.png'

const Product = () => {

  const [img, setImg] = useState(tenis1)

  const onNext = () => {
    if (img === tenis1) {
      setImg(tenis2)
    }else if(img === tenis2) {
      setImg(tenis1)
    } 
  }

  return (

    <Container>
      <BannerCr7>
        <nav>
          <img src={logo} />
        </nav>
        <main>
          <button className='prev btn' onClick={onNext}><FontAwesomeIcon icon={faArrowLeft} /></button> 
          <img src={img} />
          <button className='next btn' onClick={onNext}><FontAwesomeIcon icon={faArrowRight} /></button>
        </main>
      </BannerCr7>
      <Content>
        <Nav>
          <ul>
            <li>FOR MEN</li>
            <li>WOMAN</li>
            <li>KIDS</li>
          </ul>
          <Carrinho>
            <FontAwesomeIcon icon={faCartPlus}/>
            <span className='search'><FontAwesomeIcon icon={faSearch}/></span>
            <span className='menu'><FontAwesomeIcon icon={faBars}/></span>
          </Carrinho>
        </Nav>
        <Section>
          <h1>mercurial superfly 360 elite</h1>
          <p>pra que sabe oque faz..| </p>
          <Button>Saiba Mais <FontAwesomeIcon icon={faArrowRight}/></Button>
          <Figure>
            <img src={tenis1} />
            <img src={tenis2} />
          </Figure>
        </Section>
      </Content>
    </Container>
  );
}

export default Product