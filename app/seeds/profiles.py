from app.models import db, Profile, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_profiles():

    caroline = Profile(
        user_id=2, bio='I am sophisticated and comes from a wealthy background, but I was forced into waitressing and doing occasional odd jobs after my home and all my money is taken when the government finds out that my father, Martin Channing, is involved in a Ponzi Scheme and stole investors money.', work='waitress', age=24, hometown='New York')

    max = Profile(
        user_id=3, bio='I come from a dysfunctional family. I do not have big ambition and I enjoy a normal life. Sometimes I can be  slightly bitter, but I try to hide it with my sarcasm as my emotional shield.', work='waitress', age=26, hometown='New Jersey')

    sophie = Profile(
        user_id=4, bio="I was born in Poland and have lived in Poland for all of my youth. Moving to America, I opened a cleaning business that I named Sophie's Choice.", work='owner of a cleaning business', age=40, hometown='Poland')

    serena = Profile(
        user_id=5, bio="My motives are rarely selfish and my negative actions are oftentimes generally motivated by a lack of foresight rather than real malice. Due to watching my mother's many failed marriages, I have issues with truly committing to a man and understanding what real love is.", work='student', age=22, hometown='New York')

    blair = Profile(
        user_id=6, bio="Despite leading a privileged and prominent lifestyle, I am generally a comical overachiever. At times, my ambition can lead me to embrace a haughty and scheming side. I am ruled by my insecurities, despite a confident exterior, usually caused by my feeling inferior. I have a sensitive and loving nature as well.", work='student', age=22, hometown='New York')
    mulan = Profile(
        user_id=7, bio="I have a dog named Little Brother. I am urged to uphold my family honor by adhering to the status quo set for women. I love and care about my family very much. During my time in camp, my personality shifts. I prove to be fierce, both physically and mentally, as well as self-reliant, impressionable, and persistent. ", work='soldier', age=20, hometown='China')

    rose = Profile(
        user_id=8, bio="I am very smart and well-educated, having an upper class education. I am also very passionate, particularly in my romantic feelings. I am also a talented actress, reforming in New York for a time.", work='actress', age=35, hometown='Philadelphia')

    bonnie = Profile(
        user_id=9, bio="I am a good-hearted, bubbly, sweet, fun-loving, spirited and optimistic individual. I make a very loving, devoted, loyal and caring friend. I could be considered to be a very spiritual person.", work='witch', age=31, hometown='Virginia')

    sofia = Profile(
        user_id=10, bio="I am an ambitious career girl, who is a Soul Spin instructor, because of my tenacious ability to scream at people. I have a strong personality. I can stand up by myself and I always stand by what I say. I am a very smart and creative girl but I am also very picky about dating the perfect guy.", work='Personal assistant', age=30, hometown='Florida')

    alexis = Profile(
        user_id=11, bio="I am generous and kindhearted, embracing the potential of nearly every individual or opportunity I come across.", work='publicist', age=23, hometown='Canada')

    stevie = Profile(
        user_id=12, bio="I am introverted, have few friends, and dislike social interaction. I am also cynical, often tend to believe the worst will happen. I tend to suffers from low self-esteem and a lack of self confidence.", work='desk clerk', age=26, hometown="Schitt's Creek")

    db.session.add(caroline)
    db.session.add(max)
    db.session.add(sophie)
    db.session.add(serena)
    db.session.add(blair)
    db.session.add(mulan)
    db.session.add(rose)
    db.session.add(bonnie)
    db.session.add(sofia)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_profiles():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.profiles RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM profiles")

    db.session.commit()
