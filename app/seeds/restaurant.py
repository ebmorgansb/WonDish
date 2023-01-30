from app.models import db, Restaurant, environment, SCHEMA


def seed_restaurants():

    restaurant1 = Restaurant(
        name='Taqueria El Buen Gusto',
        address='Taqueria El Buen Gusto, North Milpas Street, Santa Barbara, CA, USA',
        user_id=1)

    restaurant2 = Restaurant(
        name="Mony's Mexican Food",
        address="Mony's Mexican Food, Anacapa Street, Santa Barbara, CA, USA",
        user_id=1)

    restaurant3 = Restaurant(
        name="Taqueria El Bajio",
        address="Taqueria El Bajio, North Milpas Street, Santa Barbara, CA, USA",
        user_id=1)

    restaurant4 = Restaurant(
        name="Super Cucas",
        address="Super Cucas, West Micheltorena Street, Santa Barbara, CA, USA",
        user_id=1)


    db.session.add(restaurant1)
    db.session.add(restaurant2)
    db.session.add(restaurant3)
    db.session.add(restaurant4)
    db.session.commit()


def undo_restaurants():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.restaurants RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM restaurants")

    db.session.commit()