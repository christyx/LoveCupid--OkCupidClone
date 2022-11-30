from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin


class Profile(db.Model, UserMixin):
    __tablename__ = 'profiles'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    bio = db.Column(db.String(500), nullable=False)
    work = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    hometown = db.Column(db.String(50), nullable=False)

    user = db.relationship("User", back_populates="profiles")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'bio': self.bio,
            'work': self.work,
            'age': self.age,
            'hometown': self.hometown
        }
