/** @jsx React.DOM */

var dbselector=Require("dbselector"); 
var searchbox=Require("searchbox"); 
var resultlist=Require("resultlist"); 
var pagetext=Require("pagetext"); 
var kde=Require("ksana-document").kde;
var kse=Require("ksana-document").kse;

var main = React.createClass({
  mixins:Require("kse-mixins"),
  getInitialState: function() {
    return {bar: "world",excerpt:[],tofind:null,db:null,dbid:"",databases:["db1","db2"]};
  },
  dosearch:function(tofind) {
    if (!this.state.db) return;
    kse.search(this.state.db,tofind,{range:{start:0}},function(data){
      this.setState({excerpt:data.excerpt,tofind:tofind});
    });  
  },  
  action:function() {
    var args=Array.prototype.slice.call(arguments);
    var actiontype=args.shift();
    if (actiontype=="search") {
      var tofind=args[0];
      this.dosearch(tofind);
    } else if (actiontype=="selectdb") {
      var dbid=args[0];
      this.opendb(dbid);
    } else if (actiontype=="showpage") {
      var pagename=args[0];
      kse.highlightPage(this.state.db,pagename,{q:this.state.tofind},function(data){
        this.setState({page:data});
      });
    }
  },
  opendb:function(dbid) {
    var that=this;
    kde.open(dbid,function(db){
      that.setState({db:db,dbid:dbid});
      db.setContext(that);
      console.log("db "+dbid+" ready")
    })
  },
  componentDidMount:function() {
    if (this.state.db)return;
    this.$ksana("enumKdb","ksana_databases").done(function(databases){
      this.setState({databases:databases});
      if (databases.length) {
        this.opendb(databases[0]);
        this.setState({dbid:databases[0]});
      }
    });
  },
  render: function() {
    return (
      <div>
        <dbselector databases={this.state.databases} dbid={this.state.dbid} action={this.action}/>
        <searchbox action={this.action}/>
        <resultlist excerpt={this.state.excerpt} action={this.action}/>
        <pagetext page={this.state.page}/>
      </div>
    );
  }
});
module.exports=main;