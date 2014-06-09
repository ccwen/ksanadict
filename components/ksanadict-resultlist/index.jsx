/** @jsx React.DOM */

//var othercomponent=Require("other"); 
var resultlist = React.createClass({
  getInitialState: function() {
    return {bar: "world"};
  },
  showPage:function(e) {
    var pagename=e.target.innerHTML;
    this.props.action("showpage",pagename);
  },
  renderExcerpt:function(excerpt) {
    return <div>
    <span className="showpage" onClick={this.showPage}>{excerpt.pagename}</span>
    <span dangerouslySetInnerHTML={{__html:excerpt.text}}/>
    </div>
  }, 
  render: function() {
    return (
      <div> 
        {this.props.excerpt.map(this.renderExcerpt)}
      </div>
    );
  }
});
module.exports=resultlist;