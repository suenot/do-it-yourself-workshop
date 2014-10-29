modules.define(
    'form',
    ['i-bem__dom'],
    function(provide, BEMDOM) {
        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function() {
                        this.bindTo('submit', this._onSubmit);
                        // this.bindTo('submit', function() {
                        // });
                    }
                }
            },
            _onSubmit: function (e) {
                e.preventDefault();
                // console.log('prevented')
                this.emit('submit', this.getVal());
            },
            getVal: function() {
                return this.domElem.serialize();
            }
        }
    ));
});