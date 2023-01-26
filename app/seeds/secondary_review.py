# from app.models import db, SecondaryReview, environment, SCHEMA


# def seed_secondaryreviews():
#     review1 = SecondaryReview(
#         name='burrito',
#         description='It was a solid burrito',
#         image='https://static.wixstatic.com/media/e82dd7_366ee2ec761a4c70a910db016b1efcde~mv2.jpg/v1/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Burrito%204.jpg',
#         address='216 Ocean Ave, santa barbara, CA, 93101',
#         rating=5,
#         user_id=1,
#         primaryreview_id=1)

#     review1b = SecondaryReview(
#         name='burrito',
#         description='It was delicious but not traditional',
#         image='https://www.shutterstock.com/image-photo/mexican-beef-burrito-260nw-1349138753.jpg',
#         address='216 Ocean Ave, santa barbara, CA, 93101',
#         rating=9,
#         user_id=1,
#         primaryreview_id=1)

#     review1c = SecondaryReview(
#         name='burrito',
#         description='This may have been the best burrito I have ever had',
#         image='https://www.mexicanplease.com/wp-content/uploads/2022/09/Easy-Ground-Beef-Burritos-5.jpg',
#         address='101 State Street, santa barbara, CA, 93101',
#         rating=10,
#         user_id=2,
#         primaryreview_id=1)

#     review2 = SecondaryReview(
#         name='Chicken Parmesan',
#         description='off the charts, on god very enjoyable.',
#         image='https://theblondcook.com/wp-content/uploads/2021/02/chicken-parmesan-6.jpg',
#         address='3200 California Ave, santa barbara, CA, 93101',
#         rating=10,
#         user_id=1,
#         primaryreview_id=2)

#     review2b = SecondaryReview(
#         name='Chicken Parmesan',
#         description='Absolutely loved it',
#         image='https://www.cookingclassy.com/wp-content/uploads/2013/02/chicken-parmesan-16.jpg',
#         address='3200 California Ave, santa barbara, CA, 93101',
#         rating=8,
#         user_id=1,
#         primaryreview_id=2)

#     review2c = SecondaryReview(
#         name='Chicken Parmesan',
#         description='It was a great dish. I would definitely come back, I had app that was not as good but the chicken parmesan made up for it.',
#         image='https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_2560%2Cc_limit/Chicken-Parmesean-Recipe-Lede.jpg',
#         address='21 Orchard Street, santa barbara, CA, 93101',
#         rating=7,
#         user_id=2,
#         primaryreview_id=2)

#     review3 = SecondaryReview(
#         name='Pad Thai',
#         description='It was flavorful and authentic... would go back!',
#         image='https://www.chilipeppermadness.com/wp-content/uploads/2022/03/Pad-Thai-SQ-500x375.jpg',
#         address='805 lighthouse Ave, santa barbara, CA, 93101',
#         rating=7,
#         user_id=1,
#         primaryreview_id=3)

#     review3b = SecondaryReview(
#         name='Pad Thai',
#         description='So unique and flavorful.',
#         image='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_04/1832538/pad-thai-kb-1x1-220124.jpg',
#         address='805 lighthouse Ave, santa barbara, CA, 93101',
#         rating=6,
#         user_id=1,
#         primaryreview_id=3)

#     review3c = SecondaryReview(
#         name='Pad Thai',
#         description="I can't believe the Pad Thai was so good.... it was better than in Thailand!!!",
#         image='https://christieathome.com/wp-content/uploads/2020/05/Chicken-Pad-Thai-24.jpg',
#         address='666 orange Ave, santa barbara, CA, 93101',
#         rating=10,
#         user_id=2,
#         primaryreview_id=3)


#     db.session.add(review1)
#     db.session.add(review1b)
#     db.session.add(review1c)
#     db.session.add(review2)
#     db.session.add(review2b)
#     db.session.add(review2c)
#     db.session.add(review3)
#     db.session.add(review3b)
#     db.session.add(review3c)
#     db.session.commit()


# def undo_secondaryreviews():
#     if environment == "production":
#         db.session.execute(f"TRUNCATE table {SCHEMA}.primary_reviews RESTART IDENTITY CASCADE;")
#     else:
#         db.session.execute("DELETE FROM primary_reviews")

#     db.session.commit()