from flask.cli import AppGroup
from .users import seed_users, undo_users
from .primary_review import undo_primaryreviews, seed_primaryreviews
# from .secondary_review import undo_secondaryreviews, seed_secondaryreviews
from .restaurant import undo_restaurants, seed_restaurants

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

        undo_primaryreviews()
        undo_restaurants()
        undo_users()
        # db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        # Add a truncate command here for every table that will be seeded.
        # db.session.commit()

    # Add other seed functions here
    seed_users()
    seed_restaurants()
    seed_primaryreviews()
    # seed_secondaryreviews()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # undo_secondaryreviews()
    undo_primaryreviews()
    undo_restaurants()
    undo_users()
    # Add other undo functions here