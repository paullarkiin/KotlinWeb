(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinInTheBrowser'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinInTheBrowser'.");
    }root.kotlinInTheBrowser = factory(typeof kotlinInTheBrowser === 'undefined' ? {} : kotlinInTheBrowser, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.collections.random_iscd7z$;
  function main() {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.getElementById('myCanvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var ctx = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    for (var index = 0; index < 50; index++) {
      ctx.beginPath();
      ctx.fillStyle = random(listOf(['red', 'green', 'blue']), Random.Default);
      ctx.rect(randomCoordinate(), randomCoordinate(), 20.0, 20.0);
      ctx.fill();
      ctx.closePath();
    }
  }
  function randomCoordinate() {
    return Random.Default.nextDouble_lu1900$(0.0, 200.0);
  }
  _.main = main;
  _.randomCoordinate = randomCoordinate;
  main();
  Kotlin.defineModule('kotlinInTheBrowser', _);
  return _;
}));

//# sourceMappingURL=kotlinInTheBrowser.js.map
