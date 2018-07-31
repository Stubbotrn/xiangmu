
		var odj = document.getElementById('dj');
		var otc = document.getElementById('tc');
		odj.onclick = function(){
			if(otc.style.display== 'block'){
				otc.style.display= 'none';
			}
			else{
				otc.style.display = 'block';
			}
		}

		var num=0;
		var speed=40;
		function goLeft(){
			if(num==-417){
				num=0;
			}
			num=num-1;
			$('.box').find('.right').css({
				top:num
			});
		}
		var timer=setInterval(goLeft,speed);
		$('.box').hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(goLeft,speed);
		});