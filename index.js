$('.backgrounddiv').on("click", function(e)
	{
		var x=e.pageX;
		if(x>600)
		$('#scan').css({'display':'block','animation-name':'scan'});
		setTimeout(function()
			{
				$('#scan').css({'display':'none'})
			},1000)
	});

$('#contact').on('click',function()
	{
		$('.linkedin').css({"background-color":"transparent","font-size":"1em"});
		$('.mail').css({"background-color":"transparent","font-size":"1em"})


	});
$('#linkedin').on('click',function()
	{
		$('.linkedin').css({"background-color":"rgba(255,255,255,0.3)","font-size":"1.3rem"})
		$('.mail').css({"background-color":"transparent","font-size":"1em"})

	});
$('#email').on('click',function()
	{
		$('.mail').css({"background-color":"rgba(255,255,255,0.3)","font-size":"1.3rem"})
		$('.linkedin').css({"background-color":"transparent","font-size":"1em"});
		
	});