from app.models import db, PrimaryReview, environment, SCHEMA


def seed_primaryreviews():

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
        image='https://www.wellplated.com/wp-content/uploads/2014/07/Easy-Summer-Vegetable-and-Black-Bean-Burritos.jpg',
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
        image='https://assets.bonappetit.com/photos/5aec939abc86f9377d4c189c/5:4/w_3514,h_2811,c_limit/roll-up-breakfast-burrito.jpg',
        address="Mony's Mexican Food, Anacapa Street, Santa Barbara, CA, USA",
        rating=10,
        user_id=1,
        restaurant_id=2)

    review2a = PrimaryReview(
        name='burrito',
        description='It was a solid burrito',
        image='https://www.spoonforkbacon.com/wp-content/uploads/2021/09/carnitas-burrito-recipe.jpg',
        address="Mony's Mexican Food, Anacapa Street, Santa Barbara, CA, USA",
        rating=10,
        user_id=1,
        restaurant_id=2)

    review2b = PrimaryReview(
        name='burrito',
        description='It was delicious but not traditional',
        image='https://thecheekychickpea.com/wp-content/uploads/2019/08/vegan-burrito-1.jpg',
        address="Mony's Mexican Food, Anacapa Street, Santa Barbara, CA, USA",
        rating=10,
        user_id=1,
        restaurant_id=2)

    review2c = PrimaryReview(
        name='burrito',
        description='This may have been the best burrito I have ever had',
        image='https://res.cloudinary.com/hksqkdlah/image/upload/SFS_BreakfastBurritosBaconCrispyPotatoes-17_ohw8ql.jpg',
        address="Mony's Mexican Food, Anacapa Street, Santa Barbara, CA, USA",
        rating=10,
        user_id=2,
        restaurant_id=2)

    review3 = PrimaryReview(
        name='burrito',
        description='Slaps 100%',
        image='https://easywraprecipes.com/wp-content/uploads/2020/01/easy-sausage-spinach-breakfast-burrito-meal-prep-2-735x1000.jpg',
        address="Taqueria El Bajio, North Milpas Street, Santa Barbara, CA, USA",
        rating=9,
        user_id=1,
        restaurant_id=3)

    review3a = PrimaryReview(
        name='burrito',
        description='It was a solid burrito',
        image='https://cdn.shopify.com/s/files/1/0386/0769/articles/breakfast_burrito_-8_2000x.jpg?v=1623785152',
        address="Taqueria El Bajio, North Milpas Street, Santa Barbara, CA, USA",
        rating=9,
        user_id=1,
        restaurant_id=3)

    review3b = PrimaryReview(
        name='burrito',
        description='It was delicious but not traditional',
        image='https://cdn.vox-cdn.com/thumbor/5vlrRX551d35WauPcYWJm1jvK-Q=/0x0:640x597/1200x900/filters:focal(279x109:381x211)/cdn.vox-cdn.com/uploads/chorus_image/image/71453845/s385612283885438808_p3_i3_w750.0.jpeg',
        address="Taqueria El Bajio, North Milpas Street, Santa Barbara, CA, USA",
        rating=9,
        user_id=1,
        restaurant_id=3)

    review3c = PrimaryReview(
        name='burrito',
        description='This may have been the best burrito I have ever had',
        image='https://twokooksinthekitchen.com/wp-content/uploads/2022/06/breakfast-burritos-make-ahead-10.jpg',
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
        image='https://carlsbadcravings.com/wp-content/uploads/2015/09/Califorina-Burrito-new-1.jpg',
        address="Super Cucas, West Micheltorena Street, Santa Barbara, CA, USA",
        rating=6,
        user_id=1,
        restaurant_id=4)

    review4b = PrimaryReview(
        name='burrito',
        description='It was delicious but not traditional',
        image='https://www.africanbites.com/wp-content/uploads/2013/04/IMG_6458-2-1.jpg',
        address="Super Cucas, West Micheltorena Street, Santa Barbara, CA, USA",
        rating=6,
        user_id=1,
        restaurant_id=4)

    review4c = PrimaryReview(
        name='burrito',
        description='This may have been the best burrito I have ever had',
        image='https://40aprons.com/wp-content/uploads/2021/05/chicken-burrito-6-scaled.jpg',
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

    review9 = PrimaryReview(
        name='burgers',
        description='The burger was cooked to perfection and had a great flavor!',
        image='https://images.prismic.io/aboutredlandscom/038cac29091c6dfa8a3a78035b1103cf2682997d_darbys---bruce-herwig-large.jpg?auto=compress,formatq=65&auto=compress,format&fm=jpg',
        address="Burger Joint, Main Street, Anytown, USA",
        rating=8,
        user_id=2,
        restaurant_id=5)

    review9a = PrimaryReview(
        name='burgers',
        description='The burger was good, but the bun was a bit dry',
        image='https://hips.hearstapps.com/hmg-prod/images/copycat-western-bacon-cheeseburger-2-1651789305.jpeg',
        address="Burger Joint, Main Street, Anytown, USA",
        rating=6,
        user_id=2,
        restaurant_id=5)

    review9b = PrimaryReview(
        name='burgers',
        description='The burger was okay, but nothing special',
        image='https://www.thespruceeats.com/thmb/vf61j0CDD-RYdis4LVqmBV5NDzU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/all-american-burgers-480989-hero-05-6d4542f5661c4fd6889c16a445478e0c.jpg',
        address="Burger Joint, Main Street, Anytown, USA",
        rating=6,
        user_id=1,
        restaurant_id=5)

    review9c = PrimaryReview(
        name='burgers',
        description='The burger was amazing! I would come back just for this burger',
        image='https://www.thespruceeats.com/thmb/NoTJR2ugIq8DslHCaR-ZzOcLBGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg',
        address="Burger Joint, Main Street, Anytown, USA",
        rating=9,
        user_id=3,
        restaurant_id=5)

    review10 = PrimaryReview(
        name='curry',
        description='The curry had a perfect blend of spices and was delicious!',
        image='https://images.kitchenstories.io/wagtailOriginalImages/R2675-final-photo-_2.jpg',
        address="Curry House, Main Street, Anytown, USA",
        rating=8,
        user_id=1,
        restaurant_id=7)

    review10a = PrimaryReview(
        name='curry',
        description='The curry was good, but a bit too spicy for my taste',
        image='https://www.simplyrecipes.com/thmb/px_fVY9ew0_BS1ipltJ81f9Yn_Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Guyanese-Chicken-Curry-LEAD-01-31bbe0db922e4e0cb63afbea2e4c3c3e.jpg',
        address="Curry House, Main Street, Anytown, USA",
        rating=7,
        user_id=2,
        restaurant_id=7)

    review10b = PrimaryReview(
        name='curry',
        description='The curry was okay, but I\'ve had better elsewhere',
        image='https://www.recipetineats.com/wp-content/uploads/2019/02/Thai-Green-Curry_5.jpg',
        address="Curry House, Main Street, Anytown, USA",
        rating=6,
        user_id=3,
        restaurant_id=7)

    review10c = PrimaryReview(
        name='curry',
        description='The curry was amazing! I would definitely recommend it',
        image='https://img.taste.com.au/Dv2EStdy/taste/2019/02/17-minute-creamy-japanese-chicken-curry-146697-2.jpg',
        address="Curry House, Main Street, Anytown, USA",
        rating=9,
        user_id=1,
        restaurant_id=7)



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
    db.session.add(review9)
    db.session.add(review9a)
    db.session.add(review9b)
    db.session.add(review9c)
    db.session.add(review10)
    db.session.add(review10a)
    db.session.add(review10b)
    db.session.add(review10c)
    db.session.commit()

#test
def undo_primaryreviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.primary_reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM primary_reviews")

    db.session.commit()