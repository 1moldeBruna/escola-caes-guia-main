package hkeller.escolacaesguia.voluntario.controller;

import hkeller.escolacaesguia.cao.dto.RequisicaoCadastroCaoDto;
import hkeller.escolacaesguia.cao.repository.CaoRepositorio;
import hkeller.escolacaesguia.voluntario.dto.RequisicaoCadastroVoluntarioDto;
import hkeller.escolacaesguia.voluntario.model.Voluntario;
import hkeller.escolacaesguia.voluntario.repository.VoluntarioRepositorio;
import hkeller.escolacaesguia.voluntario.services.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import hkeller.escolacaesguia.voluntario.controller.VoluntarioRestController;

import java.util.List;

@Controller
@RequestMapping("/voluntarios")
public class VoluntarioController {

  @Autowired
  CaoRepositorio caoRepository;
  @Autowired
  CadastrarVoluntarioServico cadastrarVoluntarioServico;

  @Autowired
  ObterListaVoluntarioServico obterListaVoluntarioServico;

  @Autowired
  DeletarVoluntarioServico deletarVoluntarioServico;

  @Autowired
  ObterVoluntarioServico obterVoluntarioServico;

  @Autowired
  EditarVoluntarioServico editarVoluntarioServico;

  VoluntarioRepositorio voluntarioRepositorio;

  public VoluntarioController(VoluntarioRepositorio repository) {
    this.voluntarioRepositorio = repository;
  }

  //Envia o usuario para a tela de listagem dos voluntarios
  @GetMapping
  public String findAll(Model model) {
    List<Voluntario> voluntarios = voluntarioRepositorio.findAll();
    model.addAttribute("voluntario", voluntarios);
    return "voluntario/listagem";
  }



    //Envia o usuario para a tela de cadastr dos voluntarios
  @GetMapping("cadastro")
  public String getFormularioCadastro(Model model) {
    RequisicaoCadastroVoluntarioDto voluntario = new RequisicaoCadastroVoluntarioDto();
    model.addAttribute("voluntario", voluntario);

    //apresenta a listagem dos caes no formulario de cadastro dos voluntarios
    model.addAttribute("caes", caoRepository.findAll());
    return "voluntario/cadastro";

  }



  @PostMapping()
  public String post(@Valid @ModelAttribute("voluntario") RequisicaoCadastroVoluntarioDto voluntario, BindingResult result, Model model) {
    if (result.hasErrors()) {
      model.addAttribute("voluntario", voluntario);

      return "voluntario/cadastro";
    }

    cadastrarVoluntarioServico.executar(voluntario);
    return "redirect:/voluntarios";

  }

  @GetMapping("voluntarios")
  public String get(HttpServletRequest request, Model model) {
    String baseUrl = ServletUriComponentsBuilder
      .fromRequestUri(request)
      .replacePath(null)
      .build()
      .toUriString();

    model.addAttribute("baseUrl", baseUrl);

    return "voluntarios/listagem";
  }






  @GetMapping("{idVoluntario}/deletar")
  public String delete(@PathVariable("idVoluntario") Long id) {
    deletarVoluntarioServico.execute(id);

    return "redirect:/voluntario";
  }

  @GetMapping("{idVoluntario}/editar")
  public String formEditar(@PathVariable("idVoluntario") Long idVoluntario, Model model) {
    Voluntario voluntarioDto = obterVoluntarioServico.execute(idVoluntario);

    model.addAttribute("voluntario", voluntarioDto);

    return "voluntario/editar";
  }

//  @PostMapping("{idVoluntario}/editar")
//  public String editar(@PathVariable("idVoluntario") Long idVoluntario, @ModelAttribute("voluntario") VoluntarioDto voluntarioDto) {
//    voluntarioDto.setId(idVoluntario);
//    editarVoluntarioServico.execute(voluntarioDto);
//    return "redirect:/voluntario";
//  }
  @GetMapping("{idVoluntario}/visualizar")
  public String visualizar(@PathVariable("idVoluntario") Long idVoluntario, Model model) {
    Voluntario voluntarioDto = obterVoluntarioServico.execute(idVoluntario);

    model.addAttribute("voluntario", voluntarioDto);

    return "voluntario/visualizar";
  }

}

