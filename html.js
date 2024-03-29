
/* html lint */
let link = document.createElement('link');
link.rel = 'stylesheet';
link.href = import.meta.url + '/../html-lint.css';
link.setAttribute('crossorigin','');
document.head.prepend(link);



import { SelectorObserver } from 'https://cdn.jsdelivr.net/gh/u1ui/SelectorObserver.js@4.0.0/SelectorObserver.min.js';

const colorToConsole = {
    'red': 'error',
    'orange': 'warn',
    'blue': 'log',
};

link.addEventListener('load', () => {
    for (const rule of link.sheet.cssRules) {
        const msg = rule.style.getPropertyValue('--cleanup-message');
        const color = rule.style.getPropertyValue('outline-color');

        const log = console[ colorToConsole[color] ];

        const sListener = new SelectorObserver({
            on: el => {
                if (!el.parentNode) return; // no longer connected
                let elMsg = msg;
                elMsg = elMsg.replace(/#tag#/, '<'+el.tagName.toLowerCase()+'>');
                if (el.parentNode.tagName) elMsg = elMsg.replace(/#parent#/, '<'+el.parentNode.tagName.toLowerCase()+'>');
                log('🚮 cleanup.js html: ' + elMsg, el);
                //console.log(rule.selectorText)
            },
        });
        sListener.observe(rule.selectorText);
    }
},{once: true});
