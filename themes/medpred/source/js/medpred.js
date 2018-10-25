(function(){
    var sidebarNode = document.getElementById('sidebar');
    
    var scrollToActive = function() {
      var openedNode = sidebarNode.querySelector('li.active');
      if (openedNode) {
          var nodeTop = openedNode.getBoundingClientRect().top;
          var sidebarHeight = sidebarNode.offsetHeight;
          if (sidebarHeight < nodeTop) {
            sidebarNode.scrollTop = nodeTop - Math.round(sidebarHeight / 2);
          }
      }
    }
    
    var initSpa = function() {
      var app = new senna.App();
      app.addSurfaces(['main-section', 'sidebar']);
      sidebarNode.querySelectorAll('a').forEach(function(item){
        app.addRoutes(new senna.Route(item.getAttribute('href'), senna.HtmlScreen));
      });
    }
    
    initSpa();
    scrollToActive();

    function isBrowser(name) {
      return navigator.userAgent.toLowerCase().indexOf(name) >= 0;
    }

    // fix firefox history back bug
    if (isBrowser('firefox') || isBrowser('chrome')) {
      window.onpopstate = function() {
        window.location.reload();
      }
    }
})();
