  let parentList = document.getElementById('myMenu');
    function myFunction() {
    let childList = parentList.children;
	if (parentList.classList.contains('hidden')) {
    	parentList = document.getElementById('myMenuSorted');
        childList = parentList.children;
    }
    const text = document.getElementById('mySearch').value.toUpperCase();
     for(let i=0; i< childList.length; i++) {
        childList[i].classList.remove('hidden');

     }
     for(let i=0; i< childList.length; i++) {
        if (!(childList[i].innerHTML.toUpperCase()).includes(text)) {
            childList[i].classList.add('hidden');
        }
     }
    }

    function sort() {
    	const childList = document.getElementById('myMenu').children;
        let sortableArr = [];
        for(let i=0; i<childList.length; i++) {
            sortableArr.push(childList[i].innerText);
        }
        sortableArr.sort();
        parentList.classList.add('hidden');
        const ul = document.createElement('ul');
        ul.id = 'myMenuSorted';
        for(let i=0; i<sortableArr.length; i++) {
			const li = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.setAttribute('href', '#');
            const text = document.createTextNode(sortableArr[i]);
            anchor.appendChild(text);
            li.appendChild(anchor);
            ul.appendChild(li);
        }
        document.getElementsByClassName('left')[0].appendChild(ul);
    }
    