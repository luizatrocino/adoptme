import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import BackArrow from "../../BackArrow";
import FormPerfil from "../../FormPerfil";
import Header from "../../Header";
import Logo from "../../Logo";
import OptionMenu from "../../OptionMenu";
import * as S from './styles'

const Perfil = () => {

  return (
    <Fragment>
      <Header logo="center">
      <BackArrow display = {'center'}/>
      <Logo margin = {'center'}/>
      <OptionMenu displayProfile="none"/>
      </Header>
      <Container>
        <S.StylesH3>Perfil</S.StylesH3>
        <FormPerfil/>
      </Container>
    </Fragment>

  )
}

export default Perfil;