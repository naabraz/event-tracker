import { useSetRecoilState } from 'recoil';

import { listaDeEventosState } from '../atom';
import { obterId } from '../../util';
import { IEvento } from '../../interfaces/IEvento';

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    const hoje = new Date();

    if (evento.inicio < hoje) {
      throw new Error(
        'Eventos não podem ser cadastrados com data menor do que a atual'
      );
    }

    evento.id = obterId();
    return setListaDeEventos((listaAntiga) => [...listaAntiga, evento]);
  };
};

export default useAdicionarEvento;
