//event pada saat link di klik
$('.page-scroll').on('click',function(e){
	//ambil isi dari href
	var tombol =$(this).attr('href');//var tombol berisi attribut href dari tombol yang di klik
	//tangkap elemen yang bersangkutan
	var tujuan = $(tombol);

	//pindahkan scroll
	$('html, body').animate({
		scrollTop: tujuan.offset().top
	}, 800);

	e.preventDefault();//untuk menghilangkan default dari a



});

//parallax
$(window).scroll(function(){
	var jarakScroll=$(this).scrollTop(); //scrollTop adalah jarak scroll ke atas
	if (jarakScroll > $('.batas1').offset().top-200) { //offset().top untuk menghitung jarak konten .batas1 ke atas
		$('.landing1').each(function(i){//memberikan fungsi ke setiap elemen pada landing 1
			setTimeout(function(){
				$('.landing1').eq(i).addClass('jatoh');//untuk eq silahkan cari sendiri
			}, 350 *(i+1)); //setTimeout berfungsi untuk menjalankan sesuatu, tapi nunggu dulu. parameter pertama adalah sesuatu yang ingin dijalankan, parameter kedua adalah waktunya dalam milisekan
		})

	}else{
		$('.landing1').removeClass('jatoh');
	}
	if (jarakScroll > $('.batas2').offset().top-200) { //offset().top untuk menghitung jarak konten .batas2 ke atas
		$('.landing2').each(function(i){
		setTimeout(function(){
			$('.landing2').eq(i).addClass('jatoh');
		}, 350 *(i+1)); 
		})
	}else{
		$('.landing2').removeClass('jatoh');
	}
	if (jarakScroll > $('.batas3').offset().top-200) { //offset().top untuk menghitung jarak konten .batas3 ke atas
		$('.landing3').addClass('jatoh');
	}else{
		$('.landing3').removeClass('jatoh');
	}
	if (jarakScroll > $('.batas4').offset().top-200) { //offset().top untuk menghitung jarak konten .batas4 ke atas
		$('.landing4').each(function(i){
		setTimeout(function(){
			$('.landing4').eq(i).addClass('jatoh');
		}, 350 *(i+1)); 
		})
	}else{
		$('.landing4').removeClass('jatoh');
	}
	if (jarakScroll>100) {
		$('.tbl').removeClass('none');
	}else{
		$('.tbl').addClass('none')
	}

});