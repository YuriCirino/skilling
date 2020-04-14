
console.log('alou!!')
axios.get('skill1.html').then(resp => {
    console.log(resp.data)
    $('main').html(resp.data)

})