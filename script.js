var list=document.querySelector('#book-list ul');
list.addEventListener('click',function(e){
	if(e.target.className=='delete'){
		const li=e.target.parentElement;
		list.removeChild(li);
	}
	/*if(e.target.className=='addScience'){
		var li=e.target.parentElement;
		li.className="science"
		li.style.textDecoration="underline";
	}
	if(e.target.className=='addNovel'){
		var li=e.target.parentElement;
		li.className ="novel"
		li.style.textDecoration="overline";
	}*/
});

var btn=document.querySelector('#add-book button');
btn.addEventListener('click',function(e){
	btn.preventDefault();
});


