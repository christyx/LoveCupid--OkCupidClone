from flask import Blueprint, jsonify, Flask, render_template, request, session, redirect, make_response
from flask_login import login_required, current_user
from app.models import db, User, Like

user_routes = Blueprint('users', __name__)


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

# ========== Get user's likes ==============
@user_routes.route("/<int:id>/likes")
# @login_required
def get_user_likes(id):
    all_likes = []
    data = Like.query.filter(Like.user_id == id).all()
    for lst in data:
        all_likes.append(lst.to_dict())
    return jsonify(all_likes)
    # jsonify(all_likes)
    # return [like.to_dict() for like in data]

# # ========== Create user's likes ==============

# @user_routes.route("/<int:id>/likes", methods=["POST"])
# # @login_required
# def post_new_like(id):
#     data = request.get_json()
#     new_like = Like(
#         user_id=current_user.id,
#         liked_user_id=id
#     )
#     db.session.add(new_like)
#     db.session.commit()
#     return new_like.to_dict()
