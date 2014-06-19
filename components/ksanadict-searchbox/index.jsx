/** @jsx React.DOM */

//var othercomponent=Require("other"); 
var searchbox = React.createClass({
  getInitialState: function() {
    return {bar: "world"};
  },
  dosearch:function() {
    var tofind=this.refs.tofind.getDOMNode().value;
    this.props.action("search",tofind);
  },
  render: function() {
    return (
      <div>
        <input defaultValue="天地" ref="tofind"></input>
        <button onClick={this.dosearch}>Go</button>
      </div>
    );
  }
});
module.exports=searchbox; 