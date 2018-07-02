String.prototype.toJadenCase = function () {
  var words = this.valueOf().split(' ');
  for ( var i = 0, len = words.length; i < len; i++ ) {
    words[ i ] = words[ i ].charAt(0).toUpperCase() + words[ i ].substr( 1 );
  }
  return words.join(' ').trim();
};
console.log("How can mirrors be real if our eyes aren't real".toJadenCase() );
