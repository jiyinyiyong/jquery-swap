
$ ->
  rerun = (t, f) -> setInterval f, t
  rerun 1000, ->  

    $('input').swap $('input').val() + "1"
    $('textarea').swap $('textarea').val() + "2"
    $('.editable').swap $('.editable').text() + "3"
