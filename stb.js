var i=0
var imgarr=$('.li_inner_center');
var outerdiv=$('.li_inner_top')
var windowh=document.body.clientHeight;
var windoww=document.body.clientWidth;
var oh=windowh*0.55*0.7*0.33*0.7;
var ow=windoww*0.8*0.25;
var num=1.3;
var height=windowh*0.55*0.7*0.33*0.7*0.5;
var iconarr=$('.li_icon_outer_small');
var len = iconarr.length;
var tsr=height;
var appH=$('.appouter').height();

 var appdiv=$('.appouter').css({
 	'width':windowh*0.8*0.15,
 });
 /*$('.page-3 .app').css({
 	'margin-top':-windowh*0.8*0.15*0.8/2
 })*/





(function()
{
	for(var i=0;i<len;i++)
	{	
		iconarr[i].style.width=height+'px';	
		iconarr[i].style.top=(oh-height)/2+'px';
		iconarr[i].style.left=(ow-height)/2+'px';
	}
	
	for(var k=0;k<len;k++)
	{
		imgarr[k].style.width=height*0.6+'px';
		imgarr[k].style.top=(oh-height*0.6)/2+'px';
		imgarr[k].style.left=(ow-height*0.6)/2+'px';
	}
}
)()	

function stm()
{
	var iconarr=$('.li_icon_outer_small');
	var len = iconarr.length;
	if(i == 0)	
	{	
		iconarr[len-1].style.height=tsr+'px';
		iconarr[len-1].style.width=tsr+'px';
		iconarr[i].style.height=tsr*num+'px';
		iconarr[i++].style.width=tsr*num+'px';
		iconarr[i-1].style.left=(ow-tsr*num)/2+'px';
		iconarr[i-1].style.top=(oh-tsr*num)/2+'px';
		iconarr[len-1].style.left=(ow-tsr)/2+'px';
		iconarr[len-1].style.top=(oh-tsr)/2+'px';


		
	}
	else if( i < len-1)
	{
		iconarr[i-1].style.height=tsr+'px';
		iconarr[i-1].style.width=tsr+'px';
		iconarr[i-1].style.left=(ow-tsr)/2+'px';
		iconarr[i-1].style.top=(oh-tsr)/2+'px';
		iconarr[i].style.height=tsr*num+'px';
		iconarr[i++].style.width=tsr*num+'px';
		iconarr[i-1].style.left=(ow-tsr*num)/2+'px';
		iconarr[i-1].style.top=(oh-tsr*num)/2+'px';
		
	}
	else if( i == len -1 )
	{
		iconarr[i-1].style.height=tsr+'px';
		iconarr[i-1].style.width=tsr+'px';
		iconarr[i-1].style.left=(ow-tsr)/2+'px';
		iconarr[i-1].style.top=(oh-tsr)/2+'px';
		iconarr[i].style.height=tsr*num+'px';
		iconarr[i++].style.width=tsr*num+'px';
		iconarr[i-1].style.left=(ow-tsr*num)/2+'px';
		iconarr[i-1].style.top=(oh-tsr*num)/2+'px';
		i = 0;
	}

}

setInterval(stm,300);


