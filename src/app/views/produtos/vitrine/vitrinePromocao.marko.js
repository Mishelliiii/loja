// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnodeloja18289$1.0.0/src/app/views/produtos/vitrine/vitrinePromocao.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><title>MaryStore</title><script src=\"https://kit.fontawesome.com/a076d05399.js\"></script><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-lg\" style=\"background-color: #F0FFFF;\"><br><img class=\"rouder\" width=\"150\" height=\"-100%\" src=\"/caminho/maryStore2.png\"><br><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#conteudoNavbarSuportado\" aria-controls=\"conteudoNavbarSuportado\" aria-expanded=\"false\" aria-label=\"Alterna navegação\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"conteudoNavbarSuportado\" textAli><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(página atual)</span></a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/login\">Login</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/vitrinePromocao\">Promoção da semana</a></li><li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Categorias</a><div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"><a class=\"dropdown-item\" href=\"/vitrine\">Saias middi</a><div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"/vitrineVestido\">Vestidos midi</a><div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"/vitrineSaltos\">Saltos</a></div></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/faleConosco\">Fale conosco</a></li></ul><form class=\"form-inline col-md-7 nav justify-content-center\"><input class=\"form-control mr-sm-2\" style=\"width:550px; height:120 center\" type=\"search\" placeholder=\"Pesquisar\" aria-label=\"Pesquisar\"><button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Pesquisar</button></form></div></nav><footer class=\"page-footer font-small cyan darken-3\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-50 py-5\"><div class=\"mb-10 flex-center\"><a class=\"fb-ic\"><i class=\"fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x\"></i></a><a class=\"tw-ic\"><i class=\"fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i></a><a class=\"gplus-ic\"><i class=\"fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i></a><a class=\"li-ic\"><i class=\"fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i></a><a class=\"ins-ic\"><i class=\"fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i></a><a class=\"pin-ic\"><i class=\"fab fa-pinterest fa-lg white-text fa-2x\"> </i></a></div></div></div></div><div class=\"footer-copyright text-center py-3\">© 2018 Copyright: <a href=\"https://mdbootstrap.com/education/bootstrap/\">MaryStore.com</a></div></footer><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "54");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnodeloja18289$1.0.0/src/app/views/produtos/vitrine/vitrinePromocao.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
