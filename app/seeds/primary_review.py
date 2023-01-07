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

    review5 = PrimaryReview(
        name='ice cream',
        description='The creaminess was off the charts',
        image='https://www.kawalingpinoy.com/wp-content/uploads/2017/07/homemade-ube-macapuno-ice-cream-4.jpg',
        address='9062 elf road',
        rating=9,
        user_id=1)

    review6 = PrimaryReview(
        name='tacos',
        description='The meat was cooked perfectly',
        image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/birria-tacos-1648842127.jpg',
        address='11 adobo street',
        rating=7,
        user_id=1)

    review7 = PrimaryReview(
        name='curry',
        description='I could not get enough of this amazing spice',
        image='https://www.allrecipes.com/thmb/j-UIY1oXZZWisuG5e5tRitsOvIs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005-8570fd9bcab845519550c6ff5c71e213.jpg',
        address='11 casa road',
        rating=6,
        user_id=3)

    review8 = PrimaryReview(
        name='pizza',
        description='The best crust I have ever had by far',
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        address='600 marinara lane',
        rating=9,
        user_id=3)

    review9 = PrimaryReview(
        name='hot wings',
        description='Honestly just the way I like them',
        image='https://upload.wikimedia.org/wikipedia/commons/5/51/Buffalo_wings-01.jpg',
        address='90 rabbit street',
        rating=8,
        user_id=3)

    review10 = PrimaryReview(
        name='fries',
        description='Crispy and perfect',
        image='https://recipe30.com/wp-content/uploads/2017/06/French-fries-848x477.jpg',
        address='501 freedom ave',
        rating=10,
        user_id=1)

    review11 = PrimaryReview(
        name='chicken',
        description='So tender will come back shortly!',
        image='https://www.simplyrecipes.com/thmb/WXzv7XkTQvFEpYnyyk4x5HRMtVc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Chicken-LEAD-SEO-Horizontal-1b86ef1e115444ba8b6fb216f2810c7c.jpg',
        address='5002 forest street',
        rating=6,
        user_id=2)

    review12 = PrimaryReview(
        name='sushi',
        description='The salmon roll was perfect and the wasabi was real!',
        image='https://www.fifteenspatulas.com/wp-content/uploads/2016/06/Homemade-Sushi-4-640x959.jpg',
        address='993 Spinaker ave',
        rating=9,
        user_id=1)

    review13 = PrimaryReview(
        name='burger',
        description='The bun was amazing and patties were so flavorfull',
        image='https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/102cf51c-9220-4278-8b63-2b9611ad275e/Derivates/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg',
        address='432 orange ave',
        rating=8,
        user_id=1)

    review14 = PrimaryReview(
        name='mac and cheese',
        description='I could eat this every day',
        image='https://www.recipetineats.com/wp-content/uploads/2020/11/Baked-Mac-and-Cheese-pull-shot.jpg',
        address='432 orange ave',
        rating=9,
        user_id=1)

    review15 = PrimaryReview(
        name='steak',
        description='The steak was cooked perfectly',
        image='https://www.skinnytaste.com/wp-content/uploads/2022/03/Air-Fryer-Steak-6-500x500.jpg',
        address='101 Eureka street',
        rating=6,
        user_id=1)

    review16 = PrimaryReview(
        name='cookies',
        description='Loved the chocolate chips and chewiness',
        image='https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg',
        address='78 pilot road',
        rating=7,
        user_id=2)

    review17 = PrimaryReview(
        name='fried chicken',
        description='Crispy outside and tender inside!!!',
        image='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.406.406.suffix/1568222255998.jpeg',
        address='67 floral street',
        rating=6,
        user_id=1)

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)
    db.session.add(review17)
    db.session.commit()


def undo_primaryreviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.primary_reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM primary_reviews")

    db.session.commit()