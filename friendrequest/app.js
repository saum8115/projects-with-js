var arr = [
    {
      username: 'Salman',
      age: 65,
      married: false,
      istatus: 'Stranger',
      image: 'https://images.unsplash.com/photo-1677760904764-801d55083330?w=1000&auto=format&fit=crop&q=60'
    },
    {
      username: 'Shahrukh',
      age: 65,
      married: true,
      istatus: 'Stranger',
      image: 'https://images.unsplash.com/photo-1727798450000-fd0e6e81c6b3?w=1000&auto=format&fit=crop&q=60'
    },
    {
      username: 'Sarthak',
      age: 40,
      married: false,
      istatus: 'Stranger',
      image: 'https://images.unsplash.com/photo-1710956446132-832273cd344d?w=1000&auto=format&fit=crop&q=60'
    }
  ];
  
  var main = document.querySelector('#main');
  
  function herofunction() {
    var sum = '';
    arr.forEach(function(elem, idx) {
      sum += `
        <div class="card">
          <img src="${elem.image}" alt="">
          <h1>${elem.username}, ${elem.age}</h1>
          <h4>${elem.married ? 'Married' : 'Single'}</h4>
          <h5>${elem.istatus}</h5>
          <button id="${idx}">Add friend</button>
        </div>
      `;
    });
    main.innerHTML = sum;
  }
  
  herofunction();
  
  main.addEventListener('click', function(dets) {
    var id = dets.target.id;
    if (!isNaN(id)) {
      arr[id].istatus = 'Friend';
      herofunction();
    }
  });