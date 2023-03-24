const openBtn = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-menu');
const menu = document.querySelector('.navUl');

openBtn.addEventListener('click', (e)=>{
    if (menu.classList.contains('inactive')){
        //abre menu
        menu.classList.remove('inactive');
        menu.classList.add('active');
        //al tocar el boton de abrir lo oculto para que se muestre el boton cerrar
        openBtn.classList.remove('active');
        openBtn.classList.add('inactive');
        // cuando toco el boton de abrir ocutlo el boton de cerrar
        closeBtn.classList.remove('inactive');
    }else{
        //cierra menu
        menu.classList.remove('active');
        menu.classList.add('inactive');
    }
});

closeBtn.addEventListener('click', (e)=>{
    // al tocar el boton de cerrar hago invisible el mismo boton para que se muestre el de abrir
    closeBtn.classList.add('inactive');
    //cuando toco el boton de cerrar hago visible el boton de abrir
    openBtn.classList.add('active');    
    //al tocar el boton de cerrar logicamente hago invisible el menu para que no se vea, removiendo la clase active y agregandole inactive, porque si solo le saco el active y no esta el inactive, el menu se sigue viendo
    menu.classList.remove('active');
    menu.classList.add('inactive');
});