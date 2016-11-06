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

// define a react component class
var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function(){
     var list = this.props.thumbnailData.map(function(thumbnailProps){
       return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
     });

     return React.createElement("div", null, 
      list
     )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return    React.createElement("div", {className: "thumbnail"}, 
    React.createElement("img", {src: this.props.imageUrl}), 
    React.createElement("div", {className: "caption"}, 
      React.createElement("h3", null, this.props.header), 
      React.createElement("p", null, this.props.description), 
      React.createElement("p", null, 
        React.createElement(Badge, {title: this.props.title, number: this.props.number})
      )
    )
  )
  }
});
