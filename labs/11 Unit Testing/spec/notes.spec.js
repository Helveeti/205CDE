describe('notes module', function () {
    beforeEach(function() {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });

    describe('adding a note', function() {

        it('should be able to add a new note', function () {
            expect(notes.add('sixth note')).toBe(true);
            expect(notes.count()).toBe(6);
        });

        it('should ignore blank notes', function () {
            expect(notes.add('')).toBe(false);
            expect(notes.count()).toBe(5);
        });

        it('should ignore notes containing only whitespace', function() {
            expect(notes.add('   ')).toBe(false);
            expect(notes.count()).toBe(5);
            pending();
        });

        it('should require a string parameter', function() {
            expect(notes.add()).toBe(false);
            expect(notes.count()).toBe(5);
            pending();
        });
    });

    describe('deleting a note', function() {
        it('should be able to delete the first index', function(){
            expect(notes.remove(0)).toBe(true);
        });
        it('should be able to delete the last index', function(){
            expect(notes.remove(0, -1)).toBe(true);
        });
        it('should return false if index is out of range', function(){
            expect(notes.remove(7)).toBe(false);
        });
        it('should return false if the parameter is missing', function(){
            expect(notes.remove()).toBe(false);
        });
    });

});

var notes = (function() {
    var list = [];

    return {
        add: function(note) {
            if (note) {
                var item = {timestamp: Date.now(), text: note};
                list.push(item);
                return true;
            }
            return false;
        },
        remove: function(index) {
            list.sort();

            for(var i = 0; i < list.length; i++){
                if(list[i] === list[index]){
                   list.splice(index);
                   return true;
                }
            }

            return false;
        },
        count: function() {
            return list.length;
        },
        list: function() {
            list.sort();
            return list;
        },
        find: function(str) {
            list.sort();

            if(list.indexOf(str)){
                return list.indexOf(str);
            }

            return false;
        },
        clear: function() {
            list.splice(0, list.length);
        }
    }
}());
