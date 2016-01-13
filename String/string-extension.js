/**
 * Remove one character at the position given on a string
 * and return a new string without the character
 * @param {Number} index
 * @return {String} string
 */
String.prototype.removeCharAtIndex = function ( index ) {
    var tmpArray, stringToWorkOn;    
    stringToWorkOn = this.toString();

    // no sense the index is outside the string
    if( arguments[0] && typeof( index ) !== 'number' ){
        console.error('index parameter is not a number');
        return stringToWorkOn;
    }
    if( index > this.toString().length - 1 ){
        return stringToWorkOn;
    }

    index = index ? index : 0;

    // Allow to transform the string into an array.
    tmpArray = stringToWorkOn.split( '' );
    tmpArray.splice( index, 1 );

    return tmpArray.join( '' );
};

/**
 * Remove character(s) from the position given on a string
 * to another position in the string. It return a new string
 * without removed character.
 * @param {Number} index
 * @param {Number} range
 * @return {String} string
 */
String.prototype.removeFromIndexTo = function ( index, range ) {
    var range, tmpArray, stringToWorkOn;    
    
    // no sense the index is outside the string
    if( arguments[0] && typeof( index ) !== 'number' && typeof( range ) !== 'number' ){
        console.error('index parameter is not a number');
        return stringToWorkOn;
    }

    stringToWorkOn = this.toString();
    
    index = index ? ( ( index > stringToWorkOn.length ) ? stringToWorkOn.length - 1 : index ) : 0;
    range = range ? ( ( range > stringToWorkOn.length ) ? stringToWorkOn.length - 1 : range ) : 1;
    

    // Allow to transform the string into an array.
    tmpArray = stringToWorkOn.split( '' );
    tmpArray.splice( index, range );

    return tmpArray.join( '' );
};

/**
 * Repeat the string the amount of time specified
 * on first paramter. by default if first argument not given,
 * the value is 2
 * @param {Number} repeatTime
 * @return {String} string
 */
 String.prototype.repeat = function ( repeatTime ) {
     var stringToRepeat, tmpString, numberOfTime;

     tmpString = '';
     stringToRepeat = this.toString();
     numberOfTime = repeatTime ? repeatTime : 2;

     if( arguments[0] && typeof( repeatTime ) !== 'number' ){
         console.error('index parameter is not a number');
         return stringToRepeat;
     }

     for (var i = 0; i < numberOfTime; i++) {
         tmpString += stringToRepeat;
     }
     return tmpString;
 };


// Some test
var string = 'Florian test';

'String to test'.removeCharAtIndex();
'String to test'.removeCharAtIndex( -1 );
'String to test'.removeCharAtIndex( 'testString' );
'String to test'.removeCharAtIndex( 7 );
string.removeCharAtIndex( 150000 );
string.removeCharAtIndex( [] );

'String to test'.removeFromIndexTo( 6, 'String to test'.length );
'String to test'.removeFromIndexTo();
'String to test'.removeFromIndexTo( 10000, 1000 );
string.removeFromIndexTo( 0, 7 );
string.removeFromIndexTo( 0, '1ioj' );
string.removeFromIndexTo( 'eoqjoie', '1ioj' );

'String to test'.repeat( 10 );
'String to test'.repeat();
'String to test'.repeat( 'test' );
'String to test'.repeat( 3000 );

