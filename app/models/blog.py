from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin


class Blog(db.Model, UserMixin):
    __tablename__ = 'blogs'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    user_name = db.Column(db.String(50))
    post = db.Column(db.String(500))
    image1 = db.Column(db.String(500))

    # user = db.relationship("User", back_populates="blogs")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'user_name': self.user_name,
            'post': self.post,
            'image1': self.image1
        }
