
function picPlayer(strId,picWidth, nTime,displayNum){
	var nInterTime = nTime||5000;
	var Index=0;
	var Wrapper=document.getElementById(strId);
	var WrapperInner = $(".scroll_wrap", Wrapper)[0];
	var listCount = $("TD", Wrapper).length - displayNum +1;
	var picWidth= picWidth;
	var handleTime;
	var handleInter;
	var finalLeft = 0;
	function picBrowserInit(){
		Wrapper.onmouseover = function(){
			clearInterval(handleInter);
			handleInter = null;
		}
		Wrapper.onmouseout = function(){
			if(handleInter == null){
				handleInter = setInterval(AutoRun,nInterTime);
			}
		}
	}
	function AutoRun(){
		if(Index == listCount-1)
			Index=0;
		else
			Index++;
		Shift();
	}
	function slideTo(){
		//picWrapperInner.style.left = picWrapper -1*finalLeft + "px";
		var distance = finalLeft - WrapperInner.scrollLeft;
		if(Math.abs(distance)>2){
			WrapperInner.scrollLeft = WrapperInner.scrollLeft + Math.round(distance/2);
			handleTime=setTimeout(slideTo,40);
		}
		else{
			WrapperInner.scrollLeft = finalLeft;
		}
	}
	function Shift(){
		finalLeft = Index*picWidth;
		slideTo();
	}
	this.goRight = function(){
		if(Index < listCount-1){
			Index++;
		}else{
			Index = 0;
		}
		Shift();
	}
	this.goLeft = function(){
		if(Index > 0){
			Index--;
		}else{
			Index = listCount-1;
		}
		
		Shift();
	}
	picBrowserInit();
	handleInter = setInterval(AutoRun,nInterTime);
}