// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnodeloja18289$1.0.0/src/app/views/usuarios/login/login.marko",
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

  out.w("<!DOCTYPE html><html><head><title>MaryStore</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<img src=\"/caminho/MaryStore.png\" class=\"rounded mx-auto d-block\"><fieldset class=\"border p-5\"><legend class=\"w-auto\">Identificação</legend><form action=\"/action_page.php\" class=\"needs-validation\" novalidate><div class=\"form-group\"><label for=\"uname\">Usuario:</label><input type=\"text\" class=\"form-control\" id=\"uname\" placeholder=\"Enter username\" name=\"uname\" required><div class=\"valid-feedback\">Valid.</div><div class=\"invalid-feedback\">Please fill out this field.</div></div><div class=\"form-group\"><label for=\"pwd\">Senha:</label><input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\" required><div class=\"valid-feedback\">Valid.</div><div class=\"invalid-feedback\">Please fill out this field.</div></div><div class=\"form-group form-check\"><label class=\"form-check-label\"><input class=\"form-check-input\" type=\"checkbox\" name=\"remember\" required><br> <label>Manter-me conectado</label><div class=\"valid-feedback\">Valid.</div><div class=\"invalid-feedback\"></div></label></div><button type=\"submit\" class=\"btn btn-primary\" href=\"/login\">Submit</button></form><script>\r\n// Disable form submissions if there are invalid fields\r\n(function() {\r\n  'use strict';\r\n  window.addEventListener('load', function() {\r\n    // Get the forms we want to add validation styles to\r\n    var forms = document.getElementsByClassName('needs-validation');\r\n    // Loop over them and prevent submission\r\n    var validation = Array.prototype.filter.call(forms, function(form) {\r\n      form.addEventListener('submit', function(event) {\r\n        if (form.checkValidity() === false) {\r\n          event.preventDefault();\r\n          event.stopPropagation();\r\n        }\r\n        form.classList.add('was-validated');\r\n      }, false);\r\n    });\r\n  }, false);\r\n})();\r\n</script></fieldset><footer class=\"page-footer font-small cyan darken-3\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-50 py-5\"><div class=\"mb-10 flex-center\"><a class=\"fb-ic\"><i class=\"fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x\"></i></a><a class=\"tw-ic\"><i class=\"fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i></a><a class=\"gplus-ic\"><i class=\"fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i></a><a class=\"li-ic\"><i class=\"fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i></a><a class=\"ins-ic\"><i class=\"fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i></a><a class=\"pin-ic\"><i class=\"fab fa-pinterest fa-lg white-text fa-2x\"> </i></a></div></div></div></div><div class=\"footer-copyright text-center py-3\">© 2018 Copyright: <a href=\"https://mdbootstrap.com/education/bootstrap/\"> MDBootstrap.com</a></div></footer><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "48");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnodeloja18289$1.0.0/src/app/views/usuarios/login/login.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
