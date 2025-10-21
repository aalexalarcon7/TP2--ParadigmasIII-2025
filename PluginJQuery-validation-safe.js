/* validation-safe.js */
(function (w, d) {

  // ---- Arranque seguro 
  function boot($) {
    var $form = $("#purchase-form");
    if ($form.length === 0) return;

    // Añadir name=… a tus inputs (
    // IDs actuales en tu comprar.html:
    var map = {
      name: "#name",
      address: "#address",
      phone: "#phone",
      email: "#email",
      payment_method: "#payment-method"
    };
    Object.keys(map).forEach(function (nm) {
      var el = $form.find(map[nm]);
      if (el.length && !el.attr("name")) el.attr("name", nm);
    });

    // El select de auto está fuera del form; creamos un hidden espejo para validarlo
    var $hidden = $form.find('input[name="producto"]');
    if ($hidden.length === 0) {
      $hidden = $('<input type="hidden" name="producto">').appendTo($form);
    }
    // Sincronizar con #auto-select si existe
    var $sel = $("#auto-select");
    var syncProducto = function(){
      if ($sel.length) $hidden.val($sel.val() || '');
    };
    $sel.on('change', syncProducto); syncProducto();

    // Reglas solo si el campo existe 
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

    // iniciar validator 
    $form.validate({
      rules: rules,
      messages: messages,
      focusInvalid: false
      
    });

    // hook minimo: si es invalido, frena - Si es valido, sigue el submit.
    $form.on("submit.validationSafe", function (e) {
      if (!$form.valid()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      }
    
    });
  }

  //  Cargar jQuery 
  function ensureAndBoot() {
    var hasJQ = !!w.jQuery;
    var hasValidate = hasJQ && !!w.jQuery.fn && !!w.jQuery.fn.validate;

    function inject(src, done){
      var s = d.createElement('script'); s.src = src; s.async = true; s.onload = done;
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
