from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        firstname='Demo', email='demo@aa.io', password='password', lookingfor='women', image='https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg')
    caroline = User(
        firstname='Caroline', email='caroline@aa.io', password='password', lookingfor='men', image='https://seriemaniacos.tv/wp-content/uploads/2012/06/Caroline-Channing.jpg')
    max = User(
        firstname='Max', email='max@aa.io', password='password', lookingfor='men', image='https://www.thetvaddict.com/wp-content/uploads/2013/01/Untitled-14.jpg')
    sophie = User(
        firstname='Sophie', email='sophie@aa.io', password='password', lookingfor='men', image="https://hopeswonderland.files.wordpress.com/2015/03/sophie-kachinsky-2-broke-girls.jpg")
    serena = User(
        firstname='Serena', email='serena@aa.io', password='password', lookingfor='men', image='https://publish.purewow.net/wp-content/uploads/sites/2/2022/05/serena-van-der-woodsen-villain.jpg')
    blair = User(
        firstname='Blair', email='blair@aa.io', password='password', lookingfor='men', image='https://i.pinimg.com/736x/29/43/e8/2943e8ca9e3b5f420bb827b9cc87fb19--gossip-girl-hairstyles-celebrity-hairstyles.jpg')

    db.session.add(demo)
    db.session.add(caroline)
    db.session.add(max)
    db.session.add(sophie)
    db.session.add(serena)
    db.session.add(blair)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
