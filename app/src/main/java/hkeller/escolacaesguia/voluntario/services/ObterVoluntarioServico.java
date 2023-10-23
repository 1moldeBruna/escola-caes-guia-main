package hkeller.escolacaesguia.voluntario.services;

import hkeller.escolacaesguia.voluntario.model.Voluntario;
import hkeller.escolacaesguia.voluntario.repository.VoluntarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static hkeller.escolacaesguia.cao.mapper.CaoMapper.mapToCaoDto;
import static hkeller.escolacaesguia.voluntario.mapper.VoluntarioMapper.mapToVoluntario;

@Service
public class ObterVoluntarioServico {
  @Autowired
  VoluntarioRepositorio voluntarioRepositorio;
  public Voluntario execute(Long idVoluntario){
    Voluntario voluntario = voluntarioRepositorio.findById(idVoluntario).get();
    //return mapToVoluntario(voluntario);
    return voluntario;
  }
}



