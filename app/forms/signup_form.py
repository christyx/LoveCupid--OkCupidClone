from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')
    if not email.__contains__('@' and '.'):
        raise ValidationError('Should be in email format.')



# def username_exists(form, field):
#     # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')

def firstname_valid(form, field):
    # Checking if username is already in use
    firstname = field.data

    if len(firstname) < 2 or len(firstname) > 20:
        raise ValidationError(
            'First name should be betweeen 2 and 20 charaters.')


def password_valid(form, field):
    # Checking if username is already in use
    password = field.data

    if len(password) < 6 or len(password) > 20:
        raise ValidationError(
            'Password should be betweeen 6 and 20 charaters.')


class SignUpForm(FlaskForm):
    firstname = StringField(
        'firstname', validators=[DataRequired(), firstname_valid])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[
                           DataRequired(), password_valid])
