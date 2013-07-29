var queries = [
{
    context: 'global',
    callback: function() {
        $('img').each(function(index) {
            var small = $(this).attr('src');
            $(this).attr('src',small);
        });
    }
},
{
    context: 'tablet',
    callback: function() {
        $('img').each(function(index) {
            var medium = $(this).data('medium');
            $(this).attr('src',medium);
        });
    }
},
{
    context: 'desktop',
    callback: function() {
        $('img').each(function(index) {
            var large = $(this).data('large');
            $(this).attr('src',large);
        });
    }
}
];
MQ.init(queries);