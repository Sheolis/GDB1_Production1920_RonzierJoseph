var keyQuartier;
var keyRoom;
var keyObj;
var keyQuartierList = [];
var keyRoomList = [];
var keyObjList = [];
var iQuart;
var jRoom;
var kObj;
function getIndex(group, children){
  var i = 0;
  var iFinal = 0;
  group.children.iterate(function(child){
        console.log(child.texture.key, children.texture.key, i);
        if (child == children){
            iFinal = i;
        }
        i++ ;
  });
  return iFinal;
}
