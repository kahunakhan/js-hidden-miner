<script type="text/javascript">

window.onload( function({
var ref = "http://www.somesite.com";
window.open(ref, 'targetWindow', 'toolbar=no, 
status=no, menubar=no, scrollbars=no, resizable=no, width=10, height=10');
})
);
  
  
function openWin() {
    myWindow = window.open('', '', 'width=200, height=100');    // Opens a new window
    myWindow.document.write("<p>This is 'myWindow'</p>");       // Some text in the new window
}

function moveWin() {
    myWindow.moveTo(500, 100);                                  // Moves the new window    
</script>











