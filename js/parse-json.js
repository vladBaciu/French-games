$.getJSON('https://github.com/vladBaciu/French-games/blob/master/verbe.json&callback=?', function(data){
$('#output').html(data.contents);
});