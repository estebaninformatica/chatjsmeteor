Posts = new Meteor.Collection('posts');

if (Meteor.isClient) {
  Template.posts.helpers({
    posts: function() {
      return Posts.find();
    }
  });

  Template.post.events = {
  		"submit": function (){
  			var $post  = $("#post");
  			if ($post.val()){
  				Posts.insert({
  					"text": $post.val(),
  					"timestamp": (new Date()).toUTCString()
  				});
  			}
  			$post.val("");
  			$post.focus();
  			Meteor.flush();
  		}
  	};
}