from flask.cli import AppGroup
from .users import seed_users, undo_users
from .likes import seed_likes, undo_likes
from .profiles import seed_profiles, undo_profiles
from .blogs import seed_blogs, undo_blogs
from .matches import seed_matches, undo_matches
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_likes()
        undo_profiles()
        # undo_blogs()
        # undo_matches()
    seed_users()
    seed_likes()
    seed_profiles()
    seed_blogs()
    seed_matches()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_likes()
    undo_profiles()
    undo_blogs()
    undo_matches()
    # Add other undo functions here
