(function ($, root, undefined) {$(function () {


$("p:contains('4sight Health')").html(function(_, html) {
   return html.replace(/(4sight Health)/g, '<span style="white-space:nowrap;">$1</span>');
});

});})(jQuery, this);