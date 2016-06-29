// Get all elements starting with id origin and add tooltip
$("div[id^='origin']").each(function (index, element) {
  console.log($(this).attr('id'));
  var id = $(this).attr('id');

  $('#'+id).tooltipster({
    theme: 'tooltipster-shadow',
    // we detach the element from the page and give it to Tooltipster to serve as content
    content: $('#tooltip_content').detach(),    
    // if you use a single element as content for several tooltips, set this option to true
    contentCloning: false

  });
});