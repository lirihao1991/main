window.onload = function() {
  new appTouch({
  tContain : 'appArea_c', //滑动区域id
  tMove : 'moveArea1', //移动区域id
  tMove2:'moveArea_c'
 }, onmoveend);
 //到顶/底回调
 function onmoveend(m) {
  //console.log(m);
 }

}
/*=====================
 * 名称: appTouchfixed
 * 功能: 滑动模拟组件
 * 参数: 相关配置
 ======================*/
var appTouch = function(config, callback) {
 this.touchContain = config.tContain;
 this.touchMove = config.tMove;
 this.touchMove2=config.tMove2;
 this.callbackfn = callback;
 this.move();

}

appTouch.prototype = {
 move : function(e) {
  var monitor = document.getElementById(this.touchContain), //监听容器
  target = document.getElementById(this.touchMove), //移动目标
  callbackfn = this.callbackfn, //回调函数
  appAreadir=[],//滑动区域字典
  flg = false, //标记是否滑动
  startX, //标记起始位置
  startY,
  startLeft, //标记滑动起始时距离左边的位置
  move = 0,
  returnm=0, //回位标记
  clientwidth=document.body.offsetWidth,
  targetwidth=target.offsetWidth,
  vir=0,
  rightmax=0-(target.offsetWidth-clientwidth);//移动距离
   
  var appmove = $('.moveArea_c')
  
  for (var c=0;c<appmove.length;c++)

  {
	if(c)
	{appmove[c].style.width=clientwidth+'px'}
  }
 
  (function getByClass(sclass,tclass)  //定义参数（父节点，class名）
	{
		var aEle=document.getElementsByTagName('div');  
		//定义一个空的数组，用来装所有的选出元素

		var m=0;
		var m1=0;
		for(var i=0;i<aEle.length;i++)
		{
			
			if(aEle[i].className==sclass)   
			{
				var arr=[];
				
				aEle[i].index=m++;
		
				arr.push(aEle[i]);
				var arr1=aEle[i].getElementsByTagName('div');
				for(var j=0;j<arr1.length;j++)
					{	
						if (arr1[j].className==tclass)
						arr1[j].index=m1++;
						{arr.push(arr1[j])
					}			
				//将选出的所有元素装入数组中
				
				}
			appAreadir.push(arr);

			}
		}})(this.touchContain,this.touchMove2);
		
		

      //  循环完成后，返回数组里的值


  //移动设备触摸事件注册
	
	for (i=0;i<appAreadir.length;i++)
		{	
			addEvent(appAreadir[i][0], 'touchstart', moveStart);
			addEvent(appAreadir[i][0], 'touchmove', moveIn);
			addEvent(appAreadir[i][0], 'touchend', moveEnd);
		}
  /*事件监听 */
  function addEvent(el, type, fn) {
   if (el.addEventListener) {
    el.addEventListener(type, fn, false)
	
   } else if (el.attachEvent) {
    el.attachEvent('on' + type, fn);

   } else {
    el['on' + type] = fn;
   }
  }

  /*取消浏览器默认行为*/
  function stop(e) {
   //Opera/Chrome/FF
   if (e.preventDefault)
    e.preventDefault();
   //IE
   e.returnValue = false;
  }
  


  /*惯性缓动参数*/
  var lastMoveTime = 0;
  var lastMoveStart = 0;
  var stopInertiaMove = false;
  var nowapp=this;


  /*移动触发*/
  function moveStart(e) {
   var n=(this.index);
   target=appAreadir[n][1];

   for (var i=0;i<appAreadir.length;i++)
		{
		
		
			
			if (i!=n)
			{appAreadir[i][1].style.left=0;}

		}

 
   stop(e);
   flg = true;
   

   if (e.touches)
   e = e.touches[0];	
   
   startX = e.clientX;
   startLeft = target.style.left;
 

   /*惯性缓动*/
   lastMoveStart = startX;
   lastMoveTime = new Date().getTime();
   stopInertiaMove = true;
 
  }

  /*移动过程中*/
  function moveIn(e) {
   if (flg) {
    stop(e);
    if (e.touches)
     e = e.touches[0];
    move = e.clientX - startX;
	/*非左端及右端*/
	var delpx=startLeft.replace('px','');
	target.style.left=move+parseInt(delpx)+'px';
	
	/*阻塞*/
	if (parseInt(target.style.left.replace("px",""))>0||(parseInt(target.style.left.replace("px",""))<rightmax))
		{
			target.style.left=move*0.5+parseInt(delpx)+'px';
			
		}
	/*更新缓动时间*/
	var nowTime = new Date().getTime();
    stopInertiaMove = true;
    if (nowTime - lastMoveTime > 300) {
    lastMoveTime = nowTime;
    lastMoveStart = e.clientx;
	
	
			}
	}
	}
			
   function moveEnd(e) {
   stop(e);
   rightmax=0-(target.offsetWidth-clientwidth)
   if (e.touches)
    e = e.touches[0];
	flg = false;
	target.flg=false;


	/*惯性*/
/*	var nowTime = new Date().getTime();
	var v = (e.clientX - lastMoveStart) / (nowTime - lastMoveTime);

		if (v>0)
			{
				
			}
		else if (v<0)
			{
			
			}
	
	*/
	/*左右边界标记*/
	if (parseInt(target.style.left.replace("px",""))>0)
	{	
		returnm=1;
		
	}
	else if(parseInt(target.style.left.replace("px",""))<rightmax)
	
	{
		returnm=2;
	}

	/*判断距距离回原位*/
	if (Math.abs(move)<50&&!returnm)
		{
			var returnposition=Math.abs(parseInt(target.style.left.replace("px",""))-parseInt(startLeft.replace('px','')));			
			function back1()
			{	
				if (returnposition>0&&move>0)                                                      /*判断方向*/
				{
					target.style.left=left-1+'px';
					returnposition--;
					
				}
				else if (returnposition>0&&move<0)
				{
					target.style.left=parseInt(target.style.left.replace("px",""))+1+'px';
					returnposition--;
			
				}
				else
				{
					clearInterval(x);
				}
			    
			}
		var x=setInterval(back1,20);	
		}
	/*判断是否是边界*/	
	else if(returnm==1)
		{	
			var returnposition=(parseInt(target.style.left.replace("px","")));
			function back()
			{

				
				if (returnposition>0)
				{
					if(flg)
						{
						 clearInterval(x);
						}
						
					
					target.style.left=parseInt(target.style.left.replace("px",""))-5+'px';
					returnposition-=5;
				}
				else
				{
					clearInterval(x);
					returnm=0;         //重置
				}
	
			
			}
			var x=setInterval(back,1)
			
		}
	else if(returnm==2)
		{	
			var returnposition=Math.abs((parseInt(target.style.left.replace("px",""))-rightmax));
		
			
			function back2()
			{
			if (returnposition>0)
				{
				if(flg)
						{
						 clearInterval(x);
						}
				target.style.left=parseInt(target.style.left.replace("px",""))+2+'px';
				returnposition-=2;
				}
			else
				{
				clearInterval(x);
				returnm=0;      //重置
				}
			}
		var x=setInterval(back2,1);
		}
		move=0;
   }
	var soa=$('.appshow_outer')      //获取触摸对象
	var sia=$('.appArea_c')		 //获取移动对象 
	var sz=$('.cross_img')


	var k=0;
	flg2=true;
	STime=0;
	timera=0;
	function se(wocao)
	{
					var starttop=wocao.offsetTop+2;
					var i=wocao.index;					
					var move1=sia[0].offsetHeight;
					console.log("cl="+wocao.flg1)
					if(!wocao.flg1)
					{sia[i].style.top=starttop-wocao.offsetHeight+'px';	
					 sz[i].className="cross_imgend";
					function ret()
						{
					
						//console.log('stt='+sia[i].style.top)
						//console.log('move='+move1)
								
								if(move1>0)
								{	
									sia[i].style.top=parseInt(sia[i].style.top.replace('px'))+5+'px';
									if(i+1!=soa.length)
										{soa[i+1].style.marginTop=k+5+'px';}
									k+=5;
									move1-=5;
								
								}
								else
								{
									move1=sia[0].offsetHeight;
									k=0;
									clearInterval(a);
									soa[i].flg1=true;
									flg2=false;
								
								
								}
						}
					var a=setInterval(ret,1);
					STime=FTime;
				
					sia[i].style.zIndex='1';
					}
						else
						{
						sz[i].className="cross_img";
						function  ret1()
						{
					
						//console.log('stt='+sia[i].style.top)
						//console.log('move='+move1)
								
								if(move1>0)
								{	
									sia[i].style.top=parseInt(sia[i].style.top.replace('px'))-2+'px';
									if(i+1!=soa.length)
										{soa[i+1].style.marginTop=parseInt(soa[i+1].style.marginTop.replace('px'))-5+'px';}
										move1-=5;
								
								}
								else
								{
									move1=sia[0].offsetHeight;
									k=0;
									clearInterval(c);
								    soa[i].flg1=false;
									flg2=false;
									sia[i].style.top=0+'px'
								
								
								}
						}
					
					var c=setInterval(ret1,1);
					STime=FTime;
				
					sia[i].style.zIndex='1';
					}
	}
					
	
	function addEvent(el, type, fn) 
	{	
		if (el.addEventListener) 
		{
			el.addEventListener(type, fn, false);
		} 	else if (el.attachEvent) 
			{
				el.attachEvent('on' + type, fn);
			} else 
			{
				el['on' + type] = fn;
			}
	}
	

	(function()
		{	
			for(var i=0;i<soa.length;i++)
			{ 	
				addEvent(soa[i],'touchstart',beigin)
				addEvent(soa[i],'touchmove',read)
				addEvent(soa[i], 'touchend', start);
				soa[i].index=i;
				soa[i].flg1=false;
			}	
		}	
	)()
	/*取消浏览器默认行为*/
	
	function beigin (e)
	{startY=e.touches[0].clientY;}

	function read(e)
	{
	  //alert(e.touches.length)
	  //console.log(e)
	vir=e.touches[0].clientY-startY;

	  
	}

	function stop(e) {
	//Opera/Chrome/FF
		if (e.preventDefault)
		e.preventDefault();
	//IE
		e.returnValue = false;
	}
	
	function start(e)
		{	
			//console.log(e)
			 
			
			 if(vir==0)		
			{
			FTime = new Date().getTime();				
			stop(e);
			if(Math.abs(STime-FTime)>500){
			
			
			var move1=sia[0].offsetHeight;	
			var index=this.index;	
					
					for(supi=0;supi<soa.length;supi++)
					{
					
					if (soa[supi].flg1&&supi!=index)
						{	    console.log(supi+'=='+index)
								//console.log("an="+supi+soa[supi].flg1	)
								
									sia[supi].style.top=0+'px';									
									if(supi+1!=soa.length)
									{
										sia[supi].style.top=0+'px';	
										soa[supi+1].style.marginTop=parseInt(soa[supi+1].style.marginTop.replace('px'))-move1-2+'px'
										};
									soa[supi].flg1=false;
									sz[supi].className="cross_img";
						}
					
					flg2=false;
						
		
					}
					
					se(this)
					
					}
				}
					vir=0;
				}
		var app=$('.app_image');
		var os=$('.overspread');
		var sst=0;
		var sapp=$('.picture');
		var cl=$('.picture_close');
		var app_p=$('.appshow_picture');


		for (var q=0;q<app.length;q++)
			{
				/*touch.on(app[q],'tap',function(){
					showstart()			
				})*/
				addEvent(app[q],'touchstart',showstart)
				addEvent(app[q],'touchend',showend);
				app[q].index=q;
			}
			
		addEvent(os[0],'touchstart',close);
		addEvent(cl[0],'touchstart',close);
		
		for (var p=0;p<app_p.length;p++)
		{
			addEvent(app_p[p],'touchstart',close);
		}
		
		function show(th)
		{	
			var index=th.index;
			var wh=document.body.clientHeight;
			os[0].style.visibility="visible"
			sapp[index].style.visibility="visible";
			sapp[index].style.marginTop=wh*0.09+(wh*0.91-sapp[index].offsetHeight)/2+'px';
			sapp[index].style.zIndex="200";
			var t=sapp[index].offsetTop;
			var l=sapp[index].offsetLeft;
			cl[0].style.visibility="visible";
			cl[0].style.marginLeft=l+sapp[index].offsetWidth-cl[0].offsetWidth/2+'px'
			cl[0].style.marginTop=t-cl[0].offsetHeight/2+'px'
			loc=index
			;
		}
		
		function close()
		{	
			os[0].style.visibility="hidden";
			sapp[loc].style.visibility="hidden";
			cl[0].style.visibility="hidden";
		}
		
		
		function showstart()
		{
			sst=(new Date().getTime());
			
		}
		
		function showend()
		{  var endtime=new Date().getTime()
			
			var time=endtime-sst
			// alert(time)
			if((endtime-sst)<=200&&move==0)
				{show(this);}
		}
		
	
		
		
		
				}
			
			}


