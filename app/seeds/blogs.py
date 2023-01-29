from app.models import db, Blog, environment, SCHEMA

# Adds a demo user, you can add other users here if you want
def seed_blogs():

    caroline = Blog(
        user_id=2, user_name='Caroline', post='Having a great time! Brunch with friends!', image1='https://media.istockphoto.com/id/1066990186/photo/multi-ethnic-group-of-friends-eating-lunch-in-a-restaurant.jpg?s=612x612&w=0&k=20&c=zOC7akYY1LuRu0wTt7I_Omnvu-z9cxCVTTnbROlQ_zc=', )

    max = Blog(
        user_id=3, user_name='Max', post='Should I learn to ride a bike?', image1='https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Cycling/Articles/Minimal+Injury+and+Damage/bike+crash-carousel.jpg')

    sophie = Blog(
        user_id=4, user_name='Sophie', post='BABY IS COMING', image1='https://cdn.seat42f.com/wp-content/uploads/2016/09/10213331/2-BROKE-GIRLS-Season-6-Episode-1-Photos-And-the-Two-Openings-Part-One-05.jpg')

    serena = Blog(
        user_id=5, user_name='Serena', post='New semester', image1='https://i.insider.com/4ecacfe469bedd560d000004?width=600&format=jpeg&auto=webp')

    # blair = Blog(
    #     user_id=6, user_name='Blair', post='', image1='', image2='')

    # mulan = Blog(
    #     user_id=7, user_name='Mulan', post='', image1='', image2='')

    # rose = Blog(
    #     user_id=8, user_name='Rose', post='', image1='', image2='')

    # bonnie = Blog(
    #     user_id=9, user_name='Bonnie', post='', image1='', image2='')

    sofia = Blog(
        user_id=10, user_name='Sofia', post='Love my new outfits!', image1='https://medias.spotern.com/spots/w640/204/204950-1559810082.jpg')

    # alexis = Blog(
    #     user_id=11, user_name='Alexis', post='', image1='', image2='')

    # stevie = Blog(
    #     user_id=12, user_name='Stevie', post='', image1='', image2='')

    db.session.add(caroline)
    db.session.add(max)
    db.session.add(sophie)
    db.session.add(serena)
    # db.session.add(blair)
    # db.session.add(mulan)
    # db.session.add(rose)
    # db.session.add(bonnie)
    db.session.add(sofia)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.


def undo_blogs():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.blogs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM blogs")

    db.session.commit()
