import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

import {IconeSave} from '../IconeSave/IconeSave'
import iconePreto from '../../img/icon-save.svg'
import iconeBranco from '../../img/icon-not-save.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })
    
    if(this.state.curtido){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }

  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSave = () => {
    this.setState({
      salvo: !this.state.salvo
    }) 
  }

  render() {
    let iconeCurtida
    let iconeSalvar 

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    this.state.salvo? iconeSalvar = iconePreto : iconeSalvar = iconeBranco

    let componenteComentario

    if(this.state.comentando) {
      //SecaoComentario  é um componete
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
        <IconeSave icone={iconeSalvar}  onClickSave={this.onClickSave}/>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post