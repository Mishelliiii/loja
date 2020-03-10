// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnodeloja18289$1.0.0/src/app/views/usuarios/cadastro/cadastro.marko",
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

  out.w("<!DOCTYPE html><html><head><title>MaryStore</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"></head><body style=\"background-color: #F8E0EC;\">");

  component_globals_tag({}, out);

  out.w("<img src=\"/caminho/MaryStore.png\" class=\"rounded mx-auto d-block\"><form><div class=\"form-row\"><div class=\"form-group col-md-4 col-lg-4\"><label for=\"Nome completinho\">Nome completo</label> <br> <input type=\"txt_Nome\" class=\"form-control\" id=\"inputNome50\" placeholder=\"txt_Nome\"></div><br><div class=\"form-group col-md-4 col-lg-4\"><label for=\"inputEmail4\">Email</label> <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\"></div><br><div class=\"form-group col-md-4 col-lg-4\"><label for=\"inputPassword4\">Senha</label><input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Senha\"></div></div><br><div class=\"form-group\"><label for=\"inputAddress\">Endereço</label><input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"Rua dos Bobos, nº 0\"></div><div class=\"form-group\"><label for=\"inputAddress2\">Endereço 2</label><input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Apartamento, hotel, casa, etc.\"></div><div class=\"form-row\"><div class=\"form-group col-md-6\"><label for=\"inputCity\">Cidade</label><input type=\"text\" class=\"form-control\" id=\"inputCity\"></div><div class=\"form-group col-md-4\"><label for=\"inputEstado\">Estado</label><select id=\"inputEstado\" class=\"form-control\"><option selected>...</option><option selected> Acre (AC) </option><option selected>Alagoas (AL) </option><option selected>Amapá (AP) </option><option selected>Amazonas (AM) </option><option selected>Bahia (BA) </option><option selected>Ceará (CE) </option><option selected>Distrito Federal (DF) </option><option selected>Espírito Santo (ES) </option><option selected>Goiás (GO) </option><option selected>Maranhão (MA) </option><option selected>Mato Grosso (MT) </option><option selected>Mato Grosso do Sul (MS) </option><option selected>Minas Gerais (MG) </option><option selected>Pará (PA) </option><option selected>Paraíba (PB) </option><option selected>Paraná (PR) </option><option selected>Pernambuco (PE) </option><option selected>Piauí (PI) </option><option selected>Rio de Janeiro (RJ) </option><option selected>Rio Grande do Norte (RN) </option><option selected>Rio Grande do Sul (RS) </option><option selected>Rondônia (RO) </option><option selected>Roraima (RR) </option><option selected>Santa Catarina (SC) </option><option selected>São Paulo (SP) </option><option selected>Sergipe (SE) </option><option selected>Tocantins (TO) </option></select></div><div class=\"form-group col-md-2\"><label for=\"inputCEP\">CEP</label><input type=\"text\" class=\"form-control\" id=\"inputCEP\"></div></div><div class=\"form-group\"><div class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\"><br><label class=\"form-check-label\" for=\"gridCheck\">Manterme conectado </label></div></div><button type=\"submit\" class=\"btn btn-primary\">Criar conta</button></form><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "73");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnodeloja18289$1.0.0/src/app/views/usuarios/cadastro/cadastro.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
