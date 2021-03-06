  // !!!
  // Init.
  ['Model', 'Collection', 'Router', 'View', 'History'].forEach(function(name) {
    var item = Backbone[name];
    if (item) item.extend = Backbone.extend;
  });

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);
  // Changed by Lovelin : since we wont be using history module. There is conflict between Global History native function
  // Create the default Backbone.history if the History module is included.
  // if (History) Backbone.history = new History();
  return Backbone;
});
