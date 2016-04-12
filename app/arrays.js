exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return _.indexOf(arr, item);
  },

  sum : function(arr) {
    return _.reduce(arr, function(prev, curr){
      return prev + curr;
    });
  },

  remove : function(arr, item) {
    function recurse(arr, item){
      if(_.indexOf(arr, item) !== -1){
        recurse((arr.splice(_.indexOf(arr, item), 1), item))
      }
      else{
        return arr;
      }
    }

    return recurse(arr, item);


  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
