from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin


class Match(db.Model, UserMixin):
    __tablename__ = 'matches'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    score = db.Column(db.Integer, nullable=False)

    # user = db.relationship("User", back_populates="matches")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'score': self.bio
        }
