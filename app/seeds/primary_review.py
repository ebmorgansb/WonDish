from app.models import db, PrimaryReview, environment, SCHEMA


def seed_primaryreviews():
    review1 = PrimaryReview(
        name='burrito',
        description='Definitely solid',
        image='https://static.wixstatic.com/media/e82dd7_366ee2ec761a4c70a910db016b1efcde~mv2.jpg/v1/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Burrito%204.jpg',
        address='216 Ocean Ave',
        rating=7,
        user_id=1)

    review2 = PrimaryReview(
        name='Chicken Parm',
        description='literally the best',
        image='https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Parmesan-Recipe-f-500x500.jpg',
        address='3200 California Ave',
        rating=10,
        user_id=1)

    review3 = PrimaryReview(
        name='Pad Thai',
        description='Better than average',
        image='https://www.aheadofthyme.com/wp-content/uploads/2020/04/10-minute-chicken-pad-thai-7.jpg',
        address='805 lighthouse Ave',
        rating=6,
        user_id=1)

    review4 = PrimaryReview(
        name='sandwich',
        description='Loved it',
        image='https://assets.bonappetit.com/photos/62b1f659a38f8b1339b88af8/5:4/w_2715,h_2172,c_limit/20220615-0622-sandwiches-1746-final%20(1).jpg',
        address='909 speedway street',
        rating=8,
        user_id=2)

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.commit()


def undo_primaryreviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.primary_reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM primary_reviews")

    db.session.commit()