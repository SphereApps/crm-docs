(function(d){
    let scrollOffset = -36;
    let sidebarNode = d.getElementById('sidebar');
    let openedNode = sidebarNode.querySelector('li.opened');

    if (openedNode) {
        sidebarNode.scrollTop = openedNode.getBoundingClientRect().top + scrollOffset;
    }
})(document);
