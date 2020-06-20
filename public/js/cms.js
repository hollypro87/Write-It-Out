$(document).ready(function () {
  // query string from our url
  var url = window.location.search;
  var postId;
  // Sets a flag updating a post to be false initially
  var updating = false;

  // post id from the url
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }

  // jQuery references to the post body, title, form, and category select
  var bodyInput = $("#body");
  var titleInput = $("#title");
  var cmsForm = $("#cms");
  var postCategorySelect = $("#category");
  // postCategorySelect default value
  postCategorySelect.val("Personal");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont post if missing body or title
    if (!titleInput.val().trim() || !bodyInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      title: titleInput.val().trim(),
      body: bodyInput.val().trim(),
      category: postCategorySelect.val()
    };

    console.log(newPost);

    // updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    }
    else {
      submitPost(newPost);
    }
  });

  // new post and goes to blog page upon completion
  function submitPost(Post) {
    $.post("/api/posts/", Post, function () {
      window.location.href = "/blog";
    });
  }

  // gets post data for editing
  function getPostData(id) {
    $.get("/api/posts/" + id, function (data) {
      if (data) {
        // prefill our cms forms with its data
        titleInput.val(data.title);
        bodyInput.val(data.body);
        postCategorySelect.val(data.category);
        //set a flag for us to update the post when we hit submit
        updating = true;
      }
    });
  }

  // Update a given post and goes to the blog page
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    })
      .then(function () {
        window.location.href = "/blog";
      });
  }
});