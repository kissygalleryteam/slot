KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('slot', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','gallery/slot/1.0/']});