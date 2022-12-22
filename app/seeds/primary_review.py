from app.models import db, PrimaryReview, environment, SCHEMA


def seed_primaryreviews():
    review1 = PrimaryReview(
        name='burrito',
        description='Definitely solid',
        image='image.png',
        address='216 Ocean Ave',
        rating=7,
        user_id=1)

    review2 = PrimaryReview(
        name='Chicken Parm',
        description='literally the best',
        image='image.png',
        address='3200 California Ave',
        rating=10,
        user_id=1)

    review3 = PrimaryReview(
        name='Pad Thai',
        description='Better than average',
        image='image.png',
        address='805 lighthouse Ave',
        rating=6,
        user_id=1)


    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.commit()


def undo_primaryreviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.primary_reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM primary_reviews")

    db.session.commit()