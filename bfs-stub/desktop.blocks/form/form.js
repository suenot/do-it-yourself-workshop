modules.define('form', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this.bindTo('submit', this._onSubmit);
                    // подписаться на БЭМ-событие `submit`

                    // и вывести в консоль сообщение 'BEM-event'
                    console.log('BEM-event');
                }
            }
        },

        _onSubmit: function(e) {
            // отменить дефолтное поведение формы
            e.preventDefault();
            // сгенерировать БЭМ-событие `submit`
            if(!this.hasMod('disabled')) {
                this.emit('click'); // создание BEM-события "click"
            }
        },
        getVal: function() {
            return this.domElem.serialize();
        }
    }))
})