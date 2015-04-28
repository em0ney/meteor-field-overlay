var closeWithoutCallback = function(data_context) {
  Blaze.remove(data_context.currentBlazeView);
};

var closeWithCallback = function(data_context, field_value) {
  Blaze.remove(data_context.currentBlazeView);
  data_context.callback(data_context.targetContext, field_value);
};

Template.fieldOverlay.helpers({
  placeholder: function() {
    return this.placeholder ? this.placeholder : 'please enter a value';
  },
  hasLabel: function() {
    return typeof(this.label) !== 'undefined';
  }
});

Template.fieldOverlay.events({
  'submit form': function(event, template) {
    event.preventDefault();
    var field_value = $(template.find('input[name=it]')).val();
    closeWithCallback(this, field_value);
  },
  'keyup input[name=it]': function(event, template) {
    var code = event.code || event.which;
    console.log(code);
    var field_value = $(event.target).val();
    if (_.contains([13, 9], code) && !_.isEmpty(field_value)) { // on tab or horizontal tab
      console.log("closeWithCallback");
      closeWithCallback(this, field_value);
    }
    // if ESC  $(event.target).blur();
  },
  'blur input[name=it]': function(event, template) {
    //closeWithoutCallback(this);
  }
});


Template.fieldOverlay.rendered = function () {
  $("input[name=it]").focus();
};
