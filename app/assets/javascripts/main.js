$(document).on('turbolinks:load', function(){

  $('#searchTextField').keypress(function(e){
    if (e.which === 13) {
      $('#searchBtn').click();
    }
  });

  $('#searchBtn').on('click',function(e){
      e.preventDefault();
      $('#searchList').empty();
      $('#allItems').empty();
      var searchInput = $('#searchTextField').val();
      $.ajax({
        url: '/items',
        method: 'GET',
        data: {searchInput: searchInput},
        dataType: 'HTML'
      }).done(function(rData){
        $('#searchList').append(rData);
      });
  });

  $('#verify_button').on('click', function(event){
      event.preventDefault();
    $.ajax({
      url: $(this).attr('href'),
      method: 'PUT',
      data: {},
      dataType: 'JSON'
    }).done(function(responseData){
      location.reload();
    });
  });
});
