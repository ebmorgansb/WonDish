from app.models import db, Restaurant, environment, SCHEMA


def seed_restaurants():

    restaurant1 = Restaurant(
        name='Taqueria El Buen Gusto',
        address='Taqueria El Buen Gusto, North Milpas Street, Santa Barbara, CA, USA',
        user_id=1)

    db.session.add(restaurant1)
    db.session.commit()


def undo_restaurants():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.restaurants RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM restaurants")

    db.session.commit()