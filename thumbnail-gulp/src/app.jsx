var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
      title: 'Sent',
      number: 12,
      imageUrl: 'https://worldvectorlogo.com/logos/react.svg',
      header: 'Learn React',
      description: 'React is fantastic new library for making fast, dynamic pages. React is fantastic new library for making fast, dynamic pages.'
    },{
      title: 'Sent',
      number: 12,
      imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png',
      header: 'Learn Gulp',
      description: 'React is fantastic new library for making fast, dynamic pages. React is fantastic new library for making fast, dynamic pages.'
    }]
};

//Ask react to render this class
var element = React.createElement(ThumbnailList, options);

//When we ask react to render this class, we will tell it
//where to place the rendered element in the dom
React.render(element, document.querySelector('.container'));
