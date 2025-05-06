// ==============================================>>> {{ EVENTS }} <<<====================================
// ---------------------------------------------------------------- {{{ Variables }}} <<<
// 
// {{ Classes }}
// 
let background_light_js = document.querySelector('.background_light_js');
let color_light_js = document.querySelector('.color_light_js');



// 
// {{ Nav_1-2 }}
// 
let nav = document.getElementById('nav');
let closeNav = document.getElementById('closeNav');
// ---------------------------------------------------------------- {{{ Variables }}} <<<











// ---------------------------------------------------------------- {{{ Functions }}} <<<
// 
// {{ Classes }}
// 
background_light_js.addEventListener('click', () => {
    background_light_js.classList.toggle('background_light');
});
color_light_js.addEventListener('click', () => {
    color_light_js.classList.toggle('color_light');
});




// 
// {{ Nav_2-2 }}
// 
closeNav.addEventListener('click', () => {
    nav.classList.toggle('flex');    // Header-1 => 3-3
    nav.classList.toggle('animation-opacity');
});
// ---------------------------------------------------------------- {{{ Functions }}} <<<
// ==============================================>>> {{ EVENTS }} <<<====================================