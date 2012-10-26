enyo.kind({
  name: "enyo.CollectionList",
  kind: "enyo.List",
  
  // NOTE: there's an option here, overload the controller
  // to know about the collection type, or provide it
  // to the list and have it hand-it off...
  controller: "enyo.CollectionListController",
  published: {
    collection: ""
  },
  create: function () {
    var cl = this.get("collection"), c;
    this.inherited(arguments);
    c = this.get("controller");
    
    // let the controller deal with the setup on its own
    if (c && cl) c.set("collection", cl);
  }
});