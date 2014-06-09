/** @jsx React.DOM */
var bootstrap=Require("bootstrap");
//var othercomponent=Require("other"); 
var dbselector = React.createClass({
  getInitialState: function() {
    return {bar: "world"};
  },
  selectdb:function(e) {
    var dbid=e.target.attributes['data-id'].value;
    this.props.action("selectdb",dbid)
  },
  renderItem:function(dbid) {
    return <li><a onClick={this.selectdb} data-id={dbid} href="#">{dbid}</a></li>
  },
  render: function() {
    return (
    <div className="btn-group">
      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
        {this.props.dbid}<span className="caret"></span>
      </button>
      <ul className="dropdown-menu" role="menu">
        {this.props.databases.map(this.renderItem)}
      </ul>
    </div>

    );
  }
});
module.exports=dbselector;