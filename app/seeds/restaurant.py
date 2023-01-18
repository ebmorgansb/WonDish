from app.models import db, Restaurant, environment, SCHEMA


def seed_restaurants():

    restaurant1 = Restaurant(
        name='The Chicken Ranch',
        address='5002 forest street',
        user_id=1)

    db.session.add(restaurant1)
    db.session.commit()


def undo_restaurants():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.restaurants RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM restaurants")

    db.session.commit()