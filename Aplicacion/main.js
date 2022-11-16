import {AplicationView} from './aplicationView.js'

function main()
{
    let myAppView = new AplicationView()

    document.body.appendChild(myAppView);
}

window.addEventListener('load', main );