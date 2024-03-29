from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    lookingfor = db.Column(db.String(6), nullable=False)
    image = db.Column(db.String(255), nullable=False)

    likes = db.relationship("Like", back_populates="user")
    profiles = db.relationship("Profile", back_populates="user")
    matches = db.relationship("Match", back_populates="user")
    blogs = db.relationship("Blog", back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'firstname': self.firstname,
            'email': self.email,
            'lookingfor': self.lookingfor,
            'image': self.image,
            'likes': self.list_to_dict()
        }

    def list_to_dict(self):
        ls_dict = {}
        for ls in self.likes:
            ls_dict[ls.to_dict()['id']] = ls.to_dict()
        return ls_dict
