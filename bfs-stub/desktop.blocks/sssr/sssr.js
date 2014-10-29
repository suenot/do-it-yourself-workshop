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
                            this._sendRequest(form.getVal());
                        }, this);
                    }
                },
                loading: {
                    true: function () {
                        $('.spin').bem('spin').setMod('progress');
                    },
                    '': function () {
                        $('.spin').bem('spin').delMod('progress');
                    }
                }
            },
            _sendRequest: function (formVal) {
                this.setMod('loading');
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
            _onSuccess: function (content) {
                console.log('ajax loaded');
                this.delMod('loading');
                BEMDOM.update(this.findBlockInside('content').domElem, content);
            }
        }
    ));
});
