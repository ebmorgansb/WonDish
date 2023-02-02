from app.models import db, PrimaryReview, environment, SCHEMA


def seed_primaryreviews():

    # review11 = PrimaryReview(
    #     name='chicken',
    #     description='So tender will come back shortly!',
    #     image='https://www.simplyrecipes.com/thmb/WXzv7XkTQvFEpYnyyk4x5HRMtVc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Chicken-LEAD-SEO-Horizontal-1b86ef1e115444ba8b6fb216f2810c7c.jpg',
    #     address='5002 forest street',
    #     rating=6,
    #     user_id=1,
    #     restaurant_id=1)


    review1 = PrimaryReview(
        name='burrito',
        description='Definitely solid',
        image='https://cdn.foodbeast.com/wp-content/uploads/2017/08/CAM4186.jpg',
        address='Taqueria El Buen Gusto, North Milpas Street, Santa Barbara, CA, USA',
        rating=7,
        user_id=1,
        restaurant_id=1)

    review1a = PrimaryReview(
        name='burrito',
        description='It was a solid burrito',
        image='https://static.wixstatic.com/media/e82dd7_366ee2ec761a4c70a910db016b1efcde~mv2.jpg/v1/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Burrito%204.jpg',
        address='Taqueria El Buen Gusto, North Milpas Street, Santa Barbara, CA, USA',
        rating=8,
        user_id=1,
        restaurant_id=1)

    review1b = PrimaryReview(
        name='burrito',
        description='It was delicious but not traditional',
        image='https://www.shutterstock.com/image-photo/mexican-beef-burrito-260nw-1349138753.jpg',
        address='Taqueria El Buen Gusto, North Milpas Street, Santa Barbara, CA, USA',
        rating=9,
        user_id=1,
        restaurant_id=1)

    review1c = PrimaryReview(
        name='burrito',
        description='This may have been the best burrito I have ever had',
        image='https://www.mexicanplease.com/wp-content/uploads/2022/09/Easy-Ground-Beef-Burritos-5.jpg',
        address='Taqueria El Buen Gusto, North Milpas Street, Santa Barbara, CA, USA',
        rating=10,
        user_id=2,
        restaurant_id=1)

    review2 = PrimaryReview(
        name='burrito',
        description='Slaps 100%',
        image='https://cdn.foodbeast.com/wp-content/uploads/2017/08/CAM4186.jpg',
        address="Mony's Mexican Food, Anacapa Street, Santa Barbara, CA, USA",
        rating=10,
        user_id=1,
        restaurant_id=2)

    review2a = PrimaryReview(
        name='burrito',
        description='It was a solid burrito',
        image='https://static.wixstatic.com/media/e82dd7_366ee2ec761a4c70a910db016b1efcde~mv2.jpg/v1/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Burrito%204.jpg',
        address="Mony's Mexican Food, Anacapa Street, Santa Barbara, CA, USA",
        rating=10,
        user_id=1,
        restaurant_id=2)

    review2b = PrimaryReview(
        name='burrito',
        description='It was delicious but not traditional',
        image='https://www.shutterstock.com/image-photo/mexican-beef-burrito-260nw-1349138753.jpg',
        address="Mony's Mexican Food, Anacapa Street, Santa Barbara, CA, USA",
        rating=10,
        user_id=1,
        restaurant_id=2)

    review2c = PrimaryReview(
        name='burrito',
        description='This may have been the best burrito I have ever had',
        image='https://www.mexicanplease.com/wp-content/uploads/2022/09/Easy-Ground-Beef-Burritos-5.jpg',
        address="Mony's Mexican Food, Anacapa Street, Santa Barbara, CA, USA",
        rating=10,
        user_id=2,
        restaurant_id=2)

    review3 = PrimaryReview(
        name='burrito',
        description='Slaps 100%',
        image='https://cdn.foodbeast.com/wp-content/uploads/2017/08/CAM4186.jpg',
        address="Taqueria El Bajio, North Milpas Street, Santa Barbara, CA, USA",
        rating=9,
        user_id=1,
        restaurant_id=3)

    review3a = PrimaryReview(
        name='burrito',
        description='It was a solid burrito',
        image='https://static.wixstatic.com/media/e82dd7_366ee2ec761a4c70a910db016b1efcde~mv2.jpg/v1/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Burrito%204.jpg',
        address="Taqueria El Bajio, North Milpas Street, Santa Barbara, CA, USA",
        rating=9,
        user_id=1,
        restaurant_id=3)

    review3b = PrimaryReview(
        name='burrito',
        description='It was delicious but not traditional',
        image='https://www.shutterstock.com/image-photo/mexican-beef-burrito-260nw-1349138753.jpg',
        address="Taqueria El Bajio, North Milpas Street, Santa Barbara, CA, USA",
        rating=9,
        user_id=1,
        restaurant_id=3)

    review3c = PrimaryReview(
        name='burrito',
        description='This may have been the best burrito I have ever had',
        image='https://www.mexicanplease.com/wp-content/uploads/2022/09/Easy-Ground-Beef-Burritos-5.jpg',
        address="Taqueria El Bajio, North Milpas Street, Santa Barbara, CA, USA",
        rating=9,
        user_id=1,
        restaurant_id=3)

    review4 = PrimaryReview(
        name='burrito',
        description='Slaps 100%',
        image='https://cdn.foodbeast.com/wp-content/uploads/2017/08/CAM4186.jpg',
        address="Super Cucas, West Micheltorena Street, Santa Barbara, CA, USA",
        rating=6,
        user_id=1,
        restaurant_id=4)

    review4a = PrimaryReview(
        name='burrito',
        description='It was a solid burrito',
        image='https://static.wixstatic.com/media/e82dd7_366ee2ec761a4c70a910db016b1efcde~mv2.jpg/v1/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Burrito%204.jpg',
        address="Super Cucas, West Micheltorena Street, Santa Barbara, CA, USA",
        rating=6,
        user_id=1,
        restaurant_id=4)

    review4b = PrimaryReview(
        name='burrito',
        description='It was delicious but not traditional',
        image='https://www.shutterstock.com/image-photo/mexican-beef-burrito-260nw-1349138753.jpg',
        address="Super Cucas, West Micheltorena Street, Santa Barbara, CA, USA",
        rating=6,
        user_id=1,
        restaurant_id=4)

    review4c = PrimaryReview(
        name='burrito',
        description='This may have been the best burrito I have ever had',
        image='https://www.mexicanplease.com/wp-content/uploads/2022/09/Easy-Ground-Beef-Burritos-5.jpg',
        address="Super Cucas, West Micheltorena Street, Santa Barbara, CA, USA",
        rating=6,
        user_id=1,
        restaurant_id=4)




























    review5 = PrimaryReview(
        name='tacos',
        description='Definitely solid',
        image='https://www.acouplecooks.com/wp-content/uploads/2021/07/Plant-based-vegan-street-tacos-005.jpg',
        address='Taqueria El Buen Gusto, North Milpas Street, Santa Barbara, CA, USA',
        rating=7,
        user_id=2,
        restaurant_id=1)

    review5a = PrimaryReview(
        name='tacos',
        description='It was solid tacos',
        image='https://www.dontsweattherecipe.com/wp-content/uploads/2015/10/streettaco06.jpg',
        address='Taqueria El Buen Gusto, North Milpas Street, Santa Barbara, CA, USA',
        rating=8,
        user_id=1,
        restaurant_id=1)

    review5b = PrimaryReview(
        name='tacos',
        description='It was delicious but not traditional',
        image='https://i0.wp.com/www.imbored-letsgo.com/wp-content/uploads/2015/04/Carne-Asada-Street-Tacos.jpg',
        address='Taqueria El Buen Gusto, North Milpas Street, Santa Barbara, CA, USA',
        rating=9,
        user_id=1,
        restaurant_id=1)

    review5c = PrimaryReview(
        name='tacos',
        description='This may have been the best tacos I have ever had',
        image='https://www.eatingonadime.com/wp-content/uploads/2020/10/carne-asada-5.jpg',
        address='Taqueria El Buen Gusto, North Milpas Street, Santa Barbara, CA, USA',
        rating=10,
        user_id=2,
        restaurant_id=1)

    review6 = PrimaryReview(
        name='tacos',
        description='Slaps 100%',
        image='https://images.ctfassets.net/hhv516v5f7sj/64JlXlOvlLZ2j3mObrVr9/a15defb20aed27983792291a32b8610c/IMPOSSIBLE__STREET_TACOS_.jpeg',
        address="Mony's Mexican Food, Anacapa Street, Santa Barbara, CA, USA",
        rating=10,
        user_id=1,
        restaurant_id=2)

    review6a = PrimaryReview(
        name='tacos',
        description='It was solid tacos',
        image='https://www.clovermeadowsbeef.com/wp-content/uploads/2022/06/street-tacos-carne-asada-easy-clover-meadows-beef.png',
        address="Mony's Mexican Food, Anacapa Street, Santa Barbara, CA, USA",
        rating=10,
        user_id=1,
        restaurant_id=2)

    review6b = PrimaryReview(
        name='tacos',
        description='It was delicious but not traditional',
        image='https://nerdymamma.com/wp-content/uploads/2016/09/shredded-chicken-street-taco-recipe-fea-480x360.jpg',
        address="Mony's Mexican Food, Anacapa Street, Santa Barbara, CA, USA",
        rating=10,
        user_id=2,
        restaurant_id=2)

    review6c = PrimaryReview(
        name='tacos',
        description='This may have been the best tacos I have ever had',
        image='https://www.lecremedelacrumb.com/wp-content/uploads/2014/01/santa-monica-street-tacos-91.jpg',
        address="Mony's Mexican Food, Anacapa Street, Santa Barbara, CA, USA",
        rating=10,
        user_id=2,
        restaurant_id=2)

    review7 = PrimaryReview(
        name='tacos',
        description='Slaps 100%',
        image='https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2020/04/Pork-Street-Tacos-1828.jpg',
        address="Taqueria El Bajio, North Milpas Street, Santa Barbara, CA, USA",
        rating=9,
        user_id=1,
        restaurant_id=3)

    review7a = PrimaryReview(
        name='tacos',
        description='It was solid tacos',
        image='https://tornadoughalli.com/wp-content/uploads/2017/05/Slow-cooker-street-tacos-20-of-21.jpg',
        address="Taqueria El Bajio, North Milpas Street, Santa Barbara, CA, USA",
        rating=9,
        user_id=2,
        restaurant_id=3)

    review7b = PrimaryReview(
        name='tacos',
        description='It was delicious but not traditional',
        image='https://cdn.momsdish.com/wp-content/uploads/2020/04/Carne-Asada-Street-Tacos-19-scaled.jpg',
        address="Taqueria El Bajio, North Milpas Street, Santa Barbara, CA, USA",
        rating=9,
        user_id=1,
        restaurant_id=3)

    review7c = PrimaryReview(
        name='tacos',
        description='This may have been the best tacos I have ever had',
        image='https://www.productosreal.com/wp-content/uploads/2020/10/AdobeStock_378032494-1024x650.jpeg',
        address="Taqueria El Bajio, North Milpas Street, Santa Barbara, CA, USA",
        rating=9,
        user_id=1,
        restaurant_id=3)

    review8 = PrimaryReview(
        name='tacos',
        description='Slaps 100%',
        image='https://elmariachiparkersburg.com/wp-content/uploads/2021/04/blog-10-1024x577.jpg',
        address="Super Cucas, West Micheltorena Street, Santa Barbara, CA, USA",
        rating=6,
        user_id=3,
        restaurant_id=4)

    review8a = PrimaryReview(
        name='tacos',
        description='It was solid tacos',
        image='https://blog.assets.triptrivia.com/2019/05/Tacos.jpg',
        address="Super Cucas, West Micheltorena Street, Santa Barbara, CA, USA",
        rating=6,
        user_id=1,
        restaurant_id=4)

    review8b = PrimaryReview(
        name='tacos',
        description='It was delicious but not traditional',
        image='https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/al-pastor-street-tacos-recipe.jpg',
        address="Super Cucas, West Micheltorena Street, Santa Barbara, CA, USA",
        rating=6,
        user_id=1,
        restaurant_id=4)

    review8c = PrimaryReview(
        name='tacos',
        description='This may have been the best tacos I have ever had',
        image='https://bluejeanchef.com/uploads/2019/03/street-taco-3-for-web-e1588278150321-480x600.jpg',
        address="Super Cucas, West Micheltorena Street, Santa Barbara, CA, USA",
        rating=6,
        user_id=3,
        restaurant_id=4)
    # review2 = PrimaryReview(
    #     name='Chicken Parm',
    #     description='literally the best',
    #     image='https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Parmesan-Recipe-f-500x500.jpg',
    #     address='3200 California Ave',
    #     rating=10,
    #     user_id=1,
    #     restaurant_id=1)

    # review3 = PrimaryReview(
    #     name='Pad Thai',
    #     description='Better than average',
    #     image='https://www.aheadofthyme.com/wp-content/uploads/2020/04/10-minute-chicken-pad-thai-7.jpg',
    #     address='805 lighthouse Ave',
    #     rating=6,
    #     user_id=1,
    #     restaurant_id=1)

    # review4 = PrimaryReview(
    #     name='sandwich',
    #     description='Loved it',
    #     image='https://assets.bonappetit.com/photos/62b1f659a38f8b1339b88af8/5:4/w_2715,h_2172,c_limit/20220615-0622-sandwiches-1746-final%20(1).jpg',
    #     address='909 speedway street',
    #     rating=8,
    #     user_id=2,
    #     restaurant_id=1)

    # review5 = PrimaryReview(
    #     name='ice cream',
    #     description='The creaminess was off the charts',
    #     image='https://www.kawalingpinoy.com/wp-content/uploads/2017/07/homemade-ube-macapuno-ice-cream-4.jpg',
    #     address='9062 elf road',
    #     rating=9,
    #     user_id=1,
    #     restaurant_id=1)

    # review6 = PrimaryReview(
    #     name='tacos',
    #     description='The meat was cooked perfectly',
    #     image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/birria-tacos-1648842127.jpg',
    #     address='11 adobo street',
    #     rating=7,
    #     user_id=1,
    #     restaurant_id=1)

    # review7 = PrimaryReview(
    #     name='curry',
    #     description='I could not get enough of this amazing spice',
    #     image='https://www.allrecipes.com/thmb/j-UIY1oXZZWisuG5e5tRitsOvIs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005-8570fd9bcab845519550c6ff5c71e213.jpg',
    #     address='11 casa road',
    #     rating=6,
    #     user_id=3,
    #     restaurant_id=1)

    # review8 = PrimaryReview(
    #     name='pizza',
    #     description='The best crust I have ever had by far',
    #     image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    #     address='600 marinara lane',
    #     rating=9,
    #     user_id=3,
    #     restaurant_id=1)

    # review9 = PrimaryReview(
    #     name='hot wings',
    #     description='Honestly just the way I like them',
    #     image='https://upload.wikimedia.org/wikipedia/commons/5/51/Buffalo_wings-01.jpg',
    #     address='90 rabbit street',
    #     rating=8,
    #     user_id=3,
    #     restaurant_id=1)

    # review10 = PrimaryReview(
    #     name='fries',
    #     description='Crispy and perfect',
    #     image='https://recipe30.com/wp-content/uploads/2017/06/French-fries-848x477.jpg',
    #     address='501 freedom ave',
    #     rating=10,
    #     user_id=1,
    #     restaurant_id=1)


    # review12 = PrimaryReview(
    #     name='sushi',
    #     description='The salmon roll was perfect and the wasabi was real!',
    #     image='https://www.fifteenspatulas.com/wp-content/uploads/2016/06/Homemade-Sushi-4-640x959.jpg',
    #     address='993 Spinaker ave',
    #     rating=9,
    #     user_id=1,
    #     restaurant_id=1)

    # review13 = PrimaryReview(
    #     name='burger',
    #     description='The bun was amazing and patties were so flavorfull',
    #     image='https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/102cf51c-9220-4278-8b63-2b9611ad275e/Derivates/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg',
    #     address='432 orange ave',
    #     rating=8,
    #     user_id=1,
    #     restaurant_id=1)

    # review14 = PrimaryReview(
    #     name='mac and cheese',
    #     description='I could eat this every day',
    #     image='https://www.recipetineats.com/wp-content/uploads/2020/11/Baked-Mac-and-Cheese-pull-shot.jpg',
    #     address='432 orange ave',
    #     rating=9,
    #     user_id=1,
    #     restaurant_id=1)

    # review15 = PrimaryReview(
    #     name='steak',
    #     description='The steak was cooked perfectly',
    #     image='https://www.skinnytaste.com/wp-content/uploads/2022/03/Air-Fryer-Steak-6-500x500.jpg',
    #     address='101 Eureka street',
    #     rating=6,
    #     user_id=1,
    #     restaurant_id=1)

    # review16 = PrimaryReview(
    #     name='cookies',
    #     description='Loved the chocolate chips and chewiness',
    #     image='https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg',
    #     address='78 pilot road',
    #     rating=7,
    #     user_id=2,
    #     restaurant_id=1)

    # review17 = PrimaryReview(
    #     name='fried chicken',
    #     description='Crispy outside and tender inside!!!',
    #     image='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.406.406.suffix/1568222255998.jpeg',
    #     address='67 floral street',
    #     rating=6,
    #     user_id=1,
    #     restaurant_id=1)

    db.session.add(review1)
    db.session.add(review1a)
    db.session.add(review1b)
    db.session.add(review1c)
    db.session.add(review2)
    db.session.add(review2a)
    db.session.add(review2b)
    db.session.add(review2c)
    db.session.add(review3)
    db.session.add(review3a)
    db.session.add(review3b)
    db.session.add(review3c)
    db.session.add(review4)
    db.session.add(review4a)
    db.session.add(review4b)
    db.session.add(review4c)
    db.session.add(review5)
    db.session.add(review5a)
    db.session.add(review5b)
    db.session.add(review5c)
    db.session.add(review6)
    db.session.add(review6a)
    db.session.add(review6b)
    db.session.add(review6c)
    db.session.add(review7)
    db.session.add(review7a)
    db.session.add(review7b)
    db.session.add(review7c)
    db.session.add(review8)
    db.session.add(review8a)
    db.session.add(review8b)
    db.session.add(review8c)
    db.session.commit()


def undo_primaryreviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.primary_reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM primary_reviews")

    db.session.commit()