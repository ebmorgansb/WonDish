from app.models import db, SecondaryReview, environment, SCHEMA


def seed_secondaryreviews():
    review1 = SecondaryReview(
        name='burrito',
        description='It was a solid burrito',
        image='image.png',
        address='216 Ocean Ave, santa barbara, CA, 93101',
        rating=5,
        user_id=1,
        primaryreview_id=1)

    review2 = SecondaryReview(
        name='Chicken Parmesan',
        description='off the charts, on god very enjoyable.',
        image='image.png',
        address='3200 California Ave, santa barbara, CA, 93101',
        rating=10,
        user_id=1,
        primaryreview_id=2)

    review3 = SecondaryReview(
        name='Pad Thai',
        description='It was flavorful and authentic... would go back!',
        image='image.png',
        address='805 lighthouse Ave, santa barbara, CA, 93101',
        rating=7,
        user_id=1,
        primaryreview_id=3)


    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.commit()


def undo_secondaryreviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.primary_reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM primary_reviews")

    db.session.commit()