from app.models import db, Match, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_matches():

    caroline = Match(
        user_id=2, score=22)

    max = Match(
        user_id=3, score=18)

    sophie = Match(
        user_id=4, score=25)

    serena = Match(
        user_id=5, score=12)

    blair = Match(
        user_id=6, score=16)

    mulan = Match(
        user_id=7, score=22)

    rose = Match(
        user_id=8, score=15)

    bonnie = Match(
        user_id=9, score=28)

    sofia = Match(
        user_id=10, score=9)

    alexis = Match(
        user_id=11, score=17)

    stevie = Match(
        user_id=12, score=11)

    db.session.add(caroline)
    db.session.add(max)
    db.session.add(sophie)
    db.session.add(serena)
    db.session.add(blair)
    db.session.add(mulan)
    db.session.add(rose)
    db.session.add(bonnie)
    db.session.add(sofia)
    db.session.add(alexis)
    db.session.add(stevie)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.


def undo_matches():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.matches RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM matches")

    db.session.commit()
