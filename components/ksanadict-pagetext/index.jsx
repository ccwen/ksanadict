/** @jsx React.DOM */

//var othercomponent=Require("other"); 
var pagetext = React.createClass({
  getInitialState: function() {
    return {bar: "world"};
  },
  showpage:function() {
    if (this.props.page) {
      return <div dangerouslySetInnerHTML={{__html:this.props.page.text}}/>;
    } else return null;
  },
  render: function() {
    return (
      <div>
        {this.showpage()}
      </div>
    );
  }
});
module.exports=pagetext;