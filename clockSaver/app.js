$(function(){

  var date = {};

  var $container = $( '#container' );

  // cache subClock
  var $subClock = $( '#subClock' );
  var $subHour = $subClock.find( '.hour' );
  var $subMinute = $subClock.find( '.minute' );
  var $subSecond = $subClock.find( '.second' );

  // cache analogClock
  var $analogClock = $( '#analogClock' );
  var $hourHand = $analogClock.find( '.hourHand' );
  var $minuteHand = $analogClock.find( '.minuteHand' );
  var $secondHand = $analogClock.find( '.secondHand' );

  // cache mainClock
  var $mainClock = $( '#mainClock' );
  var $mainYear = $mainClock.find( '.year' );
  var $mainMonth = $mainClock.find( '.month' );
  var $mainDay = $mainClock.find( '.day' );
  var $mainHour = $mainClock.find( '.hour' );
  var $mainMinute = $mainClock.find( '.minute' );
  var $mainSecond = $mainClock.find( '.second' );
  var $mainMillisecond = $mainClock.find( '.millisecond' );


  renderLowSpeed();
  renderHighSpeed();
  setInterval( renderLowSpeed, 1000 );
  setInterval( renderHighSpeed, 79 );


  function adjustNumLength( num, len ){
    return ( '' + ( Math.pow( 10, len ) + num ) ).slice( 1 );
  }

  function renderLowSpeed(){
    date.l = new Date();
    date.hour = adjustNumLength( date.l.getHours(), 2 );
    date.minute = adjustNumLength( date.l.getMinutes(), 2 );
    date.second = adjustNumLength( date.l.getSeconds(), 2 );

    // render mainClock
    $mainYear.empty().text( date.l.getFullYear() );
    $mainMonth.empty().text( adjustNumLength( date.l.getMonth() + 1, 2 ) );
    $mainDay.empty().text( adjustNumLength( date.l.getDate(), 2 ) );
    $mainHour.empty().text( date.hour );
    $mainMinute.empty().text( date.minute );
    $mainSecond.empty().text( date.second );

    // render subClock
    $subHour.empty().text( date.hour );
    $subMinute.empty().text( date.minute );
    $subSecond.empty().text( date.second );

    // render analogClock
    $hourHand.attr( 'style', createRotateStr( date.hour, 'h' ) );
    $minuteHand.attr( 'style', createRotateStr( date.minute, 'm' ) );
    $secondHand.attr( 'style', createRotateStr( date.second, 's' ) );
  }

  function renderHighSpeed(){
    date.h = new Date();
    date.millisecond = adjustNumLength( date.h.getMilliseconds(), 3 );

    // render mainClock
    $mainMillisecond.empty().text( date.millisecond );
  }

  function createRotateStr( time, type ){
    var deg = 0;
    switch ( type ){
      case 'h':
        deg = time * 30 + date.minute * 0.5;
        break;
      case 'm':
        deg = time * 6 + date.second * 0.1;
        break;
      case 's':
        deg = time * 6;
        break;
      default:
        break;
    }
    return '-webkit-transform:rotate(' + deg + 'deg);';
  }

  
});
