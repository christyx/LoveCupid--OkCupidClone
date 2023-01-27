from flask import Blueprint, jsonify, Flask, render_template, request, session, redirect, make_response
from flask_login import login_required, current_user
from app.models import db, User, Like, Profile, Blog

user_routes = Blueprint('users', __name__)


# ========== Get user's likes ==============
@user_routes.route("/<int:id>/likes")
@login_required
def get_user_likes(id):
    all_likes = []
    data = Like.query.filter(Like.user_id == id).all()
    for lst in data:
        all_likes.append(lst.to_dict())
    return jsonify(all_likes)


# ========== Create user's likes ==============
@user_routes.route("/<int:id>/likes", methods=["POST"])
@login_required
def post_new_like(id):
    data = request.get_json()
    new_like = Like(
        user_id=current_user.id,
        liked_user_id=id
    )
    db.session.add(new_like)
    db.session.commit()
    return new_like.to_dict()


# ========= Delete a like ==============
@user_routes.route("/<int:id>/likes", methods=["DELETE"])
@login_required
def delete_like(id):
    all_like = Like.query.filter(Like.liked_user_id == id).all()
    like = all_like[0]

    db.session.delete(like)
    db.session.commit()
    return "successfully delete a like"


@user_routes.route('/')
# @login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
# @login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()


# ========== Get user's profiles ==============
@user_routes.route("/<int:id>/profile")
# @login_required
def get_user_profile(id):
    all_profiles =[]
    data = Profile.query.filter(Profile.user_id == id).all()
    for lst in data:
        all_profiles.append(lst.to_dict())
    return jsonify(all_profiles)

# ========== Create user's profile ==============
@user_routes.route("/<int:id>/profile", methods=["POST"])
#@login_required
def post_new_profile(id):
    data = request.get_json()

    new_profile = Profile(
        user_id=id,
        bio=data["bio"],
        work=data["work"],
        age=data["age"],
        hometown=data["hometown"]
    )
    db.session.add(new_profile)
    db.session.commit()
    return new_profile.to_dict()

# ========== Update user's profile ==============
@user_routes.route("/<int:id>/profile", methods=["PUT"])
@login_required
def update_new_profile(id):
   myProfile = Profile.query.filter(Profile.user_id == id).all()
   profileId = myProfile[0].id
   profile = Profile.query.get(profileId)
   if not profile:
      return {
         "message": "Profile not found",
         "statusCode": 404,
      }, 404
   data = request.get_json()
   profile.bio = data["bio"]
   profile.work = data['work']
   profile.age = data["age"]
   profile.hometown = data["hometown"]
   db.session.commit()
   return profile.to_dict()


# ========== Detele user's profile ==============
@user_routes.route("/<int:id>/profile", methods=["DELETE"])
@login_required
def delete_new_profile(id):
    myProfile = Profile.query.filter(Profile.user_id == id).all()
    profileId = myProfile[0].id
    profile = Profile.query.get(profileId)
    db.session.delete(profile)
    db.session.commit()
    return "successfully delete profile"

# ========== Get all blogs ==============

@user_routes.route("/blogs")
# @login_required
def get_all_blogs():
#    blogs = Blog.query.all()
#    return {'blogs': [blog.to_dict() for blog in blogs]}

   blogs = []
   data = Blog.query.all()
   for lst in data:
       blogs.append(lst.to_dict())
   return jsonify(blogs)


# ========== Create user's blogs ==============
@user_routes.route("/blogs", methods=["POST"])
# @login_required
def post_new_blog():
    data = request.get_json()

    new_blog = Blog(
        user_id=current_user.id,
        user_name=data["user_name"],
        post=data["post"],
        image1=data["image1"],
    )
    db.session.add(new_blog)
    db.session.commit()
    return new_blog.to_dict()

# ========== Update user's blog ==============
@user_routes.route("/blogs/<int:blog_id>", methods=["PUT"])
@login_required
def update_new_blog(blog_id):
   blog = Blog.query.get(blog_id)

   if not blog:
      return {
         "message": "Profile not found",
         "statusCode": 404,
      }, 404
   data = request.get_json()
   blog.user_id = current_user.id
   blog.user_name = data["user_name"]
   blog.post = data["post"]
   blog.image1 = data["image1"]
   db.session.commit()
   return blog.to_dict()

# ========== Detele user's blog ==============

@user_routes.route("/blogs/<int:blog_id>", methods=["DELETE"])
@login_required
def delete_new_blog(blog_id):
    blog = Blog.query.get(blog_id)
    db.session.delete(blog)
    db.session.commit()
    return "successfully delete blog"
