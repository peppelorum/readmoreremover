
window.onload=(function() {
    'use strict';

    var needle = 'LÄS OCKSÅ';
    var found;

    found = document.evaluate('//*[text()="' + needle + '"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
     
    for ( var i=0 ; i < found.snapshotLength; i++ )
    {
      console.log('asdasdsadsadsadsadsdsad', found.snapshotItem(i).textContent );
      found.snapshotItem(i).parentNode.remove();
    }

})();
