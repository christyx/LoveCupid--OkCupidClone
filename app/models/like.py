from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin


class Like(db.Model, UserMixin):
    __tablename__ = 'likes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    liked_user_id = db.Column(db.Integer, nullable=False)

    user = db.relationship("User", back_populates="likes")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'liked_user_id': self.liked_user_id
        }
