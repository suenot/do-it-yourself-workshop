modules.define(
  'sssr',
  ['i-bem__dom', 'jquery'],
  function(provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name, {
      onSetMod: {
        js: {
          inited: function() {
            form = this.findBlockInside('form');
            form.on('submit', function () {
              this._sendRequest(form.getVal())
            }, this);
          }
        },
      },
      _sendRequest: function (formVal) {
        $.ajax({
          type: 'GET',
          dataType: 'html',
          cache: false,
          url: 'https://sssr.bem.yandex.net/search/',
          data: formVal + '&twitter=on',
          success: this._onSuccess,
          context: this
        });
      },
      _onSuccess: function () {
        console.log('ajax loaded');
      }
    }
  ));
});