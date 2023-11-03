import { createSlice } from '@reduxjs/toolkit';
import automotivoThumb from 'assets/categorias/thumbnail/automotivo.png';
import eletronicosThumb from 'assets/categorias/thumbnail/eletronicos.png';
import escritorioThumb from 'assets/categorias/thumbnail/escritorio.png';
import jogosThumb from 'assets/categorias/thumbnail/jogos.png';
import somThumb from 'assets/categorias/thumbnail/som.png';
import automotivoHeader from 'assets/categorias/header/automotivo.png';
import eletronicosHeader from 'assets/categorias/header/eletronicos.png';
import escritorioHeader from 'assets/categorias/header/escritorio.png';
import jogosHeader from 'assets/categorias/header/jogos.png';
import somHeader from 'assets/categorias/header/som.png';

const initialState = [{
  nome: 'Biblioteca',
  thumbnail: eletronicosThumb,
  header: eletronicosHeader,
  id: 'eletronicos',
  descricao: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui!'
}, {

}, {
  
}, {
  nome: 'Monitoria',
  thumbnail: escritorioThumb,
  header: escritorioHeader,
  id: 'escritorio',
  descricao: 'Tudo para o que escritório ficar incrível!'
}, {
 
}];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
});

export default categoriasSlice.reducer;