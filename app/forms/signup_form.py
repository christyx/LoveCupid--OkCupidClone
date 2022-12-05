from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("Email address is already in use.")
    if not email.__contains__('@'):
        raise ValidationError('An email address should have @.')
    if not email.__contains__('.'):
        raise ValidationError('An email address should have a period.')
    if len(email) > 40:
        raise ValidationError(
            'Email should be less than 40 charaters.')
    # if email.__endswith__('.'):
    #     raise ValidationError('An email address cannot end with a period.')
    # if email.__endswith__('@'):
    #     raise ValidationError('An email address cannot end with @.')


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

def lookingfor_valid(form, field):
    # Checking if username is already in use
    lookingfor = field.data

    if lookingfor != 'men' and lookingfor != 'women':
        raise ValidationError(
            'Please type either men or women')


def image_valid(form, field):
    # Checking if username is already in use
    image = field.data

    if not image.__contains__('.png') and not image.__contains__('.jpeg') and not image.__contains__('.jpg'):
        raise ValidationError('Should have .png/.jpeg/.jpg')
    if len(image) > 500:
        raise ValidationError(
            'Image Url should be less than 500 charaters.')
    # if not image.__beginswith__('http://' or 'https://'):
    #     raise ValidationError("Should begins with 'https://' or 'http://'")


class SignUpForm(FlaskForm):
    firstname = StringField(
        'firstname', validators=[DataRequired(), firstname_valid])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[
                           DataRequired(), password_valid])
    lookingfor = StringField('lookingfor', validators=[
        DataRequired(), lookingfor_valid])
    image = StringField('image', validators=[
        DataRequired(), image_valid])
