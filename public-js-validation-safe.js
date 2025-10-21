/* validation-safe.js — jQuery Validation */
(function (w, d) {
  function boot($) {
    var $form = $("#purchase-form");
    if ($form.length === 0) return;

    // asegurar name=… 
    var map = {
      name: "#name",
      address: "#address",
      phone: "#phone",
      email: "#email",
      payment_method: "#payment-method"
    };
    Object.keys(map).forEach(function (nm) {
      var $el = $form.find(map[nm]);
      if ($el.length && !$el.attr("name")) $el.attr("name", nm);
    });

    // espejo del select de auto 
    var $hidden = $form.find('input[name="producto"]');
    if ($hidden.length === 0) {
      $hidden = $('<input type="hidden" name="producto">').appendTo($form);
    }
    var $sel = $("#auto-select");
    var syncProducto = function(){ if ($sel.length) $hidden.val($sel.val() || ""); };
    $sel.on("change", syncProducto); syncProducto();

    //  (borde rojo + texto de error)
    if (!d.getElementById("validation-safe-css")) {
      var style = d.createElement("style");
      style.id = "validation-safe-css";
      style.textContent = `
        .vs-error { font-size:.9rem; margin-top:.25rem; display:block; }
        .vs-invalid { outline:2px solid #e63946; outline-offset: 0; }
      `;
      d.head.appendChild(style);
    }

    // reglas solo para campos existentes
    var rules = {}, messages = {};
    function addRule(name, rule, msg){
      if ($form.find('[name="'+name+'"]').length){
        rules[name] = rule; messages[name] = msg || {};
      }
    }
    addRule("producto",       { required: true }, { required: "Seleccioná un auto" });
    addRule("name",           { required: true, minlength: 2 },
                                { required: "Ingresá tu nombre", minlength: "Mínimo 2 caracteres" });
    addRule("address",        { required: true, minlength: 5 },
                                { required: "Ingresá tu dirección", minlength: "Demasiado corta" });
    addRule("phone",          { required: true, digits: true, minlength: 7 },
                                { required: "Ingresá tu teléfono", digits: "Sólo números", minlength: "Muy corto" });
    addRule("email",          { required: true, email: true },
                                { required: "Ingresá tu email", email: "Formato inválido" });
    addRule("payment_method", { required: true },
                                { required: "Elegí un método de pago" });

    if (Object.keys(rules).length === 0) return;

    // inicializar el validador con mensajes VISIBLES
    $form.validate({
      rules: rules,
      messages: messages,
      focusInvalid: false,
      errorElement: "span",
      errorClass: "vs-error",
      highlight: function (el) { el.classList.add("vs-invalid"); },
      unhighlight: function (el) { el.classList.remove("vs-invalid"); },
      errorPlacement: function (error, element) {
        // Colocar el mensaje debajo del campo 
        if (element.parent().is("label")) error.insertAfter(element.parent());
        else error.insertAfter(element);
      }
      
    });

    // validacion al salir de cada campo 
    $form.find("input, select, textarea").on("blur change", function(){
      $(this).valid(); // muestra/oculta mensaje en ese campo
    });

    //  submit: si hay errores, frena. Si no, deja que el JS siga
    $form.on("submit.validationSafe", function (e) {
      if (!$form.valid()) { e.preventDefault(); e.stopImmediatePropagation(); return false; }
    });

    console.log("validation-safe: inicializado");
  }

  // carga dependencias solo si faltan
  function ensureAndBoot() {
    var hasJQ = !!w.jQuery;
    var hasValidate = hasJQ && !!w.jQuery.fn && !!w.jQuery.fn.validate;

    function inject(src, done){
      var s = d.createElement("script"); s.src = src; s.async = true; s.onload = done;
      (d.body || d.head).appendChild(s);
    }
    if (hasValidate) return boot(w.jQuery);

    if (!hasJQ) {
      inject("https://code.jquery.com/jquery-3.7.1.min.js", function(){
        inject("https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.min.js", function(){
          boot(w.jQuery);
        });
      });
    } else {
      inject("https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.min.js", function(){
        boot(w.jQuery);
      });
    }
  }

  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", ensureAndBoot);
  else ensureAndBoot();
})(window, document);


