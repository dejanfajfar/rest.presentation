import reveal from 'reveal.js'
import marked from 'reveal.js/plugin/markdown/marked.js'
import markdown from 'reveal.js/plugin/markdown/markdown.js'

System.import('reveal.js/css/reveal.css!').then(function(){
    System.import('/styles/theme.css!');
});
System.import('prism/themes/prism.css!').then(function(){
    System.import('prism/themes/prism-twilight.css!');
    System.import('prism/plugins/line-numbers/prism-line-numbers.css!');
});

System.import('prism').then(() => {
    System.import('prism/plugins/line-numbers/prism-line-numbers.js').then(() => {
        Prism.highlightAll();
    });
});

reveal.initialize({});
markdown.initialize();