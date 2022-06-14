const watchEvents = (function () {
  var gtmInit = function () {
    window.dataLayer.push = push;
  };

  var push = function (data) {
    window.dataLayer = window.dataLayer.concat([data]);
    console.log('Data pushed!', data);
  };

  return {gtmInit: gtmInit};
})();

console.log('Script loaded!');
watchEvents.gtmInit();