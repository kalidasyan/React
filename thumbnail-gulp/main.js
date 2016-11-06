(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/tyan/workspace/React/thumbnail-gulp/src/app.jsx":[function(require,module,exports){
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
ReactDOM.render(element, document.querySelector('.target'));

},{}]},{},["/Users/tyan/workspace/React/thumbnail-gulp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdHlhbi93b3Jrc3BhY2UvUmVhY3QvdGh1bWJuYWlsLWd1bHAvc3JjL2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLE9BQU8sR0FBRztFQUNaLGFBQWEsRUFBRSxDQUFDO01BQ1osS0FBSyxFQUFFLE1BQU07TUFDYixNQUFNLEVBQUUsRUFBRTtNQUNWLFFBQVEsRUFBRSw2Q0FBNkM7TUFDdkQsTUFBTSxFQUFFLGFBQWE7TUFDckIsV0FBVyxFQUFFLCtIQUErSDtLQUM3SSxDQUFDO01BQ0EsS0FBSyxFQUFFLE1BQU07TUFDYixNQUFNLEVBQUUsRUFBRTtNQUNWLFFBQVEsRUFBRSxxRUFBcUU7TUFDL0UsTUFBTSxFQUFFLFlBQVk7TUFDcEIsV0FBVyxFQUFFLCtIQUErSDtLQUM3SSxDQUFDO0FBQ04sQ0FBQyxDQUFDOztBQUVGLGdDQUFnQztBQUNoQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFMUQseURBQXlEO0FBQ3pELGdEQUFnRDtBQUNoRCxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG9wdGlvbnMgPSB7XG4gIHRodW1ibmFpbERhdGE6IFt7XG4gICAgICB0aXRsZTogJ1NlbnQnLFxuICAgICAgbnVtYmVyOiAxMixcbiAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly93b3JsZHZlY3RvcmxvZ28uY29tL2xvZ29zL3JlYWN0LnN2ZycsXG4gICAgICBoZWFkZXI6ICdMZWFybiBSZWFjdCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlYWN0IGlzIGZhbnRhc3RpYyBuZXcgbGlicmFyeSBmb3IgbWFraW5nIGZhc3QsIGR5bmFtaWMgcGFnZXMuIFJlYWN0IGlzIGZhbnRhc3RpYyBuZXcgbGlicmFyeSBmb3IgbWFraW5nIGZhc3QsIGR5bmFtaWMgcGFnZXMuJ1xuICAgIH0se1xuICAgICAgdGl0bGU6ICdTZW50JyxcbiAgICAgIG51bWJlcjogMTIsXG4gICAgICBpbWFnZVVybDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ndWxwanMvYXJ0d29yay9tYXN0ZXIvZ3VscC0yeC5wbmcnLFxuICAgICAgaGVhZGVyOiAnTGVhcm4gR3VscCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlYWN0IGlzIGZhbnRhc3RpYyBuZXcgbGlicmFyeSBmb3IgbWFraW5nIGZhc3QsIGR5bmFtaWMgcGFnZXMuIFJlYWN0IGlzIGZhbnRhc3RpYyBuZXcgbGlicmFyeSBmb3IgbWFraW5nIGZhc3QsIGR5bmFtaWMgcGFnZXMuJ1xuICAgIH1dXG59O1xuXG4vL0FzayByZWFjdCB0byByZW5kZXIgdGhpcyBjbGFzc1xudmFyIGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRodW1ibmFpbExpc3QsIG9wdGlvbnMpO1xuXG4vL1doZW4gd2UgYXNrIHJlYWN0IHRvIHJlbmRlciB0aGlzIGNsYXNzLCB3ZSB3aWxsIHRlbGwgaXRcbi8vd2hlcmUgdG8gcGxhY2UgdGhlIHJlbmRlcmVkIGVsZW1lbnQgaW4gdGhlIGRvbVxuUmVhY3RET00ucmVuZGVyKGVsZW1lbnQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKSk7XG4iXX0=
